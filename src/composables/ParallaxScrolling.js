import { onMounted, onBeforeUnmount, ref } from 'vue'

export default function useParallax({
  targetCallback,
  maxParallax,
  offset,
}) {
  let ticking = false
  let lastKnownScrollPosition
  let target = ref(null)

  const onScroll = () => {
    if (ticking) return

    if (!target.value) return

    ticking = true

    lastKnownScrollPosition =
      window.scrollY !== undefined
        ? window.scrollY
        : (document.documentElement || document.body.parentNode || document.body).scrollTop

    window.requestAnimationFrame(() => {
      const maxScroll = document.body.clientHeight - document.documentElement.clientHeight

      const scrollPercent = lastKnownScrollPosition / maxScroll

      const parallax = maxParallax * scrollPercent

      const positionX = offset.x
      const positionY = parallax + offset.y

      target.value.style['background-position'] = `${positionX}% ${positionY}%`

      ticking = false
    })
  }

  onMounted(() => {
    target.value = targetCallback()
    document.addEventListener('scroll', onScroll)

    onScroll()
  })

  onBeforeUnmount(() => {
    document.removeEventListener('scroll', onScroll)
  })
}