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
    <!-- <div class='text-secondary border border-2 border-secondary p-15' style="font-size: 80px;"> -->
    <div
    class='text-secondary border border-2 border-secondary p-15 flow-animate' style="font-size: 40px;">
      <span> </span>
      <span> </span>
      <span> </span>
      <span> </span>
      <i class="fa-regular fa-circle-check d-inline-block text-center" style="font-size: 40px;"></i>
      付款成功
    </div>
    <div class="d-flex justify-content-center mt-20">
      <RouterLink to="/" type="button" class="btn py-4 px-20 btnCustomHover fw-bold mx-4 hvr-push">前往首頁</RouterLink>
      <RouterLink to="/menu" type="button" class="btn btn-primary py-4 px-20 btnCustomHover fw-bold hvr-pop mx-4">繼續購物</RouterLink>
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
.flow-animate {
  position: relative;
  padding: 30px 60px;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.4);
  color: #44DA2C;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 4px;
  font: 700 30px consolas;
  overflow: hidden;

  & span:nth-child(1) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(to right, #666666, #44DA2C);
    animation: animate1 2s linear infinite;
    animation-delay: 1s;
  }
  & span:nth-child(2) {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 3px;
    background: linear-gradient(to bottom, #666666, #44DA2C);
    animation: animate2 2s linear infinite;
    animation-delay: 2s;
  }
  & span:nth-child(3) {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(to left, #666666, #44DA2C);
    animation: animate3 2s linear infinite;
    animation-delay: 3s;
  }
  & span:nth-child(4) {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 3px;
    background: linear-gradient(to top, #666666, #44DA2C);
    animation: animate4 2s linear infinite;
    animation-delay: 4s;
  }
}

@keyframes animate1 {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
@keyframes animate2 {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
}
@keyframes animate3 {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
@keyframes animate4 {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(-100%);
  }
}

</style>
