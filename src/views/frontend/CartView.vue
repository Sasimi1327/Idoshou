<template>
  <div class="vl-parent">
    <LoadingView v-model:active="isLoading"
                :can-cancel="false"
                :color="color"
                :loader="'bars'"
                :is-full-page="true"/>

    <div class="container-fluid header-picture position-relative">
      <div class="container">
        <ul class="list-unstyled position-absolute d-flex justify-content-center align-items-center top-50 left-50 translate-middle py-4 border border-1 border-dark text-center">
          <li class="mx-2 px-3 py-3 fz-6 word-nowrap text-primary">
            Step.1
            <div>購物車</div>
          </li>
          <li class="mx-2 px-1 py-3 fz-6 text-grey-66 opacity-50">
            <i class="fa-solid fa-arrow-right"></i>
          </li>
          <li class="mx-2 px-3 py-3 fz-6 word-nowrap text-grey-66 opacity-50">
            Step.2
            <div>訂單資訊</div>
          </li>
          <li class="mx-2 px-1 py-3 fz-6 text-grey-66 opacity-50">
            <i class="fa-solid fa-arrow-right"></i>
          </li>
          <li class="mx-2 px-3 py-3 fz-6 word-nowrap text-grey-66 opacity-50">
            Step.3
            <div>確認訂單</div>
          </li>
          <li class="mx-2 px-1 py-3 fz-6 text-grey-66 opacity-50">
            <i class="fa-solid fa-arrow-right"></i>
          </li>
          <li class="mx-2 px-3 py-3 fz-6 word-nowrap text-grey-66 opacity-50">
            Step.4
            <div>完成訂單</div>
          </li>
        </ul>
      </div>
    </div>

    <div class="container my-10 mb-md-20">
      <div class="text-center pt-10 mb-6">
        <h2 class="fz-2 lh-sm fw-normal">購物清單</h2>
      </div>

      <div v-if="!carts?.length" class="py-4 border border-2 border-grey-66">
        <div class="text-center fz-1 py-10">
          目前購物車沒有商品<br>
          <RouterLink to="/menu" type="button" class="btn btn-primary fz-5 lh-base p-3 align-middle">要吃飽，才有力氣減肥，繼續逛逛。</RouterLink>
        </div>
      </div>

      <template v-else>
        <div class="d-none d-md-block">
          <ul class="row gx-0 gx-md-3 list-unstyled py-4 mb-0 border border-2 border-bottom-0 border-grey-66 fw-bold">
            <li class="col-md-5 text-center">商品資訊</li>
            <li class="col-md-2">單件計價</li>
            <li class="col-md-2">產品數量</li>
            <li class="col-md-2">金額小計</li>
            <li class="col-md-1">刪除</li>
          </ul>
        </div>

        <ul class="row gx-0 gx-md-3 justify-content-center align-items-center list-unstyled p-4 mb-0 border border-2 mb-n-1px border-grey-66 position-relative"
          v-for="item in carts" :key="item.id">
          <li class="col-md-5 mb-4 mb-md-0">
            <img :src="item.product.imageUrl" class="img-fluid w-40 h-40 object-fit-cover mr-5" :alt="item.product.title">
            {{ item.product.title }}
          </li>
          <li class="col-md-2 mb-4 mb-md-0">
            <span class="d-md-none fz-6 align-middle">單件計價：</span>
            NT$ {{ item.product.price }}
          </li>
          <li class="col-md-2 mb-4 mb-md-0">
            <div class="input-group input-group-sm flex-nowrap">
              <button type="button" class="btn btn-outline-primary"
              @click.prevent="item.qty--; updateCartItem(item)">
                <i class="fa-solid fa-minus"></i>
              </button>

              <div class="text-center align-middle border-top border-bottom border-1 border-dark d-flex justify-content-center align-items-center" style="height: 35px; width: 50px;">
                <input type="text" disabled class="bg-transparent text-center fz-5 w-60 border-0" v-model="item.qty">
              </div>

              <button type="button" class="btn btn-outline-primary"
              @click.prevent="item.qty++; updateCartItem(item)">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
          </li>
          <li class="col-md-2 mb-4 mb-md-0">
            <span class="d-md-none fz-6 align-middle">金額小計：</span>
            NT$ {{ item.product.price * item.qty }}
          </li>
          <li class="col-md-1 text-center">
            <button type="button" class="btn-close position-absolute top-5 right-5 position-md-relative"
            @click="deleteCartItem(item)"
            ></button>
          </li>
        </ul>

        <!-- 操作按鈕 -->
        <div class="row gx-0 gx-md-3 py-3">
          <div class="col-3">
            <button class="w-100 p-4 bg-white fz-9 fz-md-4 cartBtn"
              type="button"
              @click.prevent="clearCartItem">
              <i class="fa-sharp fa-solid fa-trash mr-1"></i>
              清空購物車
            </button>
          </div>
          <div class="col-3">
            <button class="w-100 p-4 bg-white fz-9 fz-md-4 cartBtn"
              type="button"
              @click="$router.push('/menu')">
              <i class="fa-solid fa-bag-shopping mr-1"></i>
              繼續選購
            </button>
          </div>
          <div class="col-3">
            <button class="w-100 p-4 bg-white fz-9 fz-md-4 cartBtn"
              type="button"
              @click.prevent="openCouponModal"
              :disabled="isCoupon">
              <i class="fa-solid fa-ticket mr-1"></i>
              <span v-if="isCoupon">已套用優惠券</span>
              <span v-else>領取優惠券</span>
            </button>
          </div>
          <div class="col-3">
            <button class="w-100 p-4 bg-white fz-9 fz-md-4 cartBtn"
              type="button"
              @click="$router.push('/checkout')">
              <i class="fa-solid fa-credit-card mr-1"></i>
              前往結帳
            </button>
          </div>
        </div>

        <div class="row gx-0 gx-md-3 align-items-center">
          <div class="col-12 text-end fz-5 fw-normal">
            <span class="fz-4 fw-bold mr-3">總計:</span>
            NT$ {{ this.total }}
          </div>
          <div class="col-12 text-end fz-5 text-primary"
            v-if="this.total !== this.final_total">
            <span class="fz-4 fw-bold mr-3">折扣價:</span>
            NT$ {{ this.final_total }}
          </div>
        </div>

      </template>
    </div>

    <CouponModal
      ref="couponModal"
      @update-coupon="updateCoupon"
    ></CouponModal>
  </div>
