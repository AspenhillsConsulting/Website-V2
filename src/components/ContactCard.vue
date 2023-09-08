<template>
  <div :class="['vcard', { small }]">
        <div class="vcard-section">
          <icon :value="AccountTieIcon"
                :size="1.3" />
          <span class="fn"> Michael Sibo </span>
        </div>

        <div class="vcard-section">
          <icon :value="EmailIcon"
                :size="1.3" />
          <a class="email"
             href="mailto:mikesibo@aspenhillsconsulting.com">
            mikesibo@aspenhillsconsulting.com
          </a>
        </div>

        <div class="vcard-section">
          <icon :value="PhoneIcon"
                :size="1.3" />
          <span class="tel"> +1-719-338-6078 </span>
        </div>

        <div class="vcard-section">
          <icon :value="MapIcon"
                :size="1.3" />
          <div class="adr">
            <div class="street-address">9936 English Ivy Ct</div>
            <span class="locality">Colorado Springs</span>,
            <span class="region">CO</span>,
            <span class="postal-code">80920</span>
          </div>
        </div>
      </div>
</template>

<script setup>
import Icon from '@/components/Icon.vue'
import {
  MapIcon,
  AccountTieIcon,
  EmailIcon,
  PhoneIcon
} from '@/components/icons'

defineProps({
  small: Boolean,
})
</script>

<style scoped>

.vcard {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  font-size: 1.1em;
  margin-left: 1em;
}

.vcard.small{
  margin-left: 0;
  font-size: 1em;
}

.vcard-section {
  display: flex;
  align-items: center;
  gap: 1em;
  padding: 0.5em;
}

.small .vcard-section{
  gap: 0.5em;
  padding: 0.25em;
}

.email {
  word-break: break-all;
  color: inherit;
}

.adr {
  line-height: 1.2;
}
</style>