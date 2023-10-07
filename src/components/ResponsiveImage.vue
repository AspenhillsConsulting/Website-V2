<template>
  <div class="responsive-image-container">
    <img
      :srcset="srcsetString"
      :sizes="sizesString"
      :src="defaultSrcString"
      class="responsive-image"
      :alt="alt"
      :aria-hidden="isAriaHidden"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const { sizes, imagePath, alt } = defineProps({
  imagePath: {
    type: String,
    required: true,
  },

  sizes: {
    type: Array,
    default: () => [480, 768, 1000],
  },

  alt: {
    type: String,
    required: false,
  },
})

const sizeScaling = 1.17

const sizesString = computed(
  () =>
    sizes
      .slice(0, -1)
      .map((size) => `(max-width: ${Math.ceil(size * sizeScaling)}px)${size}px`)
      .join(',') +
    ',' +
    sizes.slice(-1).map((size) => `${size}px`)[0],
)

const srcsetString = computed(() =>
  sizes.map((size) => `${imagePath}-${size}w.webp ${size}w`).join(','),
)

const defaultSrcString = computed(
  () => sizes.slice(-1).map((size) => `${imagePath}-${size}w.webp`)[0],
)

const isAriaHidden = computed(() => !alt)
</script>

<style scoped>
.responsive-image-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.responsive-image {
  border-radius: 0.2rem;
  max-height: 100%;
  max-width: 100%;
}
</style>
