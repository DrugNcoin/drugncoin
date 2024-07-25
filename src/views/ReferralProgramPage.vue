<template>
  <div>
    <h1>Referral Program</h1>
    <p>Invite friends and earn DrugNcoin tokens.</p>
    <referral-system></referral-system>
  </div>
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
/* Add styles specific to ReferralProgramPage here */
</style>