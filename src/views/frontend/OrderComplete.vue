<template>
  <div class="container-fluid header-picture d-flex flex-column justify-content-center">
    <div class="container">
      <ul class="row list-unstyled mb-0 justify-content-center align-items-center border border-1 border-dark text-center align-top">
        <li class="col-2 py-3 fz-6 word-nowrap text-primary">
          Step.1
          <div>購物車</div>
        </li>
        <li class="col-1 py-3 fz-6 text-primary">
          <i class="fa-solid fa-arrow-right"></i>
        </li>
        <li class="col-2 py-3 fz-6 word-nowrap text-primary">
          Step.2
          <div>訂單資訊</div>
        </li>
        <li class="col-1 py-3 fz-6 text-primary">
          <i class="fa-solid fa-arrow-right"></i>
        </li>
        <li class="col-2 py-3 fz-6 word-nowrap text-primary">
          Step.3
          <div>確認訂單</div>
        </li>
        <li class="col-1 py-3 fz-6 text-primary">
          <i class="fa-solid fa-arrow-right"></i>
        </li>
        <li class="col-2 py-3 fz-6 word-nowrap text-primary">
          Step.4
          <div>完成訂單</div>
        </li>
      </ul>
    </div>
  </div>
  <div class="container my-10 mb-md-20">
    <div class="text-center pt-10 mb-6">
      <h2 class="fz-2 lh-sm fw-normal">訂單資訊</h2>
    </div>
    <div>
      <div class="d-none d-md-block">
        <ul class="row list-unstyled py-4 mb-0 border border-2 border-bottom-0 border-grey-66 fw-bold">
          <li class="col-md-6 text-center">商品資訊</li>
          <li class="col-md-2">單件計價</li>
          <li class="col-md-2">商品數量</li>
          <li class="col-md-2">金額小計</li>
        </ul>
      </div>
      <div class="row justify-content-center align-items-center list-unstyled p-4 mb-0 border border-2 mb-n-1px border-grey-66 position-relative"
        v-for="item in products" :key="item.id">
        <li class="col-md-6 mb-4 mb-md-0">
          <img :src="item.product.imageUrl" class="img-fluid w-40 h-40 object-fit-cover mr-5" :alt="item.product.title">
          {{ item.product.title }}
        </li>
        <li class="col-md-2 mb-4 mb-md-0">
          <span class="d-md-none fz-6 align-middle">單件計價：</span>
          NT$ {{ item.product.price }}
        </li>
        <li class="col-md-2 mb-4 mb-md-0">
          <span class="d-md-none fz-6 align-middle">商品數量：</span>
          {{ item.qty }}
        </li>
        <li class="col-md-2 mb-4 mb-md-0">
          <span class="d-md-none fz-6 align-middle">金額小計：</span>
          NT$ {{ Math.round(item.final_total) }}
        </li>
      </div>
      <div class="row align-items-center mt-4">
        <div class="col-12 text-end fz-5 fw-normal">
          <span class="fz-4 fw-bold mr-3">總計金額：</span>
          NT$ {{ Math.round(order.total) }}
        </div>
      </div>
    </div>
    <div class="text-center pt-10 mb-6">
      <h2 class="fz-2 lh-sm fw-normal">確認訂單</h2>
    </div>
    <div>
      <ul class="row align-items-center list-unstyled px-8 py-2 mb-0 border border-2 mb-n-1px border-grey-66 position-relative">
        <li class="col-md-6 d-none d-md-block fz-5 fw-bold my-4 p-4 border-bottom border-grey-d4  align-middle">
          訂單時間
        </li>
        <li class="col-md-6 p-4 border-bottom border-grey-d4 fz-5">
          <span class="d-inline-block d-md-none fz-5 align-middle">訂單時間：</span>
          {{ $filters.date(order.create_at) }}
        </li>
        <li class="col-md-6 d-none d-md-block fz-5 fw-bold my-4 p-4 border-bottom border-grey-d4  align-middle">
          訂單編號
        </li>
        <li class="col-md-6 p-4 border-bottom border-grey-d4 fz-5">
          <span class="d-inline-block d-md-none fz-5 align-middle">訂單編號：</span>
          {{ order.id }}
        </li>
        <li class="col-md-6 d-none d-md-block fz-5 fw-bold my-4 p-4 border-bottom border-grey-d4  align-middle">
          收件人姓名
        </li>
        <li class="col-md-6 p-4 border-bottom border-grey-d4 fz-5">
          <span class="d-inline-block d-md-none fz-5 align-middle">收件人姓名：</span>
          {{ user.name }}
        </li>
        <li class="col-md-6 d-none d-md-block fz-5 fw-bold my-4 p-4 border-bottom border-grey-d4  align-middle">
          電子郵件
        </li>
        <li class="col-md-6 p-4 border-bottom border-grey-d4 fz-5">
          <span class="d-inline-block d-md-none fz-5 align-middle">電子郵件：</span>
          {{ user.email }}
        </li>
        <li class="col-md-6 d-none d-md-block fz-5 fw-bold my-4 p-4 border-bottom border-grey-d4  align-middle">
          收件人電話
        </li>
        <li class="col-md-6 p-4 border-bottom border-grey-d4 fz-5">
          <span class="d-inline-block d-md-none fz-5 align-middle">收件人電話：</span>
          {{ user.tel }}
        </li>
        <li class="col-md-6 d-none d-md-block fz-5 fw-bold my-4 p-4 border-bottom border-grey-d4  align-middle">
          收件人地址
        </li>
        <li class="col-md-6 p-4 border-bottom border-grey-d4 fz-5">
          <span class="d-inline-block d-md-none fz-5 align-middle">收件人地址：</span>
          {{ user.address }}
        </li>
        <li class="col-md-6 d-none d-md-block fz-5 fw-bold my-4 align-middle">
          付款狀態
        </li>
        <li class="col-md-6 p-4 fz-6" :class="{ 'text-success': order.is_paid}">
          <span class="d-inline-block d-md-none fz-5 align-middle text-black">付款狀態：</span>
          {{ order.is_paid ? '付款完成' : '尚未付款' }}
        </li>
      </ul>
    </div>
    <div class="text-end mt-10">
      <RouterLink to="/" type="button" class="btn border-primary p-4 btnCustomHover fw-bold mx-4 hvr-push">前往首頁</RouterLink>
      <RouterLink to="/menu" type="button" class="btn btn-primary p-4 btnCustomHover fw-bold hvr-pop mx-4">繼續購物</RouterLink>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      order: {},
      products: {},
      user: {}
    }
  },
  methods: {
    getOrder () {
      const { id } = this.$route.params
      const url = `${VITE_URL}/api/${VITE_PATH}/order/${id}`
      this.$http.get(url)
        .then(res => {
          // create_date, id, is_paid, paid_date, total
          this.order = { ...res.data.order }
          this.products = { ...res.data.order.products }
          this.user = { ...res.data.order.user }
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
    }
  },
  mounted () {
    this.getOrder()
  }
}
</script>

<style lang="scss">
</style>
