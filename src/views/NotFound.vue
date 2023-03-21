<template>
  <div class="d-flex flex-column justify-content-center align-items-center my-10 my-md-20">

    <div class='text-primary border border-2 border-primary p-15 flow-animate' style="font-size: 40px;">
      <i class="fa-solid fa-circle-exclamation d-inline-block text-center" style="font-size: 40px;"></i>
      <span> </span>
      <span> </span>
      <span> </span>
      <span> </span>
      此頁面不存在
    </div>
    <div class="d-flex justify-content-center mt-20">
      <RouterLink to="/" type="button" class="btn border text-primary py-4 px-20 btnCustomHover fw-bold mx-4 hvr-push">前往首頁</RouterLink>
      <RouterLink to="/menu" type="button" class="btn btn-primary py-4 px-20 btnCustomHover fw-bold mx-4 hvr-pop">繼續購物</RouterLink>
    </div>
  </div>
</template>

<style lang="scss">
.flow-animate {
  position: relative;
  padding: 30px 60px;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
  color: #C0362D;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 4px;
  font: 700 30px consolas;
  overflow: hidden;

  & span:nth-child(1) {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(to right, white, #C0362D);
    animation: animate1 2s linear infinite;
    animation-delay: 1s;
  }
  & span:nth-child(2) {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 3px;
    background: linear-gradient(to bottom, white, #C0362D);
    animation: animate2 2s linear infinite;
    animation-delay: 2s;
  }
  & span:nth-child(3) {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(to left, white, #C0362D);
    animation: animate3 2s linear infinite;
    animation-delay: 3s;
  }
  & span:nth-child(4) {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 3px;
    background: linear-gradient(to top, white, #C0362D);
    animation: animate4 2s linear infinite;
    animation-delay: 4s;
  }
}

@keyframes animate1 {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
@keyframes animate2 {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
}
@keyframes animate3 {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
@keyframes animate4 {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(-100%);
  }
}

.btnCustomHover {
  transition: all .7s ease;
  &:hover {
    transform: scale(1.05);
    color: white;
    background-color: #840000;
  }
}

</style>
