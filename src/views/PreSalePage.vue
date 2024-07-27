<script setup>
import FadeInComponent from '../components/FadeInComponent.vue'
</script>

<template>
  <FadeInComponent>
    <main>
      <h1>Pre-Sale</h1>
      <p>Join our pre-sale rounds and get your DrugNcoin tokens.</p>
      <wallet-connection></wallet-connection>
      <payment-processing></payment-processing>
    </main>
  </FadeInComponent>
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
main {
  padding-top: 2rem
}

@media (min-width: 1024px) {
  main {
    padding: 5rem 0 5rem 0
  }
}
</style>
