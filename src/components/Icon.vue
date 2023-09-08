<template>
  <svg
    :width="`${size}em`"
    :height="`${size}em`"
    viewBox="0 0 24 24"
    fill="currentColor"
    :class="{ left, right }"
    aria-hidden
  >
    <g>
      <path :d="value" />
    </g>
  </svg>
</template>

<script setup>
defineProps({
  size: {
    type: Number,
    default: 1
  },

  value: {
    type: String
  },

  left: {
    type: Boolean
  },

  right: {
    type: Boolean
  }
})
</script>

<style scoped>
.left {
  margin-right: 0.5em;
}

.right {
  margin-left: 0.5em;
}
</style>
