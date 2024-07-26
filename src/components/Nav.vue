<template>
  <nav>
    <ul>
      <li>
        <RouterLink :to="Tr.i18nRoute({ name: 'home' })">{{ $t("nav.home") }}</RouterLink>
      </li>
      <li>
        <RouterLink :to="Tr.i18nRoute({ name: 'presale' })">{{ $t("nav.presale") }}</RouterLink>
      </li>
      <li>
        <RouterLink :to="Tr.i18nRoute({ name: 'referral' })">{{ $t("nav.referral") }}</RouterLink>
      </li>
      <li>
        <RouterLink :to="Tr.i18nRoute({ name: 'roadmap' })">{{ $t("nav.roadmap") }}</RouterLink>
      </li>
      <li>
        <RouterLink :to="Tr.i18nRoute({ name: 'tokenomics' })">{{ $t("nav.tokenomics") }}</RouterLink>
      </li>
      <li>
        <RouterLink :to="Tr.i18nRoute({ name: 'about' })">{{ $t("nav.about") }}</RouterLink>
      </li>
    </ul>
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
