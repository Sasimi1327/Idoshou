import { defineStore } from 'pinia'
import axios from 'axios'
const { VITE_URL, VITE_PATH } = import.meta.env

// 目前這個環境不屬於 Vue( 不能使用 this.$http.get(...) )
const cartStore = defineStore('cart', {
  // state 概念同「data」，在此可以使用箭頭函式
  state: () => {
    return {
      loading: false,
      isAddToCart: false,
      isUpdateItem: false,
      isDelItem: false,
      isClearAll: false,
      carts: [],
      total: 0,
      final_total: 0,
      isCoupon: false
    }
  },
  actions: {
    // 取得購物車列表(更新狀態)
    getCarts () {
      this.loading = true
      const url = `${VITE_URL}/api/${VITE_PATH}/cart`
      axios.get(url)
        .then(res => {
          console.log('購物車列表', res)
          this.carts = res.data.data.carts // 購物車
          this.total = res.data.data.total // 總金額
          this.final_total = res.data.data.final_total // 總金額(含優惠券)
          this.isCoupon = this.total !== this.final_total
          this.loading = false
        })
        .catch(err => {
          console.log('取得購物車', err)
          this.loading = false
        })
    },
    updateCartItem (item) {
      this.loading = true
      this.isUpdateItem = true
      const url = `${VITE_URL}/api/${VITE_PATH}/cart/${item.id}`
      const data = {
        product_id: item.product_id,
        qty: item.qty
      }
      axios.put(url, { data })
        .then(res => {
          this.getCarts()
          this.isUpdateItem = false
          this.loading = false
        })
        .catch(err => {
          console.log('更新購物車數量', err)
          this.isUpdateItem = false
          this.loading = false
        })
    },
    deleteCartItem (item) {
      this.loading = true
      this.isDelItem = true
      const url = `${VITE_URL}/api/${VITE_PATH}/cart/${item.id}`
      axios.delete(url)
        .then(res => {
          this.getCarts()
          this.isDelItem = false
          this.loading = false
        })
        .catch(err => {
          console.log('刪除購物車品項', err)
          this.isDelItem = false
          this.loading = false
        })
    },
    clearCartItem () {
      this.loading = true
      this.isClearAll = true
      const url = `${VITE_URL}/api/${VITE_PATH}/carts`
      axios.delete(url)
        .then(res => {
          this.getCarts()
          this.isClearAll = false
          this.loading = false
        })
        .catch(err => {
          console.log('清空購物車', err)
          this.isClearAll = false
          this.loading = false
        })
    },
    addToCart (productId, qty = 1) {
      this.loading = true
      this.isAddToCart = true
      const url = `${VITE_URL}/api/${VITE_PATH}/cart`
      const data = {
        data: {
          product_id: productId,
          qty
        }
      }
      axios.post(url, data)
        .then(res => {
          this.getCarts()
          this.isAddToCart = false
          this.loading = false
        })
        .catch(err => {
          console.log('加入購物車', err)
          this.isAddToCart = false
          this.loading = false
          // Swal.fire({
          //   position: 'top-end',
          //   icon: 'error',
          //   title: err.response.data.message,
          //   showConfirmButton: false,
          //   timer: 1500
          // })
        })
    },
    updateFinalTotal (price) {
      this.final_total = price
    }
  }
})

export default cartStore
