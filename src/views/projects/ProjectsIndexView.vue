<template>
  <main>
    <content-card>
      <template v-slot:header> Projects </template>

      <div class="projects-list">
        <div v-for="project in projects" :key="project.slug" class="project">
          <div class="project-image">
            <img :src="project.icon" aria-hidden="true" />
          </div>

          <div class="project-info">
            <div class="project-title">
              {{ project.title }}
            </div>

            <div class="project-location">
              {{ project.location.fullState }}
            </div>

            <div class="project-tags">
              <div class="project-tag" v-for="tag in project.tags" :key="tag">
                {{ tag }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </content-card>
  </main>
</template>

<script setup>
import ContentCard from '@/components/ContentCard.vue'
import { projects } from '@/data/projects'
</script>

<style scoped>
.project {
  --image-size: 72px;
  display: flex;
  gap: 1rem;
  margin-top: 3rem;
}

.project:first-child {
  margin-top: 1rem;
}

.project-image {
  width: var(--image-size);
  flex: 0 0 var(--image-size);
}

.project-image > img {
  max-width: var(--image-size);
  max-height: var(--image-size);
  margin: 0 auto;
  display: block;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.project-tag {
  background: #ddd;
  border-radius: 0.4rem;
  padding: 0.1rem 0.5rem 0.3rem 0.5rem;
  font-size: 0.85rem;
}

.project-location {
  font-size: 0.9rem;
}

.project-title {
  font-size: 1.2rem;
  margin-top: -0.4rem;
}
</style>
