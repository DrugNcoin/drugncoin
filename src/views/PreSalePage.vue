<template>
  <FadeInComponent>
    <main>
      <section>
        <h1>{{ $t('presale.title') }}</h1>
        <p>{{ $t('presale.body') }}</p>
        <h2>{{ $t('presale.connect-wallet.title') }}</h2>
        <wallet-connection :wallet="wallet"></wallet-connection>
        <div v-if="wallet">
          <h2>{{ $t('presale.payment.title') }} <label>1 TON = 666.666 DRUGN</label></h2>
          <TokenPurchase :exchange-rate="0.0015"></TokenPurchase>
        </div>
      </section>
    </main>
  </FadeInComponent>
</template>

<script>
import WalletConnection from '../components/WalletConnection.vue'
import TokenPurchase from '../components/TokenPurchase.vue'
import FadeInComponent from '../components/FadeInComponent.vue'
import { useTonWallet } from '@townsquarelabs/ui-vue'

export default {
  name: 'PreSalePage',
  components: {
    WalletConnection,
    TokenPurchase,
    FadeInComponent
  },
  setup() {
    const wallet = useTonWallet()

    return {
      wallet
    }
  }
}
</script>

<style scoped>
main {
  padding-top: var(--section-top-margin);

  h2 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    label {
      padding-left: 1rem;
      font-size: 70%;
    }
  }
}

@media (min-width: 1024px) {
  main {
    padding: 0;
  }
}
</style>
