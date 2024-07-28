<template>
  <FadeInComponent>
    <main>
      <section>
        <h1>{{ $t('presale.title') }}</h1>
        <p>{{ $t('presale.body') }}</p>
        <h2>{{ $t('presale.connect-wallet.title') }}</h2>
        <wallet-connection></wallet-connection>
        <payment-processing></payment-processing>
      </section>
    </main>
  </FadeInComponent>
</template>

<script>
import WalletConnection from '../components/WalletConnection.vue'
import PaymentProcessing from '../components/PaymentProcessing.vue'
import FadeInComponent from '../components/FadeInComponent.vue'


export default {
  name: 'PreSalePage',
  components: {
    WalletConnection,
    PaymentProcessing,
    FadeInComponent
  },
  setup() {
    const options = {
      manifestUrl: "https://drugncoin.github.io/drugncoin/tonconnect-manifest.json",
    };
    return {
      options
    }
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
