<template>
  <div class="purchase-form content-section-h-padding">
    <div>
      <input type="number" v-model.number="tonAmount" id="tonAmount" @input="calculateTokens" />
      <label for="tonAmount">TON</label>
    </div>
    <div>{{ calculatedTokens }} DRUGN</div>
    <div>
      <button @click="buyTokens">{{ $t('presale.payment.buy') }}</button>
    </div>
  </div>
</template>

<script>
import { useTonConnectUI } from '@townsquarelabs/ui-vue'

export default {
  name: 'TokenPurchase',
  props: {
    exchangeRate: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      tonAmount: 0,
      calculatedTokens: 0
    }
  },
  methods: {
    calculateTokens() {
      this.calculatedTokens = this.tonAmount / this.exchangeRate
    },
    buyTokens() {
      this.sendTransaction(this.tonAmount)
    }
  },
  setup() {
    /* send transaction config */
    const [tonConnectUI] = useTonConnectUI()

    const myTransaction = (tonAmount) => {
      return {
        validUntil: Math.floor(Date.now() / 1000) + 600, // 60 sec
        messages: [
          {
            address: 'UQDje4nLv3zGN873x9bjDZQSmNteP4SzOaVQoNhFl13rwmep',
            amount: tonAmount * 1000000000
          }
        ]
      }
    }

    const sendTransaction = (tonAmount) => {
      tonConnectUI.sendTransaction(myTransaction(tonAmount))
    }

    return {
      sendTransaction
    }
  }
}
</script>

<style scoped>
.purchase-form {
  font-size: 1.5rem;
  font-weight: 500;

  > div {
    margin-top: 1rem;
  }

  > div:first-child {
    display: flex;
    flex-wrap: nowrap;
  }

  input {
    font-size: 1.5rem;
    width: 100%;
    font-weight: 500;
  }

  label {
    margin-left: 0.5rem;
    font-weight: 500;
  }

  button {
    background-color: var(--content-section-header-color);
    font-size: 1.5rem;
    color: var(--vt-c-white);
    padding: 12px 16px;

    display: inline-block;
    gap: unset;
    align-items: unset;
    justify-content: unset;
    padding: 12px 16px;
    border: none;
    border-radius: 100vh;
    cursor: pointer;
    line-height: 18px;
    transition: transform 0.125s ease-in-out;
  }
}
</style>
