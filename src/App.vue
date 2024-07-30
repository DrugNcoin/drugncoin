<template>
  <TonConnectUIProvider :options="options" custom>
    <div class="presale-progress-wrapper">
      <PreSaleProgressBar />
    </div>
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
import PreSaleProgressBar from '@/components/PreSaleProgressBar.vue'
import { TonConnectUIProvider } from '@townsquarelabs/ui-vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    NavMenu,
    LanguageSwitcher,
    PreSaleProgressBar,
    TonConnectUIProvider
  },
  setup() {
    const options = {
      manifestUrl: 'https://drugncoin.github.io/drugncoin/tonconnect-manifest.json'
    }
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

.presale-progress-wrapper {
  grid-column: 1 / -1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  h2 {
    flex-shrink: 0;
    white-space: nowrap;
    margin-right: 2rem;
  }

  > div {
    flex-grow: 1;
  }
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
