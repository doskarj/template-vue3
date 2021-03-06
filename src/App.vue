<template>
  <router-view />
  <span>isMobile: {{ isMobile }}</span>
  <br />
  <span>breakpoint: {{ breakpoint }}</span>
</template>

<script>
import '@/assets/css/reset.css'
import '@/assets/css/variables.css'
import breakpoints from '@/store/breakpoints'

export default {
  name: 'App',

  mounted() {
    breakpoints.initilizeBreakPoint()
    window.addEventListener('resize', () => {
      breakpoints.initilizeBreakPoint()
    })
  },

  setup() {
    return {
      isMobile: breakpoints.isMobile,
      breakpoint: breakpoints.breakpoint
    }
  }
}
</script>

<style>
#app {
  color: var(--color-black);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
