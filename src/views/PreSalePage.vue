<template>
  <div>
    <h1>Pre-Sale</h1>
    <p>Join our pre-sale rounds and get your DrugNcoin tokens.</p>
    <wallet-connection></wallet-connection>
    <payment-processing></payment-processing>
  </div>
</template>

<script>
import WalletConnection from '../components/WalletConnection.vue';
import PaymentProcessing from '../components/PaymentProcessing.vue';

export default {
  name: 'PreSalePage',
  components: {
    WalletConnection,
    PaymentProcessing
  }
};
</script>

<style scoped>
/* Add styles specific to PreSalePage here */
</style>