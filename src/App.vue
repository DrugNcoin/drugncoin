<template>
  <TonConnectUIProvider :options="options" custom>
    <div class="full-size-column">
      <LanguageSwitcher></LanguageSwitcher>
    </div>
    <header>
      <div class="wrapper">
        <HelloWorld />
        <img alt="Vue logo" class="logo" src="@/assets/logo.png" />
        <NavMenu />
      </div>
    </header>

    <RouterView />
  </TonConnectUIProvider>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NavMenu from '@/components/NavMenu.vue'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import { TonConnectUIProvider } from '@townsquarelabs/ui-vue'

export default {
  name: 'PreSalePage',
  components: {
    HelloWorld,
    NavMenu,
    LanguageSwitcher,
    TonConnectUIProvider
  },
  setup() {
    const options = {
      manifestUrl: "https://drugncoin.github.io/drugncoin/tonconnect-manifest.json",
    };
    return {
      options
    }
  }
}
</script>

<style scoped>
header {
  line-height: 1.5;
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
    justify-content: center;
  }
}
</style>
