<template>
  <div class="container-fluid header-picture position-relative">
    <div class="container">
      <ul class="list-unstyled position-absolute d-flex justify-content-center align-items-center top-50 left-50 translate-middle py-4 border border-1 border-dark text-center">
        <li class="mx-2 px-3 py-3 fz-6 word-nowrap text-primary">
          Step.1
          <div>購物車</div>
        </li>
        <li class="mx-2 px-1 py-3 fz-6 text-primary">
          <i class="fa-solid fa-arrow-right"></i>
        </li>
        <li class="mx-2 px-3 py-3 fz-6 word-nowrap text-primary">
          Step.2
          <div>訂單資訊</div>
        </li>
        <li class="mx-2 px-1 py-3 fz-6 text-primary">
          <i class="fa-solid fa-arrow-right"></i>
        </li>
        <li class="mx-2 px-3 py-3 fz-6 word-nowrap text-primary">
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
      <h2 class="fz-2 lh-sm fw-normal">訂單資訊</h2>
    </div>

    <div>
      <div class="d-none d-md-block">
        <ul class="row list-unstyled py-4 mb-0 border border-2 border-bottom-0 border-grey-66 fw-bold">
          <li class="col-md-6 text-center">商品資訊</li>
          <li class="col-md-2">單件計價</li>
          <li class="col-md-2">產品數量</li>
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
          <span class="d-md-none fz-6 align-middle">數量：</span>
          {{ item.qty }}
        </li>
        <li class="col-md-2 mb-4 mb-md-0">
          <span class="d-md-none fz-6 align-middle">金額小計：</span>
          NT$ {{ item.final_total }}
        </li>
      </div>
      <div class="row align-items-center mt-4">
        <div class="col-12 text-end fz-5 fw-normal">
          <span class="fz-4 fw-bold mr-3">總計金額：</span>
          NT$ {{ this.total }}
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
          {{ $filters.date(createAt) }}
        </li>
        <li class="col-md-6 d-none d-md-block fz-5 fw-bold my-4 p-4 border-bottom border-grey-d4  align-middle">
          訂單編號
        </li>
        <li class="col-md-6 p-4 border-bottom border-grey-d4 fz-5">
          <span class="d-inline-block d-md-none fz-5 align-middle">訂單編號：</span>
          {{ orderId }}
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
          留言
        </li>
        <li class="col-md-6 p-4 fz-6">
          <span class="d-inline-block d-md-none fz-5 align-middle">留言：</span>
          {{ msg }}
        </li>
      </ul>
    </div>

    <div class="text-end mt-10">
      <button type="submit" class="btn btn-primary py-4 px-20 btnCustomHover fw-bold"
      @click.prevent="payOrder"
      >確認結帳</button>
    </div>
  </div>

</template>

<script>

const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      createAt: '',
      orderId: '',
      products: [],
      total: 0,
      user: {},
      msg: '',
      is_paid: false
    }
  },
  methods: {
    getOrder () {
      const { id } = this.$route.params
      const url = `${VITE_URL}/api/${VITE_PATH}/order/${id}`
      this.$http.get(url)
        .then(res => {
          console.log('getOrder[CheckOrder]', res)
          this.createAt = res.data.order.create_at
          this.orderId = res.data.order.id
          this.products = res.data.order.products
          this.total = res.data.order.total
          this.user = res.data.order.user
          this.msg = res.data.order?.message
          this.is_paid = res.data.order.is_paid
        })
        .catch(err => {
          console.log(err)
        })
    },
    payOrder () {
      const { id } = this.$route.params
      const url = `${VITE_URL}/api/${VITE_PATH}/pay/${id}`
      this.$http.post(url)
        .then(res => {
          if (res.data.success) {
            // 前往訂單完成頁
            this.$router.push({
              name: 'pay-complete',
              params: {
                id
              }
            })
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getOrder()
  }
}
</script>

<style lang="scss">

.mb-n-1px {
  margin-bottom: -1px;
}

.text-grey-66 {
  color: #666666;
}
.border-grey-66 {
  border-color:  #666666;
}
.border-grey-d4 {
  border-color: #D4D4D4;
}

</style>
