<template>
  <FadeInComponent>
    <main>
      <section>
        <h1>{{ $t('roadmap.title') }}</h1>
        <p>{{ $t('roadmap.body') }}</p>
        <div v-for="(quarter, index) in quarters" :key="index">
          <h2>{{ quarter.title }}</h2>
          <ul>
            <li v-for="(event, index) in quarter.events" :key="index">{{ event }}</li>
          </ul>
        </div>
      </section>
    </main>
  </FadeInComponent>
</template>

<script setup>
import FadeInComponent from '../components/FadeInComponent.vue'

import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const quarters = computed(() => [
  {
    title: t('roadmap.q3_2024.title'),
    events: [t('roadmap.q3_2024.event1'), t('roadmap.q3_2024.event2'), t('roadmap.q3_2024.event3')]
  },
  {
    title: t('roadmap.q4_2024.title'),
    events: [t('roadmap.q4_2024.event1'), t('roadmap.q4_2024.event2')]
  },
  {
    title: t('roadmap.q1_2025.title'),
    events: [t('roadmap.q1_2025.event1'), t('roadmap.q1_2025.event2')]
  },
  {
    title: t('roadmap.q2_2025.title'),
    events: [t('roadmap.q2_2025.event1'), t('roadmap.q2_2025.event2')]
  },
  {
    title: t('roadmap.q3_2025.title'),
    events: [t('roadmap.q3_2025.event1'), t('roadmap.q3_2025.event2')]
  }
])
</script>

<style scoped>
main {
  padding-top: var(--section-top-margin);
}

@media (min-width: 1024px) {
  main {
    padding: 0;
  }
}
</style>
