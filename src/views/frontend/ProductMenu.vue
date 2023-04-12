<template>
  <div class="vl-parent">
    <LoadingView v-model:active="isLoading"
                :can-cancel="false"
                :color="color"
                :loader="'bars'"
                :is-full-page="true"/>
    <div class="container-fluid header-picture d-flex flex-column justify-content-center">
      <div class="container">
        <div class="row list-unstyled mb-0 justify-content-center align-items-center border border-1 border-dark text-center">
          <div class="col category word-nowrap py-3 fz-6"
          value="全部商品"
          @click="updateCategory('全部商品')"
          :class="{ active: category === '全部商品'}">
            全部商品
          </div>
          <div class="col category word-nowrap py-3 fz-6"
          value="新品上市"
          @click="updateCategory('新品上市')"
          :class="{ active: category === '新品上市'}">
            新品上市
          </div>
          <div class="col category word-nowrap py-3 fz-6"
          value="主廚推薦"
          @click="updateCategory('主廚推薦')"
          :class="{ active: category === '主廚推薦'}">
            主廚推薦
          </div>
          <div class="col category word-nowrap py-3 fz-6"
          value="暢銷商品"
          @click="updateCategory('暢銷商品')"
          :class="{ active: category === '暢銷商品'}">
            暢銷商品
          </div>
          <div class="col category word-nowrap py-3 fz-6"
          value="主菜尚品"
          @click="updateCategory('主菜尚品')"
          :class="{ active: category === '主菜尚品'}">
            主菜尚品
          </div>
          <div class="col category word-nowrap py-3 fz-6"
          value="經典名菜"
          @click="updateCategory('經典名菜')"
          :class="{ active: category === '經典名菜'}">
            經典名菜
          </div>
          <div class="col category word-nowrap py-3 fz-6"
          value="點心飲品"
          @click="updateCategory('點心飲品')"
          :class="{ active: category === '點心飲品'}">
            點心飲品
          </div>
          <div class="col category word-nowrap py-3 fz-6"
          value="精緻餐盒"
          @click="updateCategory('精緻餐盒')"
          :class="{ active: category === '精緻餐盒'}">
            精緻餐盒
          </div>
        </div>
      </div>
    </div>
    <div class="container my-10 mb-md-20">
      <div class="row">
        <div class="col-md-6 col-lg-3 mb-8 overflow-hidden" v-for="product in products" :key="product.id">
          <div class="card h-100 animate__animated swing-animate" @click.prevent="goDetail(`${product.id}`)">
            <div class="card-img-container">
              <img :src="product.imageUrl" class="card-img-top productImg" :alt="product.id">
            </div>
            <div class="card-body text-start">
              <h5 class="card-title fz-7 lh-base fw-bold">{{ product.title }}</h5>
              <p class="card-text">
                <span v-if="product.price === product.origin_price">
                  NT$
                  <ins class="text-decoration-none">
                    <span class="text-muted fw-bold fz-4 ">{{ product.price }}</span>
                  </ins>
                </span>
                <span v-else>
                  NT$
                  <s class="mr-1">
                    <span class="text-muted fw-normal fz-6 lh-1">{{ product.origin_price }}</span>
                  </s>
                  <ins class="text-decoration-none">
                    <span class="text-primary fz-4 ">{{ product.price }}</span>
                  </ins>
                </span>
              </p>
            </div>
            <div class="card-footer border-0 bg-white text-end">
              <button type="button" class="w-100 btn btn-primary btnCustomHover stretched-link mb-5">加入購物車</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <PaginationComponent
      :pages="pagination"
      @emit-page="getProducts"
    ></PaginationComponent>
  </div>
</template>

<script>
import 'animate.css'
import LoadingView from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import Swal from 'sweetalert2'
import PaginationComponent from '@/components/PaginationComponent.vue'

const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  components: {
    PaginationComponent,
    LoadingView
  },
  data () {
    return {
      color: '#C0362D',
      isLoading: true,
      category: '全部商品',
      products: [],
      selectProduct: {},
      pagination: {},
      currentPage: 1
    }
  },
  methods: {
    getProducts (page = 1, category = '') {
      this.isLoading = true
      if (this.$route.query.page) { // 接收從明細頁，傳回的 page，若從首頁過來，值為空
        this.currentPage = this.$route.query.page
        page = this.currentPage
        this.$route.query.page = ''
      }
      if (this.$route.query.category) { // 接收從明細頁，傳回的 category，若從首頁過來，值為空
        this.category = this.$route.query.category // 標題的 hover用
        // 當全部商品時，其 category 是 "全部商品"( 分類標題 hover 需要)
        // ，但是打API時，query string的 category需為空值('')
        category = this.category === '全部商品' ? '' : this.category // API用
        this.$route.query.category = ''
      }

      this.currentPage = page
      const url = `${VITE_URL}/api/${VITE_PATH}/products?page=${page}&category=${category}`
      this.$http.get(url)
        .then(res => {
          this.products = res.data.products
          this.pagination = res.data.pagination
          this.isLoading = false
        })
        .catch(err => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: err.response.data.message,
            showConfirmButton: false,
            timer: 1500
          })
        })
    },
    updateCategory (category) {
      this.category = category
      if (category === '全部商品') {
        this.getProducts()
      } else {
        this.getProducts(1, category)
      }
    },
    goDetail (id) {
      this.$router.push({
        name: 'product-detail',
        params: {
          id
        },
        query: {
          page: this.currentPage,
          category: this.category
        }
      })
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>

<style lang="scss">

.category {
  position:relative;
  cursor: pointer;
  &::after {
    content:"";
    display:block;
    width: 0;
    height: 4px;
    background-color: #C0362D;
    position:absolute;
    left: calc(50% - 40%);
    transition:.4s;
  }
  &:hover::after {
    width: calc(50% + 30%);
  }
  &.active::after {
    background-color: #B29575;
    width: 80%;
  }
}

.card {
  cursor: pointer;
  .card-img-container {
    overflow: hidden;
    position: relative;
    height: 0;
    padding-bottom: 85%;
    .productImg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.3s ease-out;
      transform-origin: center center;
    }
  }
  &:hover {
    .productImg {
      transition: all .7s ease-in-out;
      transform: scale(1.1);
    }
  }
}

.swing-animate {
  animation-name: bounceInRight, swing;
  -webkit-animation-name: bounceInRight, swing;
  -moz-animation-name: bounceInRight, swing;

  animation-duration: 1s, 2s;
  -webkit-animation-duration: 1s, 2s;
  -moz-animation-duration: 1s, 2s;
}

</style>
