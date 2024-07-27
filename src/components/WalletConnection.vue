<template>
  <div>
    <TonConnectButton />
    <div>User-friendly address: {{ userFriendlyAddress }}</div>
    <div>Raw address: {{ rawAddress }}</div>
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
/* Add styles specific to WalletConnection here */
</style>
