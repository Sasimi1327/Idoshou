<template>
  <div class="container-fluid header-picture position-relative">
    <div class="container">
      <ul class="position-absolute list-unstyled d-flex justify-content-center align-items-center top-50 left-5 translate-middle-y py-4 border border-1 border-dark">
        <li value="全部商品" class="category word-nowrap px-5 py-3 fz-6"
          @click="updateCategory('全部商品')"
          :class="{ active: category === '全部商品'}">
          全部商品
        </li>
        <li value="新品上市" class="category word-nowrap px-5 py-3 fz-6"
          @click="updateCategory('新品上市')"
          :class="{ active: category === '新品上市'}">
          新品上市
        </li>
        <li value="主廚推薦" class="category word-nowrap px-5 py-3 fz-6"
          @click="updateCategory('主廚推薦')"
          :class="{ active: category === '主廚推薦'}">
          主廚推薦
        </li>
        <li value="暢銷商品" class="category word-nowrap px-5 py-3 fz-6"
          @click="updateCategory('暢銷商品')"
          :class="{ active: category === '暢銷商品'}">
          暢銷商品
        </li>
        <li value="主菜尚品" class="category word-nowrap px-5 py-3 fz-6"
          @click="updateCategory('主菜尚品')"
          :class="{ active: category === '主菜尚品'}">
          主菜尚品
        </li>
        <li value="經典名菜" class="category word-nowrap px-5 py-3 fz-6"
          @click="updateCategory('經典名菜')"
          :class="{ active: category === '經典名菜'}">
          經典名菜
        </li>
        <li value="點心飲品" class="category word-nowrap px-5 py-3 fz-6"
          @click="updateCategory('點心飲品')"
          :class="{ active: category === '點心飲品'}">
          點心飲品
        </li>
        <li value="精緻餐盒" class="category word-nowrap px-5 py-3 fz-6"
          @click="updateCategory('精緻餐盒')"
          :class="{ active: category === '精緻餐盒'}">
          精緻餐盒
        </li>
      </ul>
    </div>
  </div>

  <div class="container my-10 mb-md-20">
    <div class="row">
      <div class="col-md-6 col-lg-3 mb-8" v-for="product in products" :key="product.id">
        <div class="card h-100">
          <img :src="product.imageUrl" class="img-fluid card-img-top productImg" alt="">
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
            <button type="button" class="w-100 btn btn-primary stretched-link mb-5">加入購物車</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <PaginationView
    :pages="pagination"
    @emit-page="getProducts"
  ></PaginationView>
</template>

<script>
import PaginationView from '../components/PaginationView.vue'

const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  components: {
    PaginationView
  },
  data () {
    return {
      category: '全部商品',
      products: [],
      selectProduct: {},
      pagination: {},
      currentPage: 1
    }
  },
  methods: {
    getProducts (page = 1, category = '') {
      const url = `${VITE_URL}/api/${VITE_PATH}/products?page=${page}&category=${category}`
      this.$http.get(url)
        .then(res => {
          console.log(res)
          this.products = res.data.products
          this.pagination = res.data.pagination
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateCategory (category) {
      this.category = category
      if (category === '全部商品') {
        this.getProducts()
      } else {
        this.getProducts(1, category)
      }
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>

<style lang="scss">
.header-picture {
  background-color: #F1ECE8;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 40vh;
}

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
  overflow: hidden;
  &:hover {
    .productImg {
      transition: all .7s ease-in-out;
      transform: scale(1.1);
    }
  }
}

</style>
