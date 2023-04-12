<template>
  <div class="vl-parent">
    <LoadingView v-model:active="isLoading"
                :can-cancel="false"
                :color="color"
                :loader="'bars'"
                :is-full-page="true"/>
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
          <li class="col-1 py-3 fz-6 text-grey-66 opacity-50">
            <i class="fa-solid fa-arrow-right"></i>
          </li>
          <li class="col-2 py-3 fz-6 word-nowrap text-grey-66 opacity-50">
            Step.3
            <div>確認訂單</div>
          </li>
          <li class="col-1 py-3 fz-6 text-grey-66 opacity-50">
            <i class="fa-solid fa-arrow-right"></i>
          </li>
          <li class="col-2 py-3 fz-6 word-nowrap text-grey-66 opacity-50">
            Step.4
            <div>完成訂單</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="container my-10 mb-md-20">
      <div class="text-center pt-10 mb-6">
        <h2 class="fz-2 lh-sm fw-normal">收件者資訊</h2>
      </div>
      <VForm ref="form" v-slot="{ errors }" @submit="onSubmit">
        <div class="row">
          <div class="col-md-6 mb-6">
            <!-- 姓名：必填 -->
            <div class="form-floating mb-3">
              <VField
                type="text"
                class="form-control"
                id="name"
                name="姓名"
                placeholder="請輸入姓名"
                :class="{
                  'is-invalid': errors['姓名'],
                  'is-valid': form.user.name && !errors['姓名']
                }"
                rules="required"
                v-model="form.user.name"
              ></VField>
              <label for="name">收件人姓名</label>
              <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
            </div>
          </div>
          <div class="col-md-6 mb-6">
            <!-- Email：必填 / 需要符合格式 / input type 為 email -->
            <div class="form-floating mb-3">
              <VField
                type="email"
                class="form-control"
                id="email"
                name="電子郵件"
                placeholder="請輸入電子郵件"
                :class="{
                  'is-invalid': errors['電子郵件'],
                  'is-valid': form.user.email && !errors['電子郵件']
                }"
                rules="email|required"
                v-model="form.user.email"
              ></VField>
              <label for="email">電子郵件</label>
              <ErrorMessage name="電子郵件" class="invalid-feedback"></ErrorMessage>
            </div>
          </div>
          <div class="col-md-6 mb-6">
            <!-- 電話：必填 / 超過 8 碼 / input type 為 tel -->
            <div class="form-floating mb-3">
              <VField
                type="tel"
                class="form-control"
                id="tel"
                name="電話"
                placeholder="請輸入電話"
                :class="{
                  'is-invalid': errors['電話'],
                  'is-valid': form.user.tel && !errors['電話']
                }"
                :rules="{
                  numeric: true,
                  required: true,
                  min: 8,
                  regex: /^(09)([0-9]{2})([0-9]{6})$|^(0)([0-9]{1})([0-9]{6,8})$/
                }"
                v-model="form.user.tel"
              ></VField>
              <label for="tel">收件人電話</label>
              <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
            </div>
          </div>
          <div class="col-md-6 mb-6">
            <!-- 地址：必填 -->
            <div class="form-floating mb-3">
              <VField
                type="text"
                class="form-control"
                id="address"
                name="地址"
                placeholder="請輸入地址"
                :class="{
                  'is-invalid': errors['地址'],
                  'is-valid': form.user.address && !errors['地址']
                }"
                rules="required"
                v-model="form.user.address"
              ></VField>
              <label for="address">收件人地址</label>
              <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
            </div>
          </div>
          <div class="col-12 mb-6">
            <!-- 留言：非必填 -->
            <div class="form-floating mb-3">
              <textarea
                id="msg"
                class="form-control"
                placeholder="請輸入留言"
                v-model="form.message"
                style="height: 100px"
              ></textarea>
              <label for="msg">留言</label>
            </div>
          </div>
        </div>
        <div class="text-end">
          <RouterLink to="/cart" type="button" class="btn btn-outline-primary py-4 px-20 fw-bold mr-md-4 mb-4 mb-md-0 hvr-bob">
            <i class="fa-solid fa-credit-card mr-1"></i>
            返回購物車
          </RouterLink>
          <button type="submit" class="btn btn-primary py-4 px-20 btnCustomHover fw-bold"
          :disabled="!isComplete">
            <i class="fa-regular fa-rectangle-list mr-1"></i>
            送出訂單
          </button>
        </div>
      </VForm>
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
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  computed: {
    ...mapState(cartStore, ['carts', 'loading']),
    isComplete () {
      return this.form.user.name && this.form.user.email && this.form.user.tel && this.form.user.address
    }
  },
  watch: {
    loading () {
      this.isLoading = this.loading
    }
  },
  methods: {
    ...mapActions(cartStore, ['getCarts']),
    onSubmit (values) {
      if (this.carts.length === 0) {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          color: '#C0362D',
          toast: true,
          text: '購物車為空',
          showConfirmButton: false,
          timer: 3000,
          showClass: {
            popup: 'animate__animated animate__fadeInRight'
          }
        })
        this.$router.push({
          name: 'product-list'
        })
      }

      this.isLoading = true
      const url = `${VITE_URL}/api/${VITE_PATH}/order`
      const order = this.form
      this.$http.post(url, { data: order })
        .then(res => {
          this.getCarts()
          this.isLoading = false
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            color: '#C0362D',
            toast: true,
            text: '已建立訂單',
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
          // 清空表單 input
          this.form.message = ''
          this.$refs.form.resetForm()
          // 前往確認訂單頁
          this.$router.push({
            name: 'order-detail',
            params: {
              id: res.data.orderId
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
  components: {
    LoadingView
  }
}
</script>
