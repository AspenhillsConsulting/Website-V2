<template>
  <main>
    <responsive-image
      image-path="/img/contact-header"
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
import ResponsiveImage from '@/components/ResponsiveImage.vue'
import { LinkedinIcon, FacebookIcon, CardAccountDetails } from '@/components/icons'
</script>

<style scoped>
.contact-container {
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 2rem;
  margin-top: 2rem;
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
</style>
