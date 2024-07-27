<template>
  <nav>
    <RouterLink :to="Tr.i18nRoute({ name: 'home' })" v-slot="{ navigate }" custom>
      <button :style="home_btn_title" @click="navigate">
        <div class="left"></div>{{ $t("nav.home") }}<div class="right"></div>
      </button>
    </RouterLink>
    <RouterLink :to="Tr.i18nRoute({ name: 'goals' })" v-slot="{ navigate }" custom>
      <button :style="goals_btn_title" @click="navigate">
        <div class="left"></div>{{ $t("nav.goals") }}<div class="right"></div>
      </button>
    </RouterLink>
    <RouterLink :to="Tr.i18nRoute({ name: 'presale' })" v-slot="{ navigate }" custom>
      <button :style="presale_btn_title" @click="navigate">
        <div class="left"></div>{{ $t("nav.presale") }}<div class="right"></div>
      </button>
    </RouterLink>
    <RouterLink :to="Tr.i18nRoute({ name: 'referral' })" v-slot="{ navigate }" custom>
      <button :style="referral_btn_title" @click="navigate">
        <div class="left"></div>{{ $t("nav.referral") }}<div class="right"></div>
      </button>
    </RouterLink>
    <RouterLink :to="Tr.i18nRoute({ name: 'roadmap' })" v-slot="{ navigate }" custom>
      <button :style="roadmap_btn_title" @click="navigate">
        <div class="left"></div>{{ $t("nav.roadmap") }}<div class="right"></div>
      </button>
    </RouterLink>
    <RouterLink :to="Tr.i18nRoute({ name: 'tokenomics' })" v-slot="{ navigate }" custom>
      <button :style="tokenomics_btn_title" @click="navigate">
        <div class="left"></div>{{ $t("nav.tokenomics") }}<div class="right"></div>
      </button>
    </RouterLink>
    <RouterLink :to="Tr.i18nRoute({ name: 'about' })" v-slot="{ navigate }" custom>
      <button :style="about_btn_title" @click="navigate">
        <div class="left"></div>{{ $t("nav.about") }}<div class="right"></div>
      </button>
    </RouterLink>
  </nav>

  <LanguageSwitcher></LanguageSwitcher>
</template>

<script>
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";
import Tr from "@/i18n/translation";

export default {
  components: { LanguageSwitcher },
  setup() {
    return { Tr };
  },
  computed: {
    home_btn_title() {
      return `--content: '${this.$t("nav.home")}';`;
    },
    goals_btn_title() {
      return `--content: '${this.$t("nav.goals")}';`;
    },
    presale_btn_title() {
      return `--content: '${this.$t("nav.presale")}';`;
    },
    referral_btn_title() {
      return `--content: '${this.$t("nav.referral")}';`;
    },
    roadmap_btn_title() {
      return `--content: '${this.$t("nav.roadmap")}';`;
    },
    tokenomics_btn_title() {
      return `--content: '${this.$t("nav.tokenomics")}';`;
    },
    about_btn_title() {
      return `--content: '${this.$t("nav.about")}';`;
    }
  }
};
</script>

<style scoped>
nav {
  margin-top: var(--section-top-margin);
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
}

button {
  margin: 0 1rem 1rem 0;
  position: relative;
  padding: 5px 10px;
  border: none;
  background: none;
  cursor: pointer;

  font-family: "Source Code Pro";
  font-weight: 900;
  text-transform: uppercase;
  font-size: 3vw;
  color: var(--text-color);

  background-color: var(--btn-color);
  box-shadow: var(--shadow-color) 2px 2px 22px;
  border-radius: 4px;
  z-index: 0;
  overflow: hidden;
}

button:focus {
  outline-color: transparent;
  box-shadow: var(--btn-color) 2px 2px 22px;
}

.right::after,
button::after {
  content: var(--content);
  display: block;
  position: absolute;
  white-space: nowrap;
  padding: 35px 30px;
  pointer-events: none;
}

button::after {
  font-weight: 200;
  top: -30px;
  left: -20px;
}

.right,
.left {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
}

.right {
  left: 66%;
}

.left {
  right: 66%;
}

.right::after {
  top: -30px;
  left: calc(-66% - 20px);

  background-color: var(--bg-color);
  color: transparent;
  transition: transform .4s ease-out;
  transform: translate(0, -90%) rotate(0deg)
}

button:hover .right::after {
  transform: translate(0, -47%) rotate(0deg)
}

button .right:hover::after {
  transform: translate(0, -50%) rotate(-7deg)
}

button .left:hover~.right::after {
  transform: translate(0, -50%) rotate(7deg)
}

/* bubbles */
button::before {
  content: '';
  pointer-events: none;
  opacity: .6;
  background:
    radial-gradient(circle at 20% 35%, transparent 0, transparent 2px, var(--text-color) 3px, var(--text-color) 4px, transparent 4px),
    radial-gradient(circle at 75% 44%, transparent 0, transparent 2px, var(--text-color) 3px, var(--text-color) 4px, transparent 4px),
    radial-gradient(circle at 46% 52%, transparent 0, transparent 4px, var(--text-color) 5px, var(--text-color) 6px, transparent 6px);

  width: 100%;
  height: 300%;
  top: 0;
  left: 0;
  position: absolute;
  animation: bubbles 5s linear infinite both;
}

@keyframes bubbles {
  from {
    transform: translate();
  }

  to {
    transform: translate(0, -66.666%);
  }
}


@media (min-width: 1024px) {
  nav {
    justify-content: center;
  }

  button {
    font-size: 18px;
  }
}
</style>
