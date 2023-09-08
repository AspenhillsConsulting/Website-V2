<template>
  <div class="section-header">
    <slot name="header"></slot>
  </div>

  <div class="section-body">
    <slot name="body"></slot>
  </div>
</template>

<style scoped>
.section-header {
  max-width: 70ch;
  margin: 0 auto;
}

.section-body {
  max-width: 70ch;
  margin: 0 auto;
}
</style>
