<script setup>
import FadeInComponent from '../components/FadeInComponent.vue'
</script>

<template>
  <FadeInComponent>
    <main>
      <section>
        <h1>{{ $t('roadmap.title') }}</h1>
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

<script>
export default {
  name: 'RoadmapPage',
  data() {
    return {
      quarters: [
        {
          title: this.$t('roadmap.q3_2024.title'),
          events: [
            this.$t('roadmap.q3_2024.event1'),
            this.$t('roadmap.q3_2024.event2'),
            this.$t('roadmap.q3_2024.event3')
          ]
        },
        {
          title: this.$t('roadmap.q4_2024.title'),
          events: [
            this.$t('roadmap.q4_2024.event1'),
            this.$t('roadmap.q4_2024.event2')
          ]
        },
        {
          title: this.$t('roadmap.q1_2025.title'),
          events: [
            this.$t('roadmap.q1_2025.event1'),
            this.$t('roadmap.q1_2025.event2')
          ]
        },
        {
          title: this.$t('roadmap.q2_2025.title'),
          events: [
            this.$t('roadmap.q2_2025.event1'),
            this.$t('roadmap.q2_2025.event2')
          ]
        },
        {
          title: this.$t('roadmap.q3_2025.title'),
          events: [
            this.$t('roadmap.q3_2025.event1'),
            this.$t('roadmap.q3_2025.event2')
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
main {
  padding-top: var(--section-top-margin)
}

@media (min-width: 1024px) {
  main {
    padding: 0
  }
}
</style>
