<template>
  <header>
    <div class="header-inner">
      <div class="branding">
        <img alt="Aspenhills Consulting logo" class="logo" src="@/assets/logo.svg" />

        <div class="title">
          <div>Aspenhills</div>
          <div>Consulting</div>
        </div>
      </div>

      <div class="nav-or-menu">
        <nav class="header-links">
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

        <div id="nav-hamburger-container" tabindex="0">
          <custom-icon :value="MenuIcon" @click="showDrawer = !showDrawer" />
        </div>
      </div>
    </div>
  </header>

  <div id="nav-drawer" v-if="showDrawer">
    <nav class="">
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
</template>

<script setup>
import { ref, watch } from 'vue'
import { RouterLink, useRoute  } from 'vue-router'
import features from '@/composables/Features'
import CustomIcon from '@/components/CustomIcon.vue'
import { HomeIcon, EmailIcon, ViewCarouselIcon, MoreIcon, MenuIcon } from '@/components/icons'
import useReactiveWidth from '@/composables/ReactiveWidth'

const route = useRoute()

const windowWidth = useReactiveWidth()

const showDrawer = ref(false)

watch(windowWidth, (newVal, oldVal) => {
  if (newVal > 720 && oldVal < 720) showDrawer.value = false
})

watch(() => route.name, () => {
  showDrawer.value = false
})
</script>

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
  user-select: none;
}

.title > :first-child {
  font-size: 1.52rem;
}

.title > :last-child {
  font-size: 1.4rem;
}

.nav-or-menu {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.header-links {
  width: 0;
  display: flex;
  justify-content: flex-end;
  flex-wrap: nowrap;
  transition-property: width;
  transition-duration: 0.25s;
  overflow: hidden;
}

@media (min-width: 720px) {
  .header-links {
    width: 510px;
  }
}

#nav-hamburger-container {
  overflow: hidden;
  width: 54px;
  transition-property: width, background-color;
  transition-duration: 0.25s;
  font-size: 2.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  cursor: pointer;
  user-select: none;
}

@media (min-width: 481px) {
  #nav-hamburger-container {
    width: 60px;
  }
}

@media (min-width: 720px) {
  #nav-hamburger-container {
    width: 0;
  }
}

#nav-hamburger-container:hover,
#nav-hamburger-container:focus {
  background-color: rgba(255, 255, 255, 0.2);
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
  font-size: 0.8rem;
  transition-property: font-size;
  transition-duration: 0.25s;
}

@media (min-width: 900px) {
  nav > a {
    font-size: 1rem;
  }
}

nav > a:hover,
nav > a:focus {
  background: var(--accent-color-opacity);
}

nav > a[aria-current='page'] {
  background: var(--accent-color);
  color: var(--text-primary-color);
}

.logo {
  width: 36px;
  height: 36px;
}

@media (min-width: 481px) {
  .logo {
    width: 42px;
    height: 42px;
  }
}

#nav-drawer {
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  z-index: 2;
  background: var(--background-secondary-color);
  width:200px;
  bottom:0;
  top:0;
}
</style>
