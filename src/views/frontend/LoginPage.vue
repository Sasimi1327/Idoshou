<template>
  <div class="container mt-5" style="height: calc( 100vh - 460px)">
    <div class="row justify-content-center align-items-center">
      <div class="col-8">
        <h1 class="h2 mb-4 font-weight-normal">
        請先登入
        </h1>
        <form id="form" class="form-signin" @submit.prevent="signIn">
          <div class="form-floating mb-3">
            <input type="email"
              class="form-control"
              id="username"
              v-model="user.username"
              placeholder="name@example.com" required autofocus>
            <label for="username">Email address</label>
          </div>
          <div class="form-floating">
            <input type="password"
              class="form-control"
              id="password"
              v-model="user.password"
              placeholder="Password" required>
            <label for="password">Password</label>
          </div>
          <div class="text-end mt-4">
            <button class="btn btn-lg btn-primary btn-block w-100 mt-3" type="submit">
              登入
            </button>
          </div>
        </form>
      </div>
    </div>
    <p class="mt-5 mb-3 text-muted text-center">
      &copy; 2023~∞ - 六角學院
    </p>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
const { VITE_URL } = import.meta.env

export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    signIn () {
      const url = `${VITE_URL}/admin/signin`
      this.$http.post(url, this.user)
        .then(res => {
          const { token, expired } = res.data
          document.cookie = `hexToken=${token};expires=${new Date(expired)};`
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            text: '登入成功',
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
          this.$router.push('/admin/products')
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
  }
}
</script>
