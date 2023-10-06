<template>
  <div
    :class="['hero-image-container', { 'full-width': fullWidth }]"
    :style="{ height: `${height}px` }"
  >
    <div
      class="hero-image"
      :style="{
        backgroundImage: `url('${imagePath}')`,
        height: enableParallax ? `${viewportHeight}px` : `${height}px`,
        backgroundPosition: enableParallax ? null : `${offset.x}% ${offset.y}%`,
      }"
      ref="container"
    ></div>

    <div
      :class="['hero-image-body', { 'darken-image': darkenImage }, tint, repeat]"
      v-if="slots.default"
    >
      <slot></slot>
    </div>

    <div
      v-else-if="(texts && texts.length) || tint"
      :class="['hero-image-body', { 'darken-image': darkenImage }, textSpacing, tint, repeat]"
    >
      <div v-for="text in texts" :key="text" class="hero-image-text-container">
        <span
          :data-content="text.text"
          v-html="text.text"
          :class="['hero-image-text', text.size]"
        ></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSlots, ref } from 'vue'
import useParallax from '@/composables/ParallaxScrolling.js'

const { offset, height, repeat, enableParallax } = defineProps({
  imagePath: String,
  darkenImage: Boolean,
  fullWidth: Boolean,
  enableParallax: Boolean,
  repeat: Boolean,
  offset: {
    type: Object,
    default: () => ({ x: 50, y: 0 }),
  },
  height: {
    type: Number,
    default: 400,
  },
  texts: {
    type: Array,
    default: () => [],
  },
  textSpacing: {
    type: String,
    validator(value) {
      return ['center', 'space-around', 'space-between', 'start', 'end'].includes(value)
    },
    default: 'center',
  },
  tint: {
    type: String,
    default: null,
  },
})

const slots = useSlots()

const container = ref(null)

if (enableParallax) {
  useParallax({
    targetCallback: () => container.value,
    offset,
  })
}
</script>

<style scoped>
.hero-image-container {
  position: relative;
  border-radius: 0.25rem;
  overflow: hidden;
}

.hero-image {
  position: relative;
  background-position: center 0%;
  background-repeat: no-repeat;
  background-size: cover;
}

.hero-image.repeat {
  background-repeat: repeat;
}

.hero-image-body {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #f5f5f5;
  text-align: center;
}

.hero-image-body.center {
  justify-content: center;
}

.hero-image-body.space-around {
  justify-content: space-around;
}

.hero-image-body.space-between {
  justify-content: space-between;
}

.hero-image-body.start {
  justify-content: start;
}

.hero-image-body.end {
  justify-content: end;
}

.darken-image {
  backdrop-filter: brightness(75%) saturate(40%);
}

.hero-image-body.black {
  backdrop-filter: brightness(75%) saturate(40%);
}

.hero-image-body:after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

.hero-image-body.green:after {
  background-color: rgba(24, 102, 12, 0.3);
}

.hero-image-body.blue:after {
  background-color: rgba(12, 29, 102, 0.3);
}

.hero-image-body.white:after {
  background-color: rgba(250, 250, 250, 0.75);
}

.full-width {
  width: var(--layout-width-minus-scrollbar);
  left: 50%;
  transform: translateX(-50%);
  border-radius: 0;
}

.hero-image-text {
  position: relative;
  z-index: 2;
  display: inline-block;
  letter-spacing: 0.06rem;
  font-weight: 600;
  font-size: 1.8rem;

  font-family: Tahoma, sans-serif;
}

.hero-image-text.large {
  font-size: 2.3rem;
}

.hero-image-text:after {
  content: attr(data-content);
  color: black;
  -webkit-text-stroke: 0.2em #1f1f1f;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  font-weight: 600;
}
</style>
