<template>
  <div class="wallet-connect-wrapper">
    <TonConnectButton />
    <div><strong>User-friendly address:</strong> {{ userFriendlyAddress }}</div>
    <div><strong>Raw address:</strong> {{ rawAddress }}</div>
  </div>
</template>

<script>
import { TonConnectButton } from '@townsquarelabs/ui-vue'
import { useTonAddress } from '@townsquarelabs/ui-vue'

export default {
  name: 'WalletConnection',
  components: {
    TonConnectButton
  },
  setup() {
    const userFriendlyAddress = useTonAddress();
    const rawAddress = useTonAddress(false);

    return {
      userFriendlyAddress,
      rawAddress
    }
  }
}
</script>

<style scoped>
.wallet-connect-wrapper {
  word-wrap: break-word;
  padding: 0 0.5rem;

  > div {
    margin-top: 1rem;
  }
  strong {
    font-weight: bold;
  }
}

@media (min-width: 1024px) {
  .wallet-connect-wrapper {
    padding: 0 1rem;
  }
}
</style>
