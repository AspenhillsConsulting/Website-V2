<template>
  <main>
    <responsive-image
      image-path="/img/news-header"
    />

    <content-card class="my-4">
      <template v-slot:header>
        <custom-icon :value="NewspaperVariantMultipleOutlineIcon" left />
        ACI in the news
      </template>

      <div class="news-list">
        <div class="news-item" v-for="newsItem in news" :key="newsItem.title">
          <div class="news-item-image">
            <img :src="newsItem.image" :alt="newsItem.image_alt" />
          </div>

          <div class="news-item-info">
            <div class="news-item-title">
              {{ newsItem.title }}
            </div>

            <div class="news-item-date">
              {{ newsItem.date }}
            </div>

            <div class="news-item-subtitle">
              {{ newsItem.subtitle }}
            </div>

            <div class="news-item-link">
              <a :href="newsItem.link" tabindex="0" target="_blank"> read more... </a>
            </div>
          </div>
        </div>
      </div>
    </content-card>
  </main>
</template>

<script setup>
import { news } from '@/data/news.js'
import ContentCard from '@/components/ContentCard.vue'
import CustomIcon from '@/components/CustomIcon.vue'
import ResponsiveImage from '@/components/ResponsiveImage.vue'
import { NewspaperVariantMultipleOutlineIcon } from '@/components/icons'
</script>

<style scoped>
.news-list {
  padding-top: 1rem;
}

.news-item {
  --image-size: 72px;
  margin-top: 4rem;
  display: flex;
  gap: 1rem;
}

.news-item:first-child {
  margin-top: 0;
}

.news-item-info {
  display: flex;
  flex-direction: column;
}

.news-item-image {
  width: var(--image-size);
  flex: 0 0 var(--image-size);
}

.news-item-image > img {
  max-width: var(--image-size);
  max-height: var(--image-size);
  margin: 0 auto;
  display: block;
}

.news-item-title {
  font-size: 1.25rem;
  margin-top: -0.4rem;
}

.news-item-date {
  font-size: 0.9rem;
}

.news-item-subtitle {
  margin-top: 0.75rem;
}

.news-item-link {
  margin-top: 0.25rem;
  font-size: 0.9rem;
}
</style>
