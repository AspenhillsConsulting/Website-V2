<template>
  <main>
    <content-card v-for="service in services" :key="service.slug" class="service">
      <template v-slot:header>
        <hero-image
          :image-path="service.image?.src"
          :texts="[{ text: service.title }]"
          tint="black"
          full-width
          height="200px"
        />
      </template>

      <div>
        {{ service.summary }}
      </div>

      <template v-slot:footer>
        <router-link class="button" :to="`/services/${service.slug}`"> More info </router-link>
      </template>
    </content-card>
  </main>
</template>

<script setup>
import ContentCard from '@/components/ContentCard.vue'
import HeroImage from '@/components/HeroImage.vue'
import { RouterLink } from 'vue-router'
import { services } from '@/data/services'
</script>

<style scoped>
.service {
  margin-top: 7rem;
}

.service:first-child {
  margin-top: 1rem;
}
</style>
