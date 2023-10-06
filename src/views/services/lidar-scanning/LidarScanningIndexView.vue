<template>
  <main>
    <hero-image v-bind="lidarScanningImageConfig" />

    <content-card class="my-6">
      <template v-slot:header> Uncompromising precision </template>

      <p>
        High-precision laser scanning turns your existing structures into 3D models that perfectly
        match real-world measurements. A small crew of our scanning experts can rapidly produce
        point cloud data with millions of measurements to within 3mm of tolerance.
      </p>

      <p>
        Utilizing industry-leading equipment, our scanning crews can also capture full-color photos
        of every scanned structure. When combined with the final 3D model, this enables
        photo-realistic previews and walkthroughs of your existing structures.
      </p>

      <p>
        If you prefer to use your own ground crew, Aspenhills Consulting can provide the guidance
        and vendor recommendations needed to complete your scanning job quickly and accurately.
      </p>
    </content-card>

    <hero-image v-bind="modelToMachineImageConfig" />

    <content-card class="my-6">
      <template v-slot:header> 3D modelling and retopology </template>

      <p>
        LIDAR scanning produces massive amounts of data in the form of point clouds. Before those
        individual measurements can be useful, the point clouds need to be turned into efficient 3D
        models. Those 3D models are then used throughout the rest of the BIM/VDC pipeline.
      </p>

      <p>
        Aspenhills Consulting has the expertise and partnerships to perform this conversion quickly
        and affordably without compromising the exacting detail you expect from laser scanning.
      </p>
    </content-card>

    <hero-image v-bind="lod400ExpertsImageConfig" v-if="features.projects.enabled" />

    <content-card class="my-6" v-if="features.projects.enabled">
      <template v-slot:header> Select projects </template>

      <p>
        Aspenhills Consulting has successfully performed or assisted with LIDAR scanning on
        numerous jobs. You can read about a few in detail below or see a full listing on our
        projects page.
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
import features from '@/composables/Features'

const lidarScanningImageConfig = ref({
  imagePath: '/img/services/lidar/lidar_example_1.jpg',
  fullWidth: true,
  height: 400,
  darkenImage: true,
  offset: {
    x: 50,
    y: 0,
  },
  texts: [
    {
      text: 'LIDAR Scanning',
      size: 'large',
    },
  ],
})

const modelToMachineImageConfig = ref({
  imagePath: '/img/services/lidar/stock-photo--d-rendering-of-a-group-of-professional-buildings-274422275.jpg',
  fullWidth: true,
  height: 250,
  darkenImage: true,
  offset: {
    x: 50,
    y: 0,
  },
  texts: [
    {
      text: 'From measurement to model',
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
      text: 'Your LIDAR Scanning Experts',
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
