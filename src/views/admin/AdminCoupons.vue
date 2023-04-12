<template>
  <div class="vl-parent">
    <LoadingView v-model:active="isLoading"
                :can-cancel="false"
                :color="color"
                :loader="'bars'"
                :is-full-page="true"/>
    <div class="container">
      <div class="text-end mt-4">
        <button type="button"
        class="btn btn-primary"
        @click="openModal('')">
          建立新的優惠券
        </button>
      </div>
      <table class="table mt-4">
        <thead>
        <tr>
          <th>名稱</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
        </thead>
        <tbody>
          <tr v-for="coupon in coupons" :key="coupon.id">
            <td>{{ coupon.title }}</td>
            <td>{{ coupon.percent }}</td>
            <td>{{ $filters.date(coupon.due_date) }}</td>
            <td>
              <span v-if="coupon.is_enabled" class="text-success">啟用</span>
              <span v-else>未啟用</span>
            </td>
            <td>
              <div class="btn-group">
                <button type="button"
                @click="openModal(coupon)"
                class="btn btn-outline-primary btn-sm">
                  編輯
                </button>
                <button type="button"
                @click="openDelModal(coupon)"
                class="btn btn-outline-danger btn-sm">
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <PaginationComponent :pages="pagination" @emit-page="getCoupons"></PaginationComponent>
    </div>
    <CouponModal
      ref="couponModal"
      :is-new="isNew"
      :coupon="selectCoupon"
      @cancel-update-coupon="cancelUpdateCoupon"
      @update-coupon="updateCoupon"
    ></CouponModal>
    <DeleteModal
      ref="delModal"
      :item="selectCoupon"
      @del-item="deleteCoupon"
    ></DeleteModal>
  </div>
</template>

<script>
import LoadingView from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import CouponModal from '@/components/admin/CouponModal.vue'
import DeleteModal from '@/components/admin/DeleteModal.vue'
import PaginationComponent from '@/components/PaginationComponent.vue'
import Swal from 'sweetalert2'
const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      coupons: [],
      pagination: {},
      selectCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: ''
      },
      currentPage: 1,
      isLoading: false,
      color: '#C0362D',
      isNew: false
    }
  },
  methods: {
    getCoupons (page = 1) {
      const url = `${VITE_URL}/api/${VITE_PATH}/admin/coupons?page=${page}`
      this.isLoading = true
      this.$http.get(url)
        .then(res => {
          this.isLoading = false
          this.coupons = res.data.coupons
          this.pagination = res.data.pagination
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
            }
          })
        })
    },
    updateCoupon (selectCoupon) {
      let url = `${VITE_URL}/api/${VITE_PATH}/admin/coupon`
      let httpMethod = 'post'
      let data = { ...selectCoupon }
      if (!this.isNew) {
        url = `${VITE_URL}/api/${VITE_PATH}/admin/coupon/${this.selectCoupon.id}`
        httpMethod = 'put'
        data = this.selectCoupon
      }
      this.isLoading = true
      this.$http[httpMethod](url, { data })
        .then(res => {
          this.getCoupons(this.currentPage)
          this.selectCoupon.title = ''
          this.selectCoupon.code = ''
          this.selectCoupon.percent = 100
          this.selectCoupon.is_enabled = 0
          this.$refs.couponModal.modal.hide()
          this.isLoading = false
          if (!this.isNew) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              text: res.data.message,
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
          }
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
            }
          })
        })
    },
    cancelUpdateCoupon () {
      this.selectCoupon.title = ''
      this.selectCoupon.code = ''
      this.selectCoupon.percent = 100
      this.selectCoupon.is_enabled = 0
    },
    deleteCoupon () {
      const url = `${VITE_URL}/api/${VITE_PATH}/admin/coupon/${this.selectCoupon.id}`
      this.isLoading = true
      this.$http.delete(url)
        .then(res => {
          this.isLoading = false
          this.getCoupons(this.currentPage)
          this.$refs.delModal.modal.hide()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            text: res.data.message,
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
            }
          })
        })
    },
    openModal (coupon) {
      if (coupon) { // 更新
        this.isNew = false
        this.selectCoupon = { ...coupon }
      } else { // 新增
        this.isNew = true
        this.selectCoupon = {
          ...this.selectCoupon,
          due_date: new Date().getTime() / 1000
        }
      }
      this.$refs.couponModal.modal.show()
    },
    openDelModal (coupon) {
      this.selectCoupon = { ...coupon }
      this.$refs.delModal.modal.show()
    }
  },
  components: {
    DeleteModal,
    CouponModal,
    PaginationComponent,
    LoadingView
  },
  mounted () {
    this.getCoupons()
  }
}
</script>
