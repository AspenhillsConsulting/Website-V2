<template>
  <navbar />

  <RouterView />

  <footer>
    <div class="footer-column">
      <div class="footer-column-title">Contact</div>
      <div style="font-size: 0.9rem">
        <contact-card small />
      </div>
    </div>

    <div class="footer-column">
      <div class="footer-column-title">Services</div>
      <ul class="services-list">
        <li v-for="service in services" :key="service.slug">
          <router-link :to="`/services/${service.slug}`" tabindex="0">
            {{ service.title }}
          </router-link>
        </li>
      </ul>
    </div>

    <div class="footer-column">
      <div class="footer-column-title">Links</div>
      <ul class="extra-links">
        <li>
          <router-link to="/services"> Services </router-link>
        </li>

        <li v-if="features.projects.enabled">
          <router-link to="/projects"> Projects </router-link>
        </li>

        <li>
          <router-link to="/news"> News </router-link>
        </li>

        <li>
          <router-link to="/contact"> Contact </router-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ContactCard from '@/components/ContactCard.vue'
import { services } from '@/data/services.js'
import features from '@/composables/Features'
import Navbar from '@/components/Navbar.vue'
</script>

<style>
#app {
  position: relative;
}
</style>

<style scoped>
footer {
  width: 100%;
  background-color: #555;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 3rem;
  color: #fefefe;
  padding: 1rem 0 2rem 0;
  margin-top: 3rem;
}

.footer-column {
  width: 100%;
  padding: 0 5%;
  flex: 0 1 auto;
}

@media (min-width: 900px) {
  footer {
    gap: 1rem;
    flex-direction: row;
  }

  .footer-column {
    width: auto;
    padding: 0;
    min-width: 200px;
  }
}

.footer-column-title {
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #888;
}

.services-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.services-list > li {
  padding: 0;
  margin: 1rem 0;
}

.services-list > li:first-child {
  margin-top: 0;
}

.services-list > li:last-child {
  margin-bottom: 0;
}

.services-list a {
  color: inherit;
}

.extra-links {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.extra-links > li {
  padding: 0;
  margin: 1rem 0;
}

.extra-links > li:first-child {
  margin-top: 0;
}

.extra-links > li:last-child {
  margin-bottom: 0;
}

.extra-links a {
  color: inherit;
}

.vosb-logo {
  background: rgb(255, 255, 255);
  border-radius: 0.2rem;
}
</style>
