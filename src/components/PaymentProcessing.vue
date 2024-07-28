<template>
  <div>
    <h2>{{ $t('presale.payment.title') }}</h2>
    <form @submit.prevent="processPayment">
      <label for="amount">{{ $t('presale.payment.amount') }}:</label>
      <input type="number" v-model="amount" required />
      <button type="submit">{{ $t('presale.payment.pay') }}</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PaymentProcessing',
  data() {
    return {
      amount: 0
    }
  },
  methods: {
    async processPayment() {
      try {
        const response = await axios.post('/api/payment', { amount: this.amount })
        console.log('Payment successful:', response.data)
      } catch (error) {
        console.error('Payment failed:', error)
      }
    }
  }
}
</script>

<style scoped>
/* Add styles specific to PaymentProcessing here */
</style>
