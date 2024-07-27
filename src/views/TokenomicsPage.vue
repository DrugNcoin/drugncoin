<script setup>
import FadeInComponent from '../components/FadeInComponent.vue'
</script>

<template>
  <FadeInComponent>
    <main>
      <h1>Tokenomics</h1>
      <p>Total Supply: 100 billion tokens</p>
      <p>Reserved for Team: 10 billion tokens</p>
      <p>Circulating Supply: 90 billion tokens</p>
    </main>
  </FadeInComponent>
</template>

<script>
export default {
  name: 'TokenomicsPage'
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
