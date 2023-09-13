import { onMounted, onBeforeUnmount, ref } from 'vue'
import { getScrollParent } from '@/logic/scrollExtensions.js'

export default function useParallax({ targetCallback, offset }) {
  let ticking = false
  let lastKnownScrollPosition
  let target = null
  let targetTop = null
  let targetParentRect = null
  let targetParentHeight = null
  const headerHeight = 60.796875
  const viewportHeight = ref(0)

  const onScroll = () => {
    if (ticking) return

    if (!target) return

    ticking = true

    lastKnownScrollPosition =
      window.scrollY !== undefined
        ? window.scrollY
        : (document.documentElement || document.body.parentNode || document.body).scrollTop

    window.requestAnimationFrame(() => {
      targetParentHeight = targetParentRect.bottom - targetParentRect.top

      const positionY = -targetTop + lastKnownScrollPosition + headerHeight + (targetParentHeight * offset.y / 100)

      target.style['background-position'] = `${offset.x}% ${positionY}px`

      ticking = false
    })
  }

  onMounted(() => {
    window.setTimeout(() => {
      target = targetCallback()
  
      target.style['background-size'] = 'cover'
  
      const bodyRect = document.body.getBoundingClientRect()
      const targetRect = target.getBoundingClientRect()
      targetParentRect = target.parentNode.getBoundingClientRect()
      targetTop = targetRect.top - bodyRect.top
  
      viewportHeight.value = getScrollParent(target).clientParentSize - + headerHeight
  
      document.addEventListener('scroll', onScroll, { passive: true })

      onScroll()
    }, 1)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('scroll', onScroll, { passive: true })
  })

  return{
    viewportHeight
  }
}
