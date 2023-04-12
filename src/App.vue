<template>
  <RouterView />
</template>

<script>
// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  mounted () {
    AOS.init()
  }
}
</script>

<style>
html, body {
  font-family: 'Amiri', 'Noto Sans TC', sans-serif;
}
</style>
