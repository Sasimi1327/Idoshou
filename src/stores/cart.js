import { defineStore } from 'pinia'
import axios from 'axios'

const { VITE_URL, VITE_PATH } = import.meta.env

// 目前這個環境不屬於 Vue( 不能使用 this.$http.get(...) )
const cartStore = defineStore('cart', {
  // state 概念同「data」，在此可以使用箭頭函式
  state: () => {
    return {
      carts: [],
      total: 0,
      final_total: 0
    }
  },
  actions: {
    // 取得購物車列表
    getCarts () {
      const url = `${VITE_URL}/api/${VITE_PATH}/cart`
      axios.get(url)
        .then(res => {
          console.log('購物車列表', res)
          this.carts = res.data.data.carts // 購物車
          this.total = res.data.data.total // 總金額
          this.final_total = res.data.data.final_total // 總金額(含優惠券)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addToCart (productId, qty = 1) {
      const url = `${VITE_URL}/api/${VITE_PATH}/cart`
      const data = {
        data: {
          product_id: productId,
          qty: 1
        }
      }
      axios.post(url, data)
        .then(res => {
          console.log(res)
          this.getCarts()
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  getters: {

  }
})

export default cartStore
