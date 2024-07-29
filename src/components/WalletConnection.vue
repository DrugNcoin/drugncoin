<template>
  <div class="wallet-connect-wrapper">
    <TonConnectButton className="ton-connect-wallet-button" :styles="{}" />
    <div v-if="wallet" class="address-wrapper">
      <div>
        <strong>{{ $t('presale.connect-wallet.user-friendly-address') }}:</strong>
        {{ userFriendlyAddress }}
      </div>
      <div>
        <strong>{{ $t('presale.connect-wallet.raw-address') }}:</strong> {{ rawAddress }}
      </div>
    </div>
    <div v-if="wallet" class="address-wrapper">
      <div><strong>Connected wallet:</strong> {{ wallet.name }}</div>
      <div><strong>Device:</strong> {{ wallet.device.appName }}</div>
    </div>
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
  props: {
    wallet: {
      type: Object,
      required: false
    }
  },
  setup() {
    const userFriendlyAddress = useTonAddress()
    const rawAddress = useTonAddress(false)

    return {
      userFriendlyAddress,
      rawAddress
    }
  }
}
</script>

<style>
.wallet-connect-wrapper {
  word-wrap: break-word;

  .address-wrapper {
    padding: 0 var(--content-section-content-padding-mobile);
  }

  > div {
    margin-top: 1rem;
  }

  strong {
    font-weight: bold;
  }
}

#ton-connect-button {
  width: 100% !important;

  tc-root > div,
  tc-root button {
    width: 100% !important;
  }

  tc-root button {
    background-color: #913723;
    justify-content: center;

    > div {
      color: white;
    }

    svg path {
      fill: white !important;
    }
  }
}

@media (min-width: 1024px) {
  .wallet-connect-wrapper .address-wrapper {
    padding: 0 var(--content-section-content-padding);
  }
}
</style>
