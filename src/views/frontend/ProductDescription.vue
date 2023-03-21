<template>
  <div class="vl-parent">
    <LoadingView v-model:active="isLoading"
                :can-cancel="false"
                :color="color"
                :loader="'bars'"
                :is-full-page="true"/>

    <div class="container mb-6 mb-md-10">
      <div class="card mb-3" style="100%">
        <div class="row gx-0 gx-md-3">
          <div class="col-md-5">
            <img :src="selectProduct.imageUrl" class="img-fluid object-fit-cover rounded-start" :alt="selectProduct.title">
          </div>
          <div class="offset-md-1 col-md-6">
            <div class="card-body p-4">
              <div class="d-flex justify-content-between align-items-center">
                <h5 class="card-subtitle fz-7 fw-normal lh-base opacity-50 text-grey-66">
                  {{ selectProduct.category }}
                </h5>

                <button type="button" class="btn-close hvr-outline-out fz-4"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="回商品列表"
                @click="goMenu">
                </button>

              </div>
              <div class="mr-6">
                <h3 class="card-title fz-2 fw-bold mt-3 text-brown">{{ selectProduct.title }}</h3>
                <p class="card-text my-4">{{ selectProduct.description }}</p>
                <p class="card-text">
                  NT$
                  <ins class="text-decoration-none">
                    <span class="text-muted fw-bold fz-3 ">{{ selectProduct.price }}</span>
                  </ins>
                </p>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="card-footer d-flex justify-content-between bg-white py-4 px-10">

              <div class="d-flex justify-content-start align-items-center">

                <div class="text-center border rounded-circle mx-2">
                  <button type="button" class="icon-btn align-middle"
                    @click="qty++">
                    <i class="fa-solid fa-plus fz-5 lh-base text-primary"></i>
                  </button>
                </div>

                <div class="text-center align-middle lh-base border border-2 border-primary mx-2 d-flex justify-content-center align-items-center" style="height: 50px; width: 50px;">
                  <input type="text" disabled class="bg-transparent text-center fz-4 w-60 border-0" v-model="qty">
                </div>

                <div class="text-center border rounded-circle mx-2">
                  <button type="button" class="icon-btn align-middle"
                    @click=" qty > 1 ? qty-- : ''">
                    <i class="fa-solid fa-minus fz-5 lh-base text-primary"></i>
                  </button>
                </div>
              </div>

              <button type="button" class="btn-addCart w-100 btn btn-outline-primary border border-primary rounded-3 bg-transparent border-2 mx-2 fz-4 fw-bold lh-base" data-hover="加入購物車"
              @click.prevent="() => addToCart(selectProduct.id, qty)"
              >
                <span>
                  小計 NT${{ qty*selectProduct.price }}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-center align-items-center mt-10 rounded-pill">
        <div class="border w-100 p-8">
          <h3 class="fz-3">餐點注意須知</h3>
          <ul class="mt-8 fz-5">
            <li>餐點皆為現點現做，請於保存期限內享用，勿隔餐食用。</li>
            <li>本產品已投保產品責任險。</li>
            <li>若對某些食材有過敏或不適，請提早告知。</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingView from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

import cartStore from '@/stores/cart'
import { mapActions, mapState } from 'pinia'
import Swal from 'sweetalert2'
const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      color: '#C0362D',
      isLoading: false,
      menuPage: '',
      menuCategory: '',
      selectProduct: {},
      qty: 1
    }
  },
  watch: {
    isAddToCart () {
      if (!this.isAddToCart) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          text: '已加入購物車',
          color: '#C0362D',
          toast: true,
          width: 300,
          showConfirmButton: false,
          timer: 1500,
          showClass: {
            popup: 'animate__animated animate__fadeInRight'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutRight'
          }
        })
        this.goMenu()
      }
    },
    loading () {
      this.isLoading = this.loading
    }
  },
  computed: {
    ...mapState(cartStore, ['isAddToCart', 'loading'])
  },
  methods: {
    ...mapActions(cartStore, ['addToCart']),
    getProduct () {
      this.isLoading = true
      const { id } = this.$route.params
      const url = `${VITE_URL}/api/${VITE_PATH}/product/${id}`
      this.$http.get(url)
        .then(res => {
          this.selectProduct = res.data.product
          this.isLoading = false
        })
        .catch(err => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: err.response.data.message,
            showConfirmButton: false,
            timer: 1500,
            showClass: {
              popup: 'animate__animated animate__fadeInRight'
            }
          })
        })
    },
    goMenu () {
      this.menuPage = this.$route.query.page
      this.menuCategory = this.$route.query.category
      this.$router.push({
        name: 'product-list',
        query: {
          page: this.menuPage === '' ? '' : this.menuPage,
          category: this.menuCategory === '' ? '' : this.menuCategory
        }
      })
    }
  },
  components: {
    LoadingView
  },
  mounted () {
    this.getProduct()
  }
}
</script>

<style lang="scss">
.text-grey-66 {
  color: #666666;
}
.text-brown {
  color: #B29575;
}

.icon-btn {
  width: 50px;
  height: 50px;
  background: white;
  border-color: #C0362D;
  border-radius: 25px;
  overflow: hidden;
  position: relative;
  transition: width 0.2s ease-in-out;
  &:focus {
    outline: none;
  }
}

.btn-addCart {
  position: relative;
  &:after {
    content: attr(data-hover);
    position: absolute;
    left: 0;
    width: 100%;
    text-align: center;
    opacity: 0;
  }
  &:hover {
    span {
      opacity: 0;
      transform: scale(0.3);
    }
    &:after {
      top: 50%;
      transform: translateY(-50%);
      opacity: 1;
    }
  }
}

</style>
