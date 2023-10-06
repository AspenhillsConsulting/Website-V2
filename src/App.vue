<template>
  <header>
    <div class="header-inner">
      <div class="branding">
        <img
          alt="Aspenhills Consulting logo"
          class="logo"
          src="@/assets/logo.svg"
          width="42"
          height="42"
        />

        <div class="title">
          <div>Aspenhills</div>
          <div>Consulting</div>
        </div>
      </div>

      <nav>
        <RouterLink to="/" tabindex="0">
          <custom-icon :value="HomeIcon" left />
          Home
        </RouterLink>

        <RouterLink to="/services" tabindex="0" :exact="false">
          <custom-icon :value="MoreIcon" left />
          Services
        </RouterLink>

        <RouterLink to="/projects" tabindex="0" v-if="features.projects.enabled">
          <custom-icon :value="ViewCarouselIcon" left />
          Projects
        </RouterLink>

        <RouterLink to="/contact" tabindex="0">
          <custom-icon :value="EmailIcon" left />
          Contact
        </RouterLink>
      </nav>
    </div>
  </header>

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
import CustomIcon from '@/components/CustomIcon.vue'
import { HomeIcon, EmailIcon, ViewCarouselIcon, MoreIcon } from '@/components/icons'
import ContactCard from '@/components/ContactCard.vue'
import { services } from '@/data/services.js'
import features from '@/composables/Features'
</script>

<style>
#app {
  position: relative;
}
</style>

<style scoped>
header {
  position: fixed;
  width: 100%;
  background-color: #555;
  top: 0;
  height: 3.8rem;
  z-index: 1;
  box-shadow: 0 3px 3px 0 #0005;
}

.header-inner {
  margin: 0 auto;
  width: var(--layout-max-width);
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: stretch;
  gap: 0.5rem;
  line-height: 1.5;
  color: white;
}

.branding {
  display: flex;
  padding: 0.5rem 0;
  gap: 0.5rem;
}

.title {
  text-transform: uppercase;
  line-height: 1.4rem;
}

.title > :first-child {
  font-size: 1.52rem;
}

.title > :last-child {
  font-size: 1.4rem;
}

nav {
  display: flex;
  flex-wrap: nowrap;
}

nav > a {
  padding: 1rem;
  display: flex;
  color: #f3f3f3;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 0.06rem;
  font-weight: 600;
  text-decoration: none;
}

nav > a:hover,
nav > a:focus {
  background: var(--accent-color-opacity);
}

nav > a[aria-current='page'] {
  background: var(--accent-color);
  color: var(--text-primary-color);
}

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
