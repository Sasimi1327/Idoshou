<template>
  <div class="modal fade"
  id="couponModal"
  tabindex="-1"
  aria-labelledby="couponModalLabel"
  aria-hidden="true"
  ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="couponModalLabel">優惠券</h5>
        </div>
        <div class="modal-body">
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="請輸入優惠券代碼" v-model="couponText">
            <button type="button" class="btn btn-outline-black"
            data-bs-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary"
            @click.prevent="updateCoupon">確認</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap'

export default {
  data () {
    return {
      modal: '',
      couponText: ''
    }
  },
  methods: {
    updateCoupon () {
      // $emit('update-coupon', couponText)
      this.$emit('update-coupon', this.couponText)
      this.couponText = ''
    }
  },
  mounted () {
    this.modal = new Modal(
      document.querySelector('#couponModal'),
      {
        backdrop: 'static',
        keyboard: false
      }
    )
  }
}
</script>
