<template>
  <div class="container-fluid bg-primary" style="height: 8px"></div>

  <nav class="navbar navbar-expand-md bg-body-tertiary container d-flex justify-content-between align-items-center">
    <div class="container py-3">

      <button class="navbar-toggler" :class="{ collapsed: isCollapsed }" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      @click="isCollapsed = !isCollapsed">
        <span class="material-icons align-middle" v-if="isCollapsed">menu</span>
        <span class="material-icons align-middle" v-else>close</span>
      </button>

      <h1 class=" mx-auto mr-md-auto ml-md-0">
        <a href="#" class="navbar-brand logo hvr-grow-rotate"
        @click="closeCollapsed">伊多賞</a>
      </h1>

      <div class="d-none d-md-block">
        <ul class="navbar-nav d-flex ml-auto mb-2 mb-l g-0">
          <li class="nav-item">
            <RouterLink to="/story" class="nav-link hvr-pop text-center mx-md-2 p-2" aria-current="page">
                品牌故事
                <div class="mt-1 fz-8">Our Story</div>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/menu" class="nav-link hvr-pop text-center mx-md-2 p-2" aria-current="page">
                美味菜單
                <div class="mt-1 fz-8">Menu</div>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/stores" class="nav-link hvr-pop text-center mx-md-2 p-2" aria-current="page">
                店鋪資訊
                <div class="mt-1 fz-8">Stores</div>
            </RouterLink>
          </li>
        </ul>
      </div>
      <RouterLink to="/cart" class="text-center ml-4 p-2 position-relative">
        <span class="material-icons align-middle" style="height: 24px; width: 24px;">shopping_cart</span>
        <span class="position-absolute top-0 left-85 translate-middle badge text-bg-grey-d4 rounded-circle"
        :class="{ 'bg-primary': carts.length > 0, 'text-white': carts.length > 0}"
        style="height: 24px; width: 24px;">
          {{ carts.length }}
        </span>
      </RouterLink>
    </div>
  </nav>
  <div class="collapse mt-2 navbar-collapse text-bg-skin" :class="{ show: !isCollapsed }" id="navbarNav">
    <ul class="navbar-nav d-md-none">
      <li class="nav-item">
        <RouterLink to="/story" class="nav-link hvr-pop text-center py-6 fz-5" aria-current="page"
        @click="closeCollapsed">
            品牌故事
            <div class="mt-1 fz-8">Our Story</div>
        </RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/menu" class="nav-link hvr-pop text-center py-6 fz-5" aria-current="page"
        @click="closeCollapsed">
            美味菜單
            <div class="mt-1 fz-8">Menu</div>
        </RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/stores" class="nav-link hvr-pop text-center py-6 fz-5" aria-current="page"
        @click="closeCollapsed">
            店鋪資訊
            <div class="mt-1 fz-8">Stores</div>
        </RouterLink>
      </li>
    </ul>
  </div>

  <!-- <div class="container"> -->
  <RouterView />
  <!-- </div> -->

  <footer class="container-fluid bg-black">
    <div class="container">
      <div class="row">
        <div class="col-md-6 mt-10 mt-md-8">
          <h5 class="fz-8 fw-normal lh-base text-center text-grey-66 mb-5">追蹤我們近況</h5>
          <ul class="d-flex justify-content-center align-items-center list-unstyled">
            <li class="social-item rounded-circle p-2 mx-2"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="Instagram">
              <a href="https://www.instagram.com/" class="social-link" target="_blank">
                <img src="../assets/ic_ig.svg" alt="ig">
              </a>
            </li>
            <li class="social-item rounded-circle p-2 mx-2"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="Line">
              <a href="https://line.me/zh-hant/" class="social-link" target="_blank">
                <img src="../assets/ic_line.svg" alt="line">
              </a>
            </li>
            <li class="social-item rounded-circle p-2 mx-2"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="Facebook">
              <a href="https://zh-tw.facebook.com/" class="social-link" target="_blank">
                <img src="../assets/ic_fb.svg" alt="fb">
              </a>
            </li>
            <li class="social-item rounded-circle p-2 mx-2"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="Youtube">
              <a href="https://www.youtube.com/" class="social-link" target="_blank">
                <img src="../assets/ic_yt.svg" alt="yt">
              </a>
            </li>
          </ul>
        </div>
        <div class="col-md-6 mt-10 mt-md-8 text-center">
          <h5 class="fz-8 fw-normal lh-base text-center text-grey-66 mb-3">訂購專線</h5>
          <div class="d-flex justify-content-center align-items-center">
            <a href="tel:+886-2-811-5486" class="display-4 fw-bold text-white text-decoration-none">2811-5486</a>
          </div>
        </div>
        <address class="col-md-12 mt-12 text-center">

          <span class="border border-white text-white py-2 px-4">
            <nobr>
              # 若有大型團購訂餐，請提前一天來電告知，方便備料取餐。
            </nobr>
          </span>
          <div class="d-flex flex-column flex-md-row justify-content-center align-items-center mt-6">
            <div class="text-white mr-0 mb-4 mr-md-6 mb-md-0 fz-8 fw-normal lh-base">
              <span class="material-icons align-middle mr-1">location_on</span>
              112 台北市北投區西安街一段 27 號
            </div>
            <div class="text-white fz-8 fw-normal lh-base">
              <span class="material-icons align-middle mr-1">schedule</span>
              平日 12:00~21:30  周末及國定假日 11:30~21:30
            </div>
          </div>
        </address>

        <div class="py-6 px-3 py-md-4 px-md-0 text-grey-66 text-center d-flex flex-column flex-md-row justify-content-center align-items-center">
          <div class="mr-md-2 fz-8 lh-base fw-normal">本作品僅為專題使用，非從事商業用途。</div>
          <div class="fz-8 lh-base fw-normal">Copyright © 2023 Sasimi. All rights reserved.</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import cartStore from '@/stores/cart'
import { mapActions, mapState } from 'pinia'
import { RouterView, RouterLink } from 'vue-router'

export default {
  data () {
    return {
      isCollapsed: true
    }
  },
  methods: {
    closeCollapsed () {
      this.isCollapsed = true
    },
    ...mapActions(cartStore, ['getCarts'])
  },
  components: {
    RouterView,
    RouterLink
  },
  computed: {
    ...mapState(cartStore, ['carts'])
  },
  mounted () {
    this.getCarts()
  }
}
</script>

<style lang="scss">
.logo {
  background-image: url('../assets/Logo.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 160px;
  height: 40px;
  text-decoration: none;
  display: block;

  /*  將文字推出 <h1>  */
    text-indent: 101%;
    overflow: hidden;
    white-space: nowrap;
}
.nav-link.active.router-link-exact-active {
  color: #C0362D;
}
.nav-item {
  &:hover {
    background-color: #C0362D;
    .nav-link {
      color: #fff;
    }
  }
}

.social-item {
  list-style: none;
  width: 40px;
  height: 40px;
  background-color: #666666;
  &:hover {
    background-color: #C0362D;
  }
}

.header-picture {
  background-color: #F1ECE8;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 25vh;
}

.btnCustomHover {
  transition: all .7s ease;
  border: 2px solid #840000;
  &:hover {
    transform: scale(1.05);
    color: white;
    background-color: #840000;
  }
}

</style>
