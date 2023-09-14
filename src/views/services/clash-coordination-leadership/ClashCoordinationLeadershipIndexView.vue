<template>
  <main>
    <hero-image v-bind="lidarScanningImageConfig" />

    <content-card class="my-6">
      <template v-slot:header> Eliminate risk at the source </template>

      <p>
        Without clash detection and correction, your project faces the possibility of severe cost
        overruns and scheduling delays. Aspenhills Consulting can coordinate your teams and
        contractors to systematically eliminate design conflicts before construction begins.
      </p>

      <p>
        With your high-precision 3D models in hand, we work with your team to uncover any portions
        of your design where structures and systems may interfere with each other. Using a
        combination of manual and automated techniques, we ensure that every portion of your design
        is thoroughly reviewed. Structural dimensions, utilities routing, and even finishes can be
        completely validated.
      </p>

      <p>
        Once clashes are detected, we coordinate with the impacted specialists to correct the design
        before your project leaves the planning stage. Now you can break ground on your project with
        confidence that your field teams won't have unexpected conflicts where your design doesn't
        match reality.
      </p>
    </content-card>

    <hero-image v-bind="modelToMachineImageConfig" />

    <content-card class="my-6">
      <template v-slot:header> Veteran leadership </template>

      <p>
        Aspenhills Consulting has the experience to ensure your clash coordination process is both
        efficient and thorough. Without our experts leading your clash coordination process, your
        project will still be at significant risk of unforeseen problems. We offer the unique
        combination of BIM/VDC expertise and in-the-trenches industry experience that will maximize
        the effectiveness of your clash coordination.
      </p>
    </content-card>

    <hero-image v-bind="lod400ExpertsImageConfig" />

    <content-card class="my-6">
      <template v-slot:header> Select projects </template>

      <p>
        Aspenhills Consulting has successfully performed or assisted with clash coordination on numerous
        jobs. You can read about a few in detail below or see a full listing on our projects page.
      </p>

      <ul>
        <li>Spool drawings formatted to your unique specifications</li>
        <li>MAJ files for direct download to manufacturing equipment</li>
        <li>Pre-cutting and pre-fabrication modeling</li>
        <li>Multi-trade pre-assembly modeling</li>
        <li>Output to label printers and TigerStop machines</li>
      </ul>
    </content-card>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import HeroImage from '@/components/HeroImage.vue'
import ContentCard from '@/components/ContentCard.vue'

const lidarScanningImageConfig = ref({
  imagePath:
    '/img/stock-photo-team-of-industrial-engineers-lean-on-office-table-analyze-machinery-blueprints-architectural-1902078616.jpg',
  fullWidth: true,
  height: 400,
  darkenImage: true,
  offset: {
    x: 50,
    y: 0,
  },
  texts: [
    {
      text: 'Clash Coordination Leadership',
      size: 'large',
    },
  ],
})

const modelToMachineImageConfig = ref({
  imagePath:
    '/img/services/lidar/stock-photo--d-rendering-of-a-group-of-professional-buildings-274422275.jpg',
  fullWidth: true,
  height: 250,
  darkenImage: true,
  offset: {
    x: 50,
    y: 0,
  },
  texts: [
    {
      text: 'Experience that counts',
      size: 'large',
    },
  ],
})

const lod400ExpertsImageConfig = ref({
  imagePath: '/img/main.jpg',
  fullWidth: true,
  height: 250,
  tint: 'blue',
  darkenImage: true,
  offset: {
    x: 50,
    y: 50,
  },
  texts: [
    {
      text: 'Your Clash Coordination Experts',
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
