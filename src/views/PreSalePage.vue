<template>
  <TonConnectUIProvider :options="options">
    <FadeInComponent>
      <main>
        <section>
          <h1>Pre-Sale</h1>
          <p>Join our pre-sale rounds and get your DrugNcoin tokens.</p>
          <wallet-connection></wallet-connection>
          <payment-processing></payment-processing>

          <span>My App with Vue UI</span>
          <TonConnectButton />
        </section>
      </main>
    </FadeInComponent>
  </TonConnectUIProvider>
</template>

<script>
import WalletConnection from '../components/WalletConnection.vue'
import PaymentProcessing from '../components/PaymentProcessing.vue'
import FadeInComponent from '../components/FadeInComponent.vue'
import { TonConnectUIProvider, TonConnectButton } from '@townsquarelabs/ui-vue'

export default {
  name: 'PreSalePage',
  components: {
    WalletConnection,
    PaymentProcessing,
    TonConnectUIProvider,
    TonConnectButton,
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
