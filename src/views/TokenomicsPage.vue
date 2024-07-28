<script setup>
import FadeInComponent from '../components/FadeInComponent.vue'
</script>

<template>
  <FadeInComponent>
    <main>
      <section>
        <h1>{{ $t('tokenimics.title') }}</h1>
        <p>
          {{ $t('tokenimics.total') }}: 100 {{ $t('tokenimics.billion') }}
          {{ $t('tokenimics.tokens') }}
        </p>
        <p>
          {{ $t('tokenimics.team-reserved') }}: 10 {{ $t('tokenimics.billion') }}
          {{ $t('tokenimics.tokens') }}
        </p>
        <p>
          {{ $t('tokenimics.circulating') }}: 90 {{ $t('tokenimics.billion') }}
          {{ $t('tokenimics.tokens') }}
        </p>
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
