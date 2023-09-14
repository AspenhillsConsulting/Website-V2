<template>
  <main>
    <hero-image v-bind="lidarScanningImageConfig" />

    <content-card class="my-6">
      <template v-slot:header> The future, today </template>

      <p>
        Did you know that over 85% of the lifecycle cost of a facility happens after the design and
        construction? The cost to operate and maintain the project can greatly exceed the cost of
        construction.
      </p>

      <p>
        By using BIM/VDC processes throughout the planning and construction phases of your project,
        you already have most of what you need to bring your facilities management into the modern
        age. Aspenhills Consulting can set up full-featured FM systems, populate them with your
        high-precision models, and train your facilities crew so they'll hit the ground running as
        soon as construction is complete.
      </p>
      <div class="block-quote">
        With all of the intelligence and capabilities of modern FM systems, you can save 20% or more
        in maintenance costs for decades to come.
      </div>

      <figure class="centered-image" id="healthcare-breakdown">
        <img
          src="/img/services/owner-facilities-management/healthcare-breakdown.svg"
          alt="Cost breakdown of the typical healthcare facility, showing operations being 87% of all costs"
        />
        <figcaption>
          Typical lifecycle costs for healthcare facilities
          <br />
          Courtesy of Healthcare BIM Consortium
        </figcaption>
      </figure>
    </content-card>

    <hero-image v-bind="modelToMachineImageConfig" />

    <content-card class="my-6">
      <template v-slot:header> Technology that works for you </template>

      <p>
        Model-based FM systems literally place every detail of your structure and subsystems
        directly in the hands of your maintenance and operations personnel. A handheld tablet that
        your staff take with them into the field replaces the slow and error-prone process of
        overflowing documentation rooms and piles of old reference manuals.
      </p>

      <p>A universe of capabilities:</p>
      <ul>
        <li>Real-time reporting and performance metrics for all of your facility's equipment</li>
        <li>
          Interactive 3D models that can viewed from every angle and exploded into individual parts
        </li>
        <li>
          Detailed visual displays of everything that interacts with a given piece of equipment,
          such as valves, controls, and related equipment
        </li>
        <li>
          Virtual- and augmented-reality views that let your personnel see through walls and into
          equipment without ever touching a tool
        </li>
      </ul>

      <p>
        This real-time access to detailed, up-to-date information that is presented in a portable,
        3D visual format can greatly aid in the efficiency of daily operations by markedly reducing
        the need to search through mountains of paper documents. Also, the ability to graphically
        present the live operating data of each piece of equipment or systems on the same screen
        with the 3D model can enable your personnel to adopt a pro-active maintenance process.
      </p>
    </content-card>

    <hero-image v-bind="modelToMachineImageConfig" />

    <content-card class="my-6">
      <template v-slot:header> Become proactive </template>

      <p>
        Classical FM systems force your personnel into a cycle of reacting to problems after they
        happen. The backlog of work keeps growing and incident response times stretch to
        unacceptable levels because your staff are struggling to find documentation in disorganized
        mountains of paper.
      </p>

      <p>
        With a model-based FM system, your staff can monitor every system in real-time to anticipate
        problems before they happen or detect them instantly. Your staff won't waste their time
        trying to find the right piece of documentation because everything will be easily searchable
        and tagged directly to the relevant pieces of equipment. With up-to-date and complete
        models, your staff will never be surprised by their documentation not matching reality.
      </p>
    </content-card>
    <hero-image v-bind="lod400ExpertsImageConfig" />

    <content-card class="my-6">
      <template v-slot:header> Select projects </template>

      <p>
        Aspenhills Consulting has successfully performed or assisted with clash coordination on
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

const lidarScanningImageConfig = ref({
  imagePath: '/img/services/Basement model.jpg',
  fullWidth: true,
  height: 400,
  darkenImage: true,
  offset: {
    x: 50,
    y: 0,
  },
  texts: [
    {
      text: 'Owner Facilities Management',
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

.centered-image {
  text-align: center;
}

#healthcare-breakdown > img{
  max-height: 350px;
  max-width: 100%;
}
</style>
