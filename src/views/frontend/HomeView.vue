<template>
  <div class="container-fluid position-relative overflow-hidden">
    <div class="text-bg-skin hero-content"></div>
    <div class="bg-primary hero-footer"></div>
    <img src="@/assets/img_kv_w.svg" class="img-fluid position-absolute bottom-0 left-50 translate-middle-x d-none d-md-block" alt="hero pc">
    <img src="@/assets/img_kv_m.svg" class="mb-3 object-fit-contain position-absolute bottom-0 left-50 translate-middle-x d-md-none" alt="hero mobile">
    <div class="container">
      <div class="d-flex align-items-center">
        <img src="../../assets/slogan_w.svg" class="position-absolute top-50 left-0 translate-middle-y d-none d-md-block" alt="slogan pc">
        <img src="../../assets/slogan_m.svg" class="position-absolute top-25 left-50 translate-middle d-md-none" alt="slogan mobile">
      </div>
    </div>
    <RouterLink to="/menu" type="button" class="btn-order hvr-pulse-grow position-absolute bottom-10 right-5">
      ORDER
      <div class="lh-base fz-7"># 點餐去</div>
    </RouterLink>
  </div>

  <div class="container mb-10 mb-md-20">
    <div class="text-center mt-md-20 mt-10 mb-6">
      <h2 data-aos="flip-left" class="fz-2 lh-sm fw-normal">新品上市</h2>
      <span data-aos="flip-left" class="fz-8 lh-base fw-normal">健康新選擇</span>
    </div>
    <div class="row gx-0 gx-md-3">
      <div class="col-12 mb-4 mb-md-6">
        <div data-aos="zoom-in" class="card bg-dark text-white">
          <img src="../../assets/img_new_banner_w.png" class="card-img d-none d-md-block" alt="...">
          <img src="../../assets/img_new_banner_m.png" class="card-img d-md-none" alt="...">
          <div class="card-img-overlay">
            <div class="position-absolute top-25 left-30 top-md-30 left-md-20">
              <h5 class="card-subtitle fz-5 fw-normal text-center">美味多層次</h5>
              <h3 class="card-title fz-1 fw-bold mt-4">正宗三杯雞<br>鎮店招牌菜</h3>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-4 mb-4 mb-md-0" v-for="newItem in productsNew" :key="newItem.id">
        <div data-aos="zoom-in-up" class="card card-image bg-dark text-white">
          <div class="card-img-container">
            <img :src="newItem.imageUrl" class="card-img productImg" :alt="newItem.id">
          </div>
          <div class="card-img-overlay d-flex flex-column justify-content-end">
            <div>
              <h5 class="card-subtitle fz-7 fw-normal">{{ newItem.unit }}</h5>
              <h3 class="card-title fz-2 fw-bold mt-2">{{ newItem.title }}</h3>
              <button type="button" class="btn-like stretched-link btn btn-white py-2 px-4 rounded-1 mt-8 fz-8 align-middle hvr-wobble-horizontal"
              @click.prevent="goDetail(`${newItem.id}`)">我有興趣</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid bg-gradient position-relative mt-10 mt-md-20">
    <div class="container recommand">
      <div class="row">
        <div class="col-12 text-center mb-md-20">
          <img src="../../assets/img_title_recommend_lemon.png"
        class="img-fluid d-none d-md-block" alt="recommend pc">
          <img src="../../assets/recommend.png"
        class="img-fluid d-md-none" alt="recommend mobile">
        </div>
      </div>
    </div>
  </div>

  <div class="book-menu1">
    <div class="container-fluid-md container">
      <div class="col-md-6 ml-auto py-10 py-md-20" style="background-color: rgba(24, 24, 24, 0.8);">
        <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            class="w-65 d-flex flex-column justify-content-center text-center mx-auto">
          <h3 class="text-primary fz-2 fw-normal mb-6">精緻餐盒</h3>
          <h4 class="text-white fz-6 lh-base fw-normal mb-10 px-0 px-md-10">追求卓越，用最好的食材打造最精緻的菜品，為您呈現極致的美食饗宴</h4>
          <p class="text-grey-66 fz-8 lh-base mb-4 text-start">我們將只使用最好的食材作為菜品的基礎，並且將我們的烹飪技術與創意融入其中，打造出最精緻、最卓越的菜品，為您呈現極致的美食饗宴。</p>
          <p class="text-grey-66 fz-8 lh-base mb-10 text-start">用心做菜、用愛呈現菜品的精神，將為您帶來獨一無二的美食體驗。無論是家庭聚會、商務宴會或浪漫約會，我們都將為您帶來完美的用餐體驗。</p>
          <RouterLink to="/menu" type="button" class="btn btn-outline-primary py-4 hvr-wobble-horizontal">看菜單</RouterLink>
        </div>
      </div>
    </div>
  </div>
  <div class="book-menu2">
    <div class="container-fluid-md container">
      <div class="col-md-6 mr-auto py-10 py-md-20" style="background-color: rgba(24, 24, 24, 0.8);">
        <div data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            class="w-65 d-flex flex-column justify-content-center text-center mx-auto">
          <h3 class="text-primary fz-2 fw-normal mb-6">點心飲品</h3>
          <h4 class="text-white fz-6 lh-base fw-normal mb-10 px-0 px-md-10">每人都擁有不同的甜蜜滋味，我們融入創意甜點中，為您帶來舌尖上的驚喜！</h4>
          <p class="text-grey-66 fz-8 lh-base mb-4 text-start">我們理解每個人的口味都是獨一無二的，因此我們的創意甜點將不斷進行創新，將來自各地的不同口味融入其中，讓每位顧客都能夠在品嚐時感受到舌尖上的驚喜。</p>
          <p class="text-grey-66 fz-8 lh-base mb-10 text-start">我們探索和發掘各種食材的不同可能性，並將它們融合在一起，打造出獨一無二的甜點體驗。我們相信，當您品嚐我們的創意甜點時，會感受到來自不同文化的美味。 </p>
          <RouterLink to="/menu" type="button" class="btn btn-outline-primary py-4 hvr-wobble-horizontal">看菜單</RouterLink>
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid bg-gradient-reverse pb-10 pb-md-12">
    <div class="container text-center">
      <div class="text-center pt-md-20 pt-10 mb-6">
        <h2 data-aos="flip-left" class="fz-2 lh-sm fw-normal">暢銷商品</h2>
        <span data-aos="flip-left" class="fz-8 lh-base fw-normal">網路人氣熱銷，千萬別錯過</span>
      </div>

      <div class="d-none d-md-block">
        <div class="row">

          <div class="col-md-3" v-for="popularItem in productsPopular" :key="popularItem.id">
            <div data-aos="fade-up"
                data-aos-duration="3000"
                class="card border-0">
              <img :src="popularItem.imageUrl" class="card-img-top" :alt="popularItem.id">
              <div class="card-body text-center">
                <h5 class="card-title fz-8 lh-base fw-normal">{{ popularItem.title }}</h5>
                <p class="card-text">
                  <small class="text-muted fw-bold fz-6 lh-1">NT$ {{ popularItem.price }}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="d-md-none">
        <swiper :pagination="true"
                :loop="true"
                :autoplay="{ delay: 5000 }"
                :modules="modules" class="mySwiper">
          <swiper-slide v-for="popularItem in productsPopular" :key="popularItem.id">
            <div data-aos="fade-up"
                data-aos-duration="3000"
                class="card border-0">
              <img :src="popularItem.imageUrl" class="card-img-top" :alt="popularItem.id">
              <div class="card-body text-center">
                <h5 class="card-title fz-8 lh-base fw-normal">{{ popularItem.title }}</h5>
                <p class="card-text">
                  <small class="text-muted fw-bold fz-6 lh-1">NT$ {{ popularItem.price }}</small>
                </p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <RouterLink to="/menu" type="button" class="btnCustomHover btn btn-primary mt-6 mt-md-10 px-6 py-3 rounded-1 fz-8 fw-bold hvr-wobble-vertical"
      >更多暢銷商品</RouterLink>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
