<template>
  <div>
    <h2>Referral System</h2>
    <form @submit.prevent="submitReferral">
      <label for="referralId">Referral ID:</label>
      <input type="text" v-model="referralId" required />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ReferralSystem',
  data() {
    return {
      referralId: ''
    };
  },
  methods: {
    async submitReferral() {
      try {
        const response = await axios.post('/api/referral', { referralId: this.referralId });
        console.log('Referral submitted:', response.data);
      } catch (error) {
        console.error('Referral submission failed:', error);
      }
    }
  }
};
</script>

<style scoped>
/* Add styles specific to ReferralSystem here */
</style>
