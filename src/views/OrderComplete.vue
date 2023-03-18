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
        <li class="mx-2 px-1 py-3 fz-6 text-primary">
          <i class="fa-solid fa-arrow-right"></i>
        </li>
        <li class="mx-2 px-3 py-3 fz-6 word-nowrap text-primary">
          Step.4
          <div>完成訂單</div>
        </li>
      </ul>
    </div>
  </div>

  <div class="d-flex flex-column justify-content-center align-items-center my-10 mb-md-20">
    <div class='text-secondary border border-2 border-secondary p-15' style="font-size: 80px;">
      <i class="fa-regular fa-circle-check d-inline-block text-center fz-1" style="font-size: 80px;"></i>
      付款成功
    </div>
    <div class="d-flex justify-content-center mt-10">
      <RouterLink to="/" type="button" class="btn py-4 px-20 btnCustomHover fw-bold mx-4">前往首頁</RouterLink>
      <RouterLink to="/menu" type="button" class="btn btn-primary py-4 px-20 btnCustomHover fw-bold mx-4">繼續購物</RouterLink>
    </div>
  </div>

</template>

<script>

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
          console.log('getOrder[OrderComplete]', res)
          // create_date, id, is_paid, paid_date, total
          this.order = { ...res.data.order }
          this.products = { ...res.data.order.products }
          this.user = { ...res.data.order.user }
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