// Import Swiper Vue.js components

import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'

import Swal from 'sweetalert2'

// import required modules
import { Pagination, Autoplay } from 'swiper'
const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  components: {
    Swiper,
    SwiperSlide,
    RouterLink
  },
  data () {
    return {
      modules: [Pagination, Autoplay],
      productsNew: [],
      productsPopular: []
    }
  },
  methods: {
    getHomeProducts () {
      const urls = [
      `${VITE_URL}/api/${VITE_PATH}/products?category=新品上市`,
      `${VITE_URL}/api/${VITE_PATH}/products?category=暢銷商品`
      ]
      this.$http.all(urls.map((endpoint) => this.$http.get(endpoint)))
        .then((res) => {
          this.productsNew = res[0].data.products
          this.productsPopular = res[1].data.products
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
    goDetail (id) {
      this.$router.push({
        name: 'product-detail',
        params: {
          id
        },
        query: {
          page: this.currentPage
        }
      })
    }
  },
  mounted () {
    this.getHomeProducts()
  }
}

</script>

<style lang="scss">
.hero-content {
  height: calc(540px - 12px);
}
@media(min-width:768px){
  .hero-content {
    height: calc(700px - 72px);
  }
}
.hero-footer {
  height: 12px;
}
@media(min-width:768px){
  .hero-footer {
    height: 72px;
  }
}

.btn-order {
  border: 2px solid #F1ECE8;
  border-radius: 50%;
  padding: 32px 20px;
  color: #fff;
  background-color: #B29575;
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  line-height: 1;
  // transition: all .7s ease;
  filter: drop-shadow(0 0 30px rgba(173, 144, 117, 1));
  &:hover {
    color: #ffffff;
    // transform: scale(1.2);
  }
}

.card-image {
  &:hover {
    .card-img {
      filter: brightness(80%);
    }
    .btn-like {
      color: #fff;
      background-color: #C0362D;
    }
  }
}

.recommand {
  height: 667px;
  @media(min-width:768px){
    height: auto;
  }
}

.book {
  &-menu1 {
    background-image: url('../../assets/bg_booking_1.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }
  &-menu2 {
    height: auto;
    background-image: url('../../assets/bg_booking_2.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }
}

.text-grey-66 {
  color: #666666;
}

.swiper {
  width: 100%;
  height: 100%;
  padding-bottom: 5%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
