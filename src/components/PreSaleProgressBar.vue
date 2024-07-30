// idea and code taken from: https://www.youtube.com/watch?v=OARXYxZbAUk
// CodePen: https://codepen.io/manuelscholzyt/pen/poKZQGz

<template>
    <div class="heading">
        <h1>Pre-sale 1-st round progress</h1>
        <!-- <span>1.000.000 DRUGN TOTAL. 550.000 BOUGHT</span> -->
    </div>
</template>

<script>
import Tr from '@/i18n/translation'

export default {
    setup() {
        return { Tr }
    },
    computed: {
        home_btn_title() {
            return `--content: '${this.$t('nav.home')}';`
        }
    }
}
</script>

<style scoped>
.heading {
    position: relative;
    background-image: linear-gradient(65deg,
            var(--btn-color) 0%,
            var(--btn-color) 55%,
            var(--content-section-header-color) 55%);
    border: none;
    border-radius: 4px;
}

h1 {
    font-size: 1.5em;
    text-align: center;

    background-image: linear-gradient(65deg, white 0%, white 55%, rgb(177, 167, 167) 55%);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
}

h1:before {
    content: '';
    width: 0px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 55%;
    background-color: rgb(42, 146, 47);
    box-shadow: 3px 3px 10px white;
    transform: skew(25deg) scale(0.9);
}

h1 span {
    display: block;
}
</style>
