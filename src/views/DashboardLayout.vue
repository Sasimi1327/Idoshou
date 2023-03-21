<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand logo" href="#">伊多賞</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/products">商品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/orders">訂單列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/coupons">優惠券列表</router-link>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" @click.prevent="logout">登出</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container-fluid mt-3">
    <!-- 若未用 status 判斷，則 check 未完成時
      ，卻進入 AdminProducts 的 API 導致於 401 (未經授權的錯誤)-->
    <RouterView v-if="status" />
  </div>
</template>

<script>
import { RouterView } from 'vue-router'
import Swal from 'sweetalert2'
const { VITE_URL } = import.meta.env

export default {
  data () {
    return {
      status: false
    }
  },
  methods: {
    logout () {
      document.cookie = `hexToken=; expires=${new Date()};`
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        color: '#C0362D',
        toast: true,
        text: '登出成功',
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
      this.$router.push('/')
    },
    checkAuth () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.common.Authorization = `${token}`

      const url = `${VITE_URL}/api/user/check`
      this.$http.post(url)
        .then(res => {
          this.status = true
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: `錯誤 ${err.response.status}`,
            text: err.response.data.message,
            confirmButtonText: 'OK'
          })
          this.$router.push('/')
        })
    }
  },
  components: {
    RouterView
  },
  mounted () {
    this.checkAuth()
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
</style>
