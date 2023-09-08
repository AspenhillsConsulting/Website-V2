<template>
  <main>
    <HeroImage v-bind="lod400ImageConfig" />

    <Card class="my-6">
      <template v-slot:header>
        The future of construction management
      </template>

      <p>
        <a href="https://www.gsa.gov/real-estate/design-construction/3d4d-building-information-modeling/guidelines-for-bim-software/document-guides/level-of-detail"
           target="_blank">
          LOD 400</a>
        offers unparalleled coordination and efficiency throughout the lifecycle of your project. By modelling each
        component to the level required for automated fabrication and then scheduling the delivery and assembly of every
        part, LOD 400 project plans are the future of construction management, today.
      </p>

      <div class="lod-400-process-container">
        Modelling → Fabrication → Scheduling
      </div>
    </Card>

    <HeroImage v-bind="modelToMachineImageConfig" />

    <Card class="my-6">
      <template v-slot:header>
        Automated fabrication
      </template>

      <p>
        LOD 400 enables fabricators to feed model data directly into their machinery to maximize precision and reduce
        waste. Aspenhills Consulting will work with your contractors and vendors to ensure a smooth transition into this
        high-performance workflow. We can provide:
      </p>

      <ul>
        <li>Spool drawings formatted to your unique specifications</li>
        <li>MAJ files for direct download to manufacturing equipment</li>
        <li>Pre-cutting and pre-fabrication modeling</li>
        <li>Multi-trade pre-assembly modeling</li>
        <li>Output to label printers and TigerStop machines</li>
      </ul>
    </Card>

    <HeroImage v-bind="lod400ExpertsImageConfig" />

    <Card class="my-6">
      <template v-slot:header>
        Select projects
      </template>

      <p>
        Aspenhills Consulting has successfully implemented or assisted with LOD 400 processes on numerous jobs. You can
        read about a few in detail below or see a full listing on our projects page.
      </p>

      <ul>
        <li>Spool drawings formatted to your unique specifications</li>
        <li>MAJ files for direct download to manufacturing equipment</li>
        <li>Pre-cutting and pre-fabrication modeling</li>
        <li>Multi-trade pre-assembly modeling</li>
        <li>Output to label printers and TigerStop machines</li>
      </ul>
    </Card>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import HeroImage from '@/components/HeroImage.vue'
import Card from '@/components/Card.vue'
import Icon from '@/components/Icon.vue'

const lod400ImageConfig = ref({
  imagePath: '/img/services/lod-400/lod400_rack.png',
  fullWidth: true,
  height: '400px',
  maxParallax: -30,
  darkenImage: true,
  offset: {
    x: 50,
    y: 60,
  },
  texts: [
    {
      text: 'LOD 400',
      size: 'large',
    },
    {
      text: 'Fabrication Level Trade Modeling',
    },
  ],
})

const modelToMachineImageConfig = ref({
  imagePath: '/img/services/lod-400/spool_rack.png',
  fullWidth: true,
  height: '250px',
  maxParallax: -30,
  darkenImage: true,
  tint: 'green',
  offset: {
    x: 50,
    y: 50,
  },
  texts: [
    {
      text: 'From model to machine',
      size: 'large',
    },
  ],
})

const lod400ExpertsImageConfig = ref({
  imagePath: '/img/main.jpg',
  fullWidth: true,
  height: '250px',
  maxParallax: -30,
  tint: 'blue',
  darkenImage: true,
  offset: {
    x: 50,
    y: 50,
  },
  texts: [
    {
      text: 'Your LOD 400 Experts',
      size: 'large',
    },
  ],
})
</script>

<style scoped>
.lod-400-process-container {
  text-align: center;
  padding-top: 3rem;
  font-size: 1.3rem;
  font-weight: 600;
}
</style>