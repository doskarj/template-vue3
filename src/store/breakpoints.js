import { ref } from 'vue'
import { mobileCheck } from '@/utils/domUtils'
import breakpoints from '@/utils/breakpoints'

const isMobile = ref(mobileCheck())
const breakpoint = ref(breakpoints.INITIAL)

const initilizeBreakPoint = () => {
  const width = window.innerWidth

  breakpoint.value = Object.values(breakpoints).find(({ min, max, value }) => {
    if (width >= min && width <= max) {
      return value
    }
  })
}

export default {
  isMobile,
  breakpoint,
  initilizeBreakPoint
}
