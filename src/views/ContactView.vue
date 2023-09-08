<template>
  <main>
    <card>
      <p>
        Whether you already know which BIM/VDC services you need or you're
        just starting to investigate the world of modern construction
        and project management, we're here to answer all of your questions.
      </p>
    </card>

    <card>
      <template v-slot:header>
        <icon :value="CardAccountDetails"
              left />
        Contact info
      </template>
      <contact-card />
      <template v-slot:footer>
        <div class="social-links">
          <a href="https://www.linkedin.com/company/aspenhills-consulting-inc."
             target="_blank">
            <icon :value="LinkedinIcon" />
          </a>
          <a href="http://www.facebook.com/aspenhillsconsulting"
             target="_blank">
            <icon :value="FacebookIcon" />
          </a>
        </div>
      </template>
    </card>
  </main>
</template>

<script setup>
import Card from '@/components/Card.vue'
import Icon from '@/components/Icon.vue'
import ContactCard from '@/components/ContactCard.vue'
import {
  LinkedinIcon,
  FacebookIcon,
  CardAccountDetails,
} from '@/components/icons'
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
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

.social-links>a {
  color: inherit;
}

:deep(.card) {
  width: 80ch;
  margin: 0 auto;
}
</style>
