<script setup>
import FadeInComponent from '../components/FadeInComponent.vue'
</script>

<template>
  <FadeInComponent>
    <main>
      <section>
        <h1>{{ $t('about.title') }}</h1>
        <p>{{ $t('about.introduction') }}</p>
      </section>

      <section>
        <h2>{{ $t('about.founders.title') }}</h2>
        <p>{{ $t('about.founders.body') }}</p>
      </section>

      <section>
        <h2>{{ $t('about.expertise.title') }}</h2>
        <ul>
          <li>{{ $t('about.expertise.item1') }}</li>
          <li>{{ $t('about.expertise.item2') }}</li>
          <li>{{ $t('about.expertise.item3') }}</li>
          <li>{{ $t('about.expertise.item4') }}</li>
          <li>{{ $t('about.expertise.item5') }}</li>
        </ul>
      </section>

      <section>
        <h2>{{ $t('about.mission.title') }}</h2>
        <p>{{ $t('about.mission.body') }}</p>
      </section>
    </main>
  </FadeInComponent>
</template>

<script>
export default {
  name: 'AboutPage'
};
</script>

<style scoped>
main {
  padding-top: var(--section-top-margin)
}

@media (min-width: 1024px) {
  main {
    padding: 0
  }
}
</style>
