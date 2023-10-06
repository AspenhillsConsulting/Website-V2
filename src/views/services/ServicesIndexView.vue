<template>
  <main>
    <div v-for="service in services" :key="service.slug" class="service">
      <hero-image
        :image-path="service.image.src"
        tint="black"
        :height="240"
        :offset="service.image.offset"
        v-if="service.image && service.image.src"
      />

      <content-card>
        <template v-slot:header>
          {{ service.title }}
        </template>

        <div v-html="service.summary"></div>

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
  margin-top: 5rem;
}

.service:first-child {
  margin-top: 0;
}

main{
  margin-bottom: 8rem;
}
</style>
