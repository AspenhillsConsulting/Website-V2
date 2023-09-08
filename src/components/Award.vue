<template>
  <div class="award">
    <div class="award-image">
      <img :src="award.image.src"
           :alt="award.image.alt" />
    </div>
    <div class="award-body">
      <div class="award-title">
        {{ award.title }}
      </div>
      <div class="award-description">
        {{ award.description }}
      </div>
      <div class="award-link"
           v-if="award.to || award.href">
        <router-link :to="award.to" tabindex="0" :title="`Read more about '${award.title}'`" v-if="award.to">
          read more...
        </router-link>
        <a :href="award.href" :title="`Read more about '${award.title}'`" tabindex="0" v-else>
          read more...
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const { award } = defineProps({
  award: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.award {
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
  align-items: center;
  font-size: 0.9rem;
}

.award-image>img {
  width: 4.5rem;
}

.award-body {
  display: flex;
  flex-direction: column;
}

.award-title {
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.award-link {
  margin-top: 0.25rem;
}
</style>