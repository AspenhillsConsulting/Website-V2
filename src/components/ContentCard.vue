<template>
  <div class="card">
    <div class="card-header" v-if="slots.header">
      <slot name="header"></slot>
    </div>

    <div class="card-subheader" v-if="slots.subheader">
      <slot name="subheader"></slot>
    </div>

    <div class="card-body" v-if="slots.default">
      <slot></slot>
    </div>

    <div class="card-footer" v-if="slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
import { useSlots } from 'vue'

const slots = useSlots()
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-radius: 0.25rem;
  overflow: hidden;

  /* box-shadow:
    0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12); */

  max-width: 100%;

  /* background: #fff; */
}

.card-header {
  font-size: 1.4rem;
  line-height: 2rem;
  display: flex;
  align-items: center;
  /* background-color: #eee; */
  padding: 1rem 1rem 0.5rem 1rem;
  border-bottom: 1px solid #ddd;
}

.card-body {
  padding: 1rem;
}

.card-footer {
  padding: 1rem;
  display: flex;
  justify-content: end;
}
</style>
