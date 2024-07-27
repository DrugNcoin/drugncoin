<script setup>
import FadeInComponent from '../components/FadeInComponent.vue'
</script>

<template>
  <FadeInComponent>
    <main>
      <h1>Referral Program</h1>
      <p>Invite friends and earn DrugNcoin tokens.</p>
      <referral-system></referral-system>
    </main>
  </FadeInComponent>
</template>

<script>
import ReferralSystem from '../components/ReferralSystem.vue';

export default {
  name: 'ReferralProgramPage',
  components: {
    ReferralSystem
  }
};
</script>

<style scoped>
main {
  padding-top: 2rem
}

@media (min-width: 1024px) {
  main {
    padding: 5rem 0 5rem 0
  }
}
</style>
