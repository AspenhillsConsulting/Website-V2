import { onMounted, onBeforeUnmount, ref } from 'vue'
import { getScrollParent } from '@/logic/scrollExtensions.js'

export default function useParallax({ targetCallback, offset }) {
  let ticking = false
  let lastKnownScrollPosition
  let target = null
  let targetTop = null
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
      const positionY = -targetTop + lastKnownScrollPosition + headerHeight

      target.style['background-position'] = `${offset.x}% calc(${positionY}px + ${offset.y}%)`

      ticking = false
    })
  }

  onMounted(() => {
    target = targetCallback()

    target.style['background-size'] = 'cover'

    const bodyRect = document.body.getBoundingClientRect()
    const targetRect = target.getBoundingClientRect()
    targetTop = targetRect.top - bodyRect.top

    viewportHeight.value = getScrollParent(target).clientParentSize - + headerHeight

    document.addEventListener('scroll', onScroll, { passive: true })

    window.setTimeout(() => {
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
