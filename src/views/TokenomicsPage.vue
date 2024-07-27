<script setup>
import FadeInComponent from '../components/FadeInComponent.vue'
</script>

<template>
  <FadeInComponent>
    <main>
      <section>
        <h1>Tokenomics</h1>
        <p>Total Supply: 100 billion tokens</p>
        <p>Reserved for Team: 10 billion tokens</p>
        <p>Circulating Supply: 90 billion tokens</p>
      </section>
    </main>
  </FadeInComponent>
</template>

<script>
export default {
  name: 'TokenomicsPage'
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
