<template>
  <div class="modal fade"
  id="couponModal"
  tabindex="-1"
  aria-labelledby="couponModalLabel"
  aria-hidden="true"
  ref="modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="couponModalLabel">優惠券</h5>
        </div>
        <div class="modal-body">
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="請輸入優惠券代碼" v-model="couponText">
            <button type="button" class="btn btn-outline-black"
            @click.prevent="couponText = ''"
            data-bs-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary"
            @click.prevent="updateCoupon">確認</button>
          </div>
        </div>
        <div class="modal-footer text-center">

          <div class="form-check" v-for="coupon in couponList" :key="coupon.title">
            <input class="form-check-input"
            type="radio" name="radioCoupon"
            :id="coupon.title"
            :value="coupon.couponCode"
            v-model="couponText">
            <label class="form-check-label" :for="coupon.title">
              {{ coupon.title }}
            </label>
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
      couponText: '',
      couponList: [
        {
          title: '周年慶',
          couponCode: 'Idoshou'
        },
        {
          title: '端午佳節',
          couponCode: 'DragonFes'
        },
        {
          title: '中秋特價',
          couponCode: 'MidAutumn'
        }
      ]
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
