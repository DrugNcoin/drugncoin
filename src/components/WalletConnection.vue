<template>
  <div>
    <button @click="connectWallet">Connect TON Wallet</button>
    <p v-if="walletAddress">Connected: {{ walletAddress }}</p>
  </div>
</template>

<script>
import Web3 from 'web3'

export default {
  name: 'WalletConnection',
  data() {
    return {
      walletAddress: null
    }
  },
  methods: {
    async connectWallet() {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum)
        try {
          await window.ethereum.enable()
          const accounts = await web3.eth.getAccounts()
          this.walletAddress = accounts[0]
        } catch (error) {
          console.error('User denied account access: ' + error)
        }
      } else {
        console.error('No Ethereum provider detected')
      }
    }
  }
}
</script>

<style scoped>
/* Add styles specific to WalletConnection here */
</style>
