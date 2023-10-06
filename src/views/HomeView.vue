<template>
  <main>
    <hero-image
      image-path="/img/stock-photo-team-civil-engineer-and-contractor-discussion-in-construction-site-team-architect-working-use-bim-2169445773.jpg"
      tint="black"
      full-width
      :height="500"
      :offset="{ x: 70, y: 30 }"
    >
      <div class="header-hero-content">
        <div>
          <span :data-content="headerLineOne" v-html="headerLineOne"></span>
        </div>
        <div>
          <span :data-content="headerLineTwo" v-html="headerLineTwo"></span>
        </div>
      </div>
    </hero-image>

    <content-card class="my-6">
      <template v-slot:header>
        <custom-icon :value="CubeScanIcon" left :size="1.2" />
        The future of design & management
      </template>

      <p>
        Aspenhills Consulting are your experts for the latest in digital construction technologies,
        fully-integrated workflows, and VR/AR solutions.
      </p>

      <p>
        We can connect you with trusted vendors and partners, train your personnel, and help you
        implement these cutting-edge processes.
      </p>

      <p>
        Whether you're already using modern practices or just starting to transition from
        traditional methods, Aspenhills Consulting are your in-house technology experts.
      </p>
    </content-card>

    <hero-image image-path="/img/dots.svg" full-width repeat :height="110" />

    <content-card class="my-6">
      <template v-slot:header>
        <custom-icon :value="AccountTieIcon" left :size="1.2" />
        Owner services
      </template>

      <ul class="sparse-list">
        <li>Acting as an independent BIM process agent</li>
        <li>Creation of BIM standards &amp; execution plans</li>
        <li>Conversion of existing 2D systems to 3D</li>
        <li>IPD/lean/collaboration process leadership</li>
        <li>BIM to Facilities Management Process</li>
        <li>Technology and process training &amp; mentoring</li>
      </ul>

      <template v-slot:footer>
        <router-link to="/services" class="button" tabindex="0">
          All services
          <custom-icon :value="ArrowRightThickIcon" right :size="1.3" />
        </router-link>
      </template>
    </content-card>

    <content-card class="my-6">
      <template v-slot:header>
        <custom-icon :value="ToolboxIcon" left :size="1.2" />
        Contractor &amp; design services
      </template>

      <ul class="sparse-list">
        <li>BIM/VDC/Lean capability assessments</li>
        <li>Strategic goals & process implementation</li>
        <li>Modeling and clash process</li>
        <li>Software selection: BIM/VDC/4D/5D/xD</li>
        <li>IPD/lean/collaboration process leadership</li>
        <li>Project specific BIM/VDC services</li>
        <li>Technology and process training &amp; mentoring</li>
      </ul>

      <template v-slot:footer>
        <router-link to="/services" class="button" tabindex="0">
          All services
          <custom-icon :value="ArrowRightThickIcon" right :size="1.3" />
        </router-link>
      </template>
    </content-card>

    <!-- <hero-image
      image-path="/img/two-engineers-with-ar.webp"
      full-width
      :offset="{ x: 25, y: 0 }"
    /> -->
    <responsive-image
      image-path="/img/two-engineers-with-ar"
    />

    <content-card class="my-6">
      <template v-slot:header>
        <custom-icon :value="AccountGroupIcon" left :size="1.2" />
        About us
      </template>

      <p>
        Our staff come from extensive backgrounds within large construction contractors. We have
        personal experience with the selection and implementation of the same tools and processes we
        now provide.
      </p>

      <p>
        We view the utilization of BIM/VDC tools and processes not simply as technicians, but as end
        users aiming to enhance efficiency, scheduling, quality, safety, and profitability. Through
        experience, our managers have seen firsthand the technical and human challenges required for
        successful deployment within companies, as well as with outside team members; and we can
        uniquely provide the solutions.
      </p>

      <div class="block-quote">
        We're committed to assisting your team with the use of these enhanced capabilities so you
        can derive the maximum value from BIM/VDC.
      </div>

      <p>
        Aspenhills Consulting is available to fill the role of BIM technology and process experts
        for your company or team. We stay informed of the new developments in the industry on a
        world-wide scale so that you don't have to. We provide unbiased assistance in the selection
        and implementation of the most appropriate software and processes to meet your goals. Most
        importantly, with our ongoing training and mentoring of your personnel, we can help to
        overcome many of the initial complications and concerns associated with these initiatives.
      </p>

      <template v-slot:footer v-if="features.projects.enabled">
        <router-link to="/projects" class="button" tabindex="0">
          Our Projects
          <custom-icon :value="ArrowRightThickIcon" right :size="1.3" />
        </router-link>
      </template>
    </content-card>

    <hero-image image-path="/img/dots.svg" full-width repeat :height="110" />

    <content-card class="my-6">
      <template v-slot:header>
        <custom-icon :value="SealIcon" left :size="1.2" />
        Certifications &amp; awards
      </template>

      <award-card v-for="award in awards" :key="award.title" :award="award" />

      <template v-slot:footer>
        <router-link to="/news" class="button" tabindex="0">
          ACI In the News
          <custom-icon :value="ArrowRightThickIcon" right :size="1.3" />
        </router-link>
      </template>
    </content-card>

    <!-- <hero-image
      image-path="/img/stock-photo-russia-kemerovo-land-surveyor-equipment-robotic-total-station-theodolite-standing-on-1342225910.jpg"
      full-width
      :height="300"
      :offset="{ x: 50, y: 90 }"
    /> -->
    <responsive-image
      image-path="/img/trimble-total-station"
    />
  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import HeroImage from '@/components/HeroImage.vue'
