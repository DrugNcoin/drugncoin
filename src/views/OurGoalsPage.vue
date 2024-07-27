<script setup>
import FadeInComponent from '../components/FadeInComponent.vue'
</script>

<template>
  <FadeInComponent>
    <main>
      <section>
        <h1>{{ $t('our_goals.title') }}</h1>
        <p>{{ $t('our_goals.introduction') }}</p>
      </section>

      <section>
        <h2>{{ $t('our_goals.vision.title') }}</h2>
        <p>{{ $t('our_goals.vision.body') }}</p>
      </section>

      <section>
        <h2>{{ $t('our_goals.blocker.title') }}</h2>
        <p>{{ $t('our_goals.blocker.body') }}</p>
      </section>

      <section>
        <h2>{{ $t('our_goals.solution.title') }}</h2>
        <p>{{ $t('our_goals.solution.body') }}</p>
      </section>

      <section>
        <h2>{{ $t('our_goals.foundation.title') }}</h2>
        <p>{{ $t('our_goals.foundation.body') }}</p>
      </section>
    </main>
  </FadeInComponent>
</template>

<script>
export default {
  name: 'OurGoalsPage'
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
