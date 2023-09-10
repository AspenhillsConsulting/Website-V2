<template>
  <main>
    <div v-for="service in services" :key="service.slug" class="service">
      <hero-image
        :image-path="service.image.src"
        full-width
        tint="black"
        height="200px"
        v-if="service.image && service.image.src"
      />

      <content-card>
        <template v-slot:header>
          {{ service.title }}
        </template>

        <div>
          {{ service.summary }}
        </div>

        <template v-slot:footer>
          <router-link class="button" :to="`/services/${service.slug}`">
            More info
            <custom-icon :value="ArrowRightThickIcon" right />
          </router-link>
        </template>
      </content-card>
    </div>
  </main>
</template>

<script setup>
import ContentCard from '@/components/ContentCard.vue'
import CustomIcon from '@/components/CustomIcon.vue'
import HeroImage from '@/components/HeroImage.vue'
import { ArrowRightThickIcon } from '@/components/icons'
import { RouterLink } from 'vue-router'
import { services } from '@/data/services'
</script>

<style scoped>
.service {
  margin-top: 15rem;
}

.service:first-child {
  margin-top: 1rem;
}
</style>
