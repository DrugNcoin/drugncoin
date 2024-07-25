<template>
  <div>
    <h2>Payment Processing</h2>
    <form @submit.prevent="processPayment">
      <label for="amount">Amount (USD):</label>
      <input type="number" v-model="amount" required />
      <button type="submit">Pay</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'PaymentProcessing',
  data() {
    return {
      amount: 0
    };
  },
  methods: {
    async processPayment() {
      try {
        const response = await axios.post('/api/payment', { amount: this.amount });
        console.log('Payment successful:', response.data);
      } catch (error) {
        console.error('Payment failed:', error);
      }
    }
  }
};
</script>

<style scoped>
/* Add styles specific to PaymentProcessing here */
</style>