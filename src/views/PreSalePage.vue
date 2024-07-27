<script setup>
import FadeInComponent from '../components/FadeInComponent.vue'
</script>

<template>
  <FadeInComponent>
    <main>
      <section>
        <h1>Pre-Sale</h1>
        <p>Join our pre-sale rounds and get your DrugNcoin tokens.</p>
        <wallet-connection></wallet-connection>
        <payment-processing></payment-processing>
      </section>
    </main>
  </FadeInComponent>
</template>

<script>
import WalletConnection from '../components/WalletConnection.vue'
import PaymentProcessing from '../components/PaymentProcessing.vue'

export default {
  name: 'PreSalePage',
  components: {
    WalletConnection,
    PaymentProcessing
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
