<template>
  <div class="container mb-6 mb-md-10">

    <div class="card mb-3" style="100%">
      <div class="row g-0">
        <div class="col-md-5">
          <img :src="selectProduct.imageUrl" class="img-fluid object-fit-cover rounded-start" :alt="selectProduct.title">
        </div>
        <div class="offset-md-1 col-md-6">
          <div class="card-body p-4">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="card-subtitle fz-7 fw-normal lh-base opacity-50 text-grey-66">{{ selectProduct.category }}</h5>
              <button type="button" class="btn-close"
              @click="goMenu"
              ></button>
            </div>

            <h3 class="card-title fz-2 fw-bold mt-3 text-brown">{{ selectProduct.title }}</h3>
            <p class="card-text my-4">{{ selectProduct.description }}</p>
            <p class="card-text">
              NT$
              <ins class="text-decoration-none">
                <span class="text-muted fw-bold fz-3 ">{{ selectProduct.price }}</span>
              </ins>
            </p>
          </div>
        </div>
        <div class="col-12">
          <div class="card-footer d-flex justify-content-between bg-white py-4 px-10">

            <div class="d-flex justify-content-start align-items-center">

              <div class="text-center border rounded-circle mx-2">
                <button type="button" class="icon-btn align-middle"
                  @click="qty++">
                  <i class="fa-solid fa-plus fz-5 lh-base text-primary"></i>
                </button>
              </div>

              <div class="text-center align-middle lh-base border border-2 border-primary mx-2 d-flex justify-content-center align-items-center" style="height: 50px; width: 50px;">
                <input type="text" disabled class="bg-transparent text-center fz-4 w-60 border-0" v-model="qty">
              </div>

              <div class="text-center border rounded-circle mx-2">
                <button type="button" class="icon-btn align-middle"
                  @click=" qty > 1 ? qty-- : ''">
                  <i class="fa-solid fa-minus fz-5 lh-base text-primary"></i>
                </button>
              </div>
            </div>

            <button type="button" class="btn-addCart w-100 btn btn-outline-primary border border-primary rounded-3 bg-transparent border-2 mx-2 fz-4 fw-bold lh-base" data-hover="加入購物車">
              <span>
                小計 NT${{ qty*selectProduct.price }}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      menuPage: '',
      selectProduct: {},
      qty: 1
    }
  },
  methods: {
    getProduct () {
      const { id } = this.$route.params
      const url = `${VITE_URL}/api/${VITE_PATH}/product/${id}`
      this.$http.get(url)
        .then(res => {
          this.selectProduct = res.data.product
        })
        .catch(err => {
          console.log(err)
        })
    },
    goMenu () {
      this.menuPage = this.$route.query.page
      this.$router.push({
        name: 'product-list',
        query: {
          page: this.menuPage === '' ? '' : this.menuPage
        }
      })
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>

<style lang="scss">
.text-grey-66 {
  color: #666666;
}
.text-brown {
  color: #B29575;
}

.icon-btn {
  width: 50px;
  height: 50px;
  background: white;
  border-color: #C0362D;
  border-radius: 25px;
  overflow: hidden;
  position: relative;
  transition: width 0.2s ease-in-out;
  &:focus {
    outline: none;
  }
}

.btn-addCart {
  position: relative;
  &:after {
    content: attr(data-hover);
    position: absolute;
    left: 0;
    width: 100%;
    text-align: center;
    opacity: 0;
  }
  &:hover {
    span {
      opacity: 0;
      transform: scale(0.3);
    }
    &:after {
      top: 50%;
      transform: translateY(-50%);
      opacity: 1;
    }
  }
}

</style>