import ContentCard from '@/components/ContentCard.vue'
import CustomIcon from '@/components/CustomIcon.vue'
import AwardCard from '@/components/AwardCard.vue'
import {
  AccountTieIcon,
  ToolboxIcon,
  CubeScanIcon,
  AccountGroupIcon,
  SealIcon,
  ArrowRightThickIcon,
} from '@/components/icons'

const headerLineOne = 'Your emerging AECO technology and process partner'
const headerLineTwo = 'Education - Selection - Implementation'

import awards from '@/data/awards.js'
import ResponsiveImage from '../components/ResponsiveImage.vue'

import features from '@/composables/Features'
</script>

<style scoped>
.full-width-image {
  width: 100%;
  position: relative;
  left: 0;
  border-radius: 0.2rem;
}

.header-hero-content {
  color: #f5f5f5;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
}

.header-hero-content > div > span {
  position: relative;
  z-index: 0;
  display: inline-block;
  letter-spacing: 0.06rem;
  font-weight: 600;

  font-family: Tahoma, sans-serif;
}

.header-hero-content > :first-child > span {
  font-size: 2.3rem;
  max-width: 30ch;
  /* margin-bottom: 6rem; */
  letter-spacing: 0.02em;
}

.header-hero-content > :last-child > span {
  font-size: 1.8rem;
  letter-spacing: 0.04em;
}

.header-hero-content > * > span:after {
  content: attr(data-content);
  color: black;
  -webkit-text-stroke: 0.2em #1f1f1f;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  font-weight: 600;
}

.sparse-list {
  list-style-type: none;
  padding: 0;
}

.sparse-list > li {
  margin: 2rem 0;
  font-size: 1rem;
  max-width: 70ch;
}

.sparse-list > li:first-child {
  margin-top: 0;
}

.sparse-list > li:last-child {
  margin-bottom: 0;
}

.sparse-list > li:before {
  content: '▶';
  color: var(--accent-color);
  margin-right: 0.5rem;
  font-size: 0.75rem;
  vertical-align: middle;
}

.services {
  width: 80ch;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.services > * {
  flex: 1 1 100%;
}

:deep(.card) {
  width: 80ch;
  margin: 0 auto;
}

.award + .award {
  margin-top: 2rem;
}
</style>
