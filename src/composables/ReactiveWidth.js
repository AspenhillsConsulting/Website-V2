import { ref, onBeforeUnmount } from 'vue'

export default function () {
  const windowWidth = ref(0)

  const handleResize = () => windowWidth.value = window.innerWidth

  window.addEventListener('resize', handleResize)

  onBeforeUnmount(() => window.removeEventListener('resize', handleResize))

  handleResize()

  return windowWidth
}
