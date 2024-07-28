<script setup>
import FadeInComponent from '../components/FadeInComponent.vue'
</script>

<template>
  <FadeInComponent>
    <main>
      <section>
        <h1>{{ $t('referral.title') }}</h1>
        <p>{{ $t('referral.body') }}</p>
        <referral-system></referral-system>
      </section>
    </main>
  </FadeInComponent>
</template>

<script>
import ReferralSystem from '../components/ReferralSystem.vue'

export default {
  name: 'ReferralProgramPage',
  components: {
    ReferralSystem
  }
}
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
