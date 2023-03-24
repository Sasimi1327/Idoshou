<template>
  <div class="container-fluid " style="background-color: #F1ECE8; width: 100vw; height: 100vh;">
    <div class="cont_principal">
      <div class="cont_error text-center">
        <h2>404</h2>
        <p>您所查詢的網頁不存在或已移除。</p>
        <div class="d-flex justify-content-center mt-20">
          <RouterLink to="/" type="button" class="btn border text-primary p-4 btnCustomHover fw-bold mx-4 hvr-push">前往首頁</RouterLink>
          <RouterLink to="/menu" type="button" class="btn btn-primary p-4 btnCustomHover fw-bold mx-4 hvr-pop">繼續購物</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

.btnCustomHover {
  transition: all .7s ease;
  border: 1px solid #840000;
  &:hover {
    transform: scale(1.05);
    color: white;
    background-color: #840000;
  }
}

.cont_ {
  &principal {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  &error {
    position: absolute;
    width: 100%;
    height: 300px;
    top: 50%;
    margin-top:-150px;
    & > h2  {
      font-weight: 400;
      font-size:150px;
      color:#666666;
      position: relative;
      left:-100%;
      transition: all 0.5s;
    }
    & > p  {
      font-weight: 300;
      font-size:24px;
      letter-spacing: 5px;
      color:#D4D4D4;
      position: relative;
      left:100%;
      transition: all 0.5s;
      transition-delay: 0.5s;
      -webkit-transition: all 0.5s;
      -webkit-transition-delay: 0.5s;
    }
  }
}

.cont_error_active > .cont_error > h2 {
  left:0%;
}
.cont_error_active > .cont_error > p {
  left:0%;
}

@-webkit-keyframes animation_error_1 {
  from {
    -webkit-transform: rotate(20deg);
  transform: rotate(20deg);
  }
  to {  -webkit-transform: rotate(25deg);
  transform: rotate(25deg);
  }
}
@-o-keyframes animation_error_1 {
  from {
    -webkit-transform: rotate(20deg);
    transform: rotate(20deg);
  }
  to {
    -webkit-transform: rotate(25deg);
    transform: rotate(25deg);
  }
}
@-moz-keyframes animation_error_1 {
  from {
    -webkit-transform: rotate(20deg);
    transform: rotate(20deg);
  }
  to {
    -webkit-transform: rotate(25deg);
    transform: rotate(25deg);
  }
}
@keyframes animation_error_1 {
  from {
    -webkit-transform: rotate(20deg);
    transform: rotate(20deg);
  }
  to {
    -webkit-transform: rotate(25deg);
    transform: rotate(25deg);
  }
}

@-webkit-keyframes animation_error_2 {
  from {
    -webkit-transform: rotate(-15deg);
    transform: rotate(-15deg);
  }
  to {
    -webkit-transform: rotate(-20deg);
    transform: rotate(-20deg);
  }
}
@-o-keyframes animation_error_2 {
  from { -webkit-transform: rotate(-15deg);
  transform: rotate(-15deg);
  }
  to { -webkit-transform: rotate(-20deg);
  transform: rotate(-20deg);
  }
}
@-moz-keyframes animation_error_2 {
  from {
    -webkit-transform: rotate(-15deg);
    transform: rotate(-15deg);
  }
  to {
    -webkit-transform: rotate(-20deg);
    transform: rotate(-20deg);
  }
}
@keyframes animation_error_2 {
  from {
    -webkit-transform: rotate(-15deg);
    transform: rotate(-15deg);
  }
  to {
    -webkit-transform: rotate(-20deg);
    transform: rotate(-20deg);
  }
}

</style>

<script>

export default {
  mounted () {
    document.querySelector('.cont_principal').className = 'cont_principal cont_error_active'
  }
}
</script>
