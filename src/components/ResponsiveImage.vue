<template>
  <img
    :srcset="srcsetString"
    :sizes="sizesString"
    :src="defaultSrcString"
    class="full-width-image"
  />
</template>

<script setup>
import { computed } from 'vue'

const { sizes, imagePath } = defineProps({
  imagePath: {
    type: String,
    required: true,
  },

  sizes: {
    type: Array,
    default: () => [480, 768, 1000],
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
</script>
