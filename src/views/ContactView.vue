<template>
  <main>
    <hero-image
      image-path="/img/stock-photo-full-length-portrait-of-three-successful-business-people-wearing-hardhats-and-inspecting-plans-1840551490.jpg"
      :height="200"
      full-width
      :offset="{ x: 50, y: -200 }"
    />

    <div class="contact-container">
      <content-card>
        <p>
          Whether you already know which BIM/VDC services you need or you're just starting to
          investigate the world of modern construction and project management, we're here to answer
          all of your questions.
        </p>
      </content-card>

      <content-card>
        <template v-slot:header>
          <custom-icon :value="CardAccountDetails" left />
          Contact info
        </template>
        <contact-card />
        <template v-slot:footer>
          <div class="social-links">
            <a href="https://www.linkedin.com/company/aspenhills-consulting-inc." target="_blank">
              <custom-icon :value="LinkedinIcon" />
            </a>
            <a href="http://www.facebook.com/aspenhillsconsulting" target="_blank">
              <custom-icon :value="FacebookIcon" />
            </a>
          </div>
        </template>
      </content-card>
    </div>
  </main>
</template>

<script setup>
import ContentCard from '@/components/ContentCard.vue'
import CustomIcon from '@/components/CustomIcon.vue'
import ContactCard from '@/components/ContactCard.vue'
import HeroImage from '@/components/HeroImage.vue'
import { LinkedinIcon, FacebookIcon, CardAccountDetails } from '@/components/icons'
</script>

<style scoped>
.contact-container {
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 3rem;
  margin-top: 3rem;
  flex: 1 1 auto;
}

.social-links {
  flex: 1 0 100%;
  display: flex;
  justify-content: center;
  gap: 10%;
  padding-top: 1rem;
  font-size: 2rem;
  border-top: 1px solid #ddd;
}

.social-links > a {
  color: inherit;
}

:deep(.card) {
  width: 80ch;
  margin: 0 auto;
}
</style>
