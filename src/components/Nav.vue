<template>
  <nav>
    <RouterLink :to="Tr.i18nRoute({ name: 'home' })">{{ $t("nav.home") }}</RouterLink>
    <RouterLink :to="Tr.i18nRoute({ name: 'goals' })">{{ $t("nav.goals") }}</RouterLink>
    <RouterLink :to="Tr.i18nRoute({ name: 'presale' })">{{ $t("nav.presale") }}</RouterLink>
    <RouterLink :to="Tr.i18nRoute({ name: 'referral' })">{{ $t("nav.referral") }}</RouterLink>
    <RouterLink :to="Tr.i18nRoute({ name: 'roadmap' })">{{ $t("nav.roadmap") }}</RouterLink>
    <RouterLink :to="Tr.i18nRoute({ name: 'tokenomics' })">{{ $t("nav.tokenomics") }}</RouterLink>
    <RouterLink :to="Tr.i18nRoute({ name: 'about' })">{{ $t("nav.about") }}</RouterLink>
  </nav>

  <LanguageSwitcher></LanguageSwitcher>
</template>

<script>
import LanguageSwitcher from "@/components/LanguageSwitcher.vue"
import Tr from "@/i18n/translation"

export default {
  components: { LanguageSwitcher },
  setup() {
    return { Tr }
  }
}
</script>

<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
