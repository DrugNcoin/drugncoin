<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Nav from "@/components/Nav.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld />
      <img alt="Vue logo" class="logo" src="@/assets/logo.png" />
      <Nav />
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  overflow: hidden;
}

.logo {
  display: none;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    display: block;
    margin: 0 2rem 0 0;
    width: 100%;
    height: auto;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