</template>

<script>
import LoadingView from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

import CouponModal from '@/components/CouponModal.vue'
import { RouterLink } from 'vue-router'
import cartStore from '@/stores/cart'
import { mapActions, mapState } from 'pinia'
import Swal from 'sweetalert2'
const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      color: '#C0362D',
      isLoading: false
    }
  },
  watch: {
    loading () {
      this.isLoading = this.loading
    },
    isUpdateItem () {
      if (!this.isUpdateItem) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          color: '#C0362D',
          toast: true,
          text: '已更新購物車',
          showConfirmButton: false,
          timer: 1500,
          width: 300,
          showClass: {
            popup: 'animate__animated animate__fadeInRight'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutRight'
          }
        })
      }
    },
    isDelItem () {
      if (!this.isDelItem) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          color: '#C0362D',
          toast: true,
          text: '已刪除品項',
          showConfirmButton: false,
          timer: 1500,
          width: 300,
          showClass: {
            popup: 'animate__animated animate__fadeInRight'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutRight'
          }
        })
      }
    },
    isClearAll () {
      if (!this.isClearAll) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          color: '#C0362D',
          toast: true,
          text: '已清空購物車',
          showConfirmButton: false,
          timer: 1500,
          width: 300,
          showClass: {
            popup: 'animate__animated animate__fadeInRight'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutRight'
          }
        })
      }
    }
  },
  components: {
    RouterLink,
    CouponModal,
    LoadingView
  },
  methods: {
    ...mapActions(cartStore, ['updateCartItem', 'deleteCartItem', 'clearCartItem', 'updateFinalTotal', 'getCarts']),
    openCouponModal () {
      this.$refs.couponModal.modal.show()
    },
    updateCoupon (couponText) {
      this.$refs.couponModal.modal.hide()
      this.isLoading = true
      const url = `${VITE_URL}/api/${VITE_PATH}/coupon`
      const data = {
        code: couponText
      }
      this.$http.post(url, { data })
        .then(res => {
          this.isCoupon = true
          this.getCarts()
          this.isLoading = false
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            color: '#C0362D',
            toast: true,
            text: '已套用優惠券',
            showConfirmButton: false,
            timer: 1500,
            width: 300,
            showClass: {
              popup: 'animate__animated animate__fadeInRight'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutRight'
            }
          })
        })
        .catch(err => {
          this.isLoading = false
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: err.response.data.message,
            showConfirmButton: false,
            timer: 1500,
            showClass: {
              popup: 'animate__animated animate__fadeInRight'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutRight'
            }
          })
        })
    }
  },
  computed: {
    ...mapState(cartStore, ['carts', 'total', 'final_total', 'isCoupon', 'loading', 'isUpdateItem', 'isDelItem', 'isClearAll'])
  }
}
</script>

<style lang="scss">

.border-grey-66 {
  border-color:  #666666;
}

.text-grey-66 {
  color: #666666;
}

.mb-n-1px {
  margin-bottom: -1px;
}

.cartBtn:hover:not([disabled]) {
    color: white;
    border: 2px solid #C0362D;
    background-color: #C0362D;
    font-weight: bold;
    transform: scale(1.03);
}
</style>
