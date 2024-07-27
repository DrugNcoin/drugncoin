<script setup>
import FadeInComponent from '../components/FadeInComponent.vue'
</script>

<template>
  <FadeInComponent>
    <main>
      <section>
        <h1>{{ $t('home.welcome.title') }}</h1>
        <p>
          <strong>{{ $t('home.welcome.body') }}</strong>
        </p>
      </section>

      <section>
        <h2>{{ $t('home.about.title') }}</h2>
        <p>{{ $t('home.about.body') }}</p>
      </section>

      <section>
        <h2>{{ $t('home.why.title') }}</h2>
        <div>
          <p>
            <strong>{{ $t('home.why.reason1.title') }}</strong>
          </p>
          <ul>
            <li>{{ $t('home.why.reason1.item1') }}</li>
            <li>{{ $t('home.why.reason1.item2') }}</li>
          </ul>
        </div>
        <div>
          <p>
            <strong>{{ $t('home.why.reason2.title') }}</strong>
          </p>
          <ul>
            <li>
              <strong>{{ $t('home.why.reason2.item1') }}</strong>
            </li>
            <li>
              <strong>{{ $t('home.why.reason2.item2') }}</strong>
            </li>
            <li>
              <strong>{{ $t('home.why.reason2.item3') }}</strong>
            </li>
          </ul>
        </div>
        <div>
          <p>
            <strong>{{ $t('home.why.reason3.title') }}</strong>
          </p>
          <ul>
            <li>{{ $t('home.why.reason3.item1') }}</li>
          </ul>
        </div>
        <div>
          <p>
            <strong>{{ $t('home.why.reason4.title') }}</strong>
          </p>
          <ul>
            <li>{{ $t('home.why.reason4.item1') }}</li>
            <li>{{ $t('home.why.reason4.item2') }}</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>{{ $t('home.token_details.title') }}</h2>
        <ul>
          <li>
            <strong>{{ $t('home.token_details.token_name.label') }}</strong>
            {{ $t('home.token_details.token_name.value') }}
          </li>
          <li>
            <strong>{{ $t('home.token_details.total_supply.label') }}</strong>
            {{ $t('home.token_details.total_supply.value') }}
          </li>
          <li>
            <strong>{{ $t('home.token_details.team_reserve.label') }}</strong>
            {{ $t('home.token_details.team_reserve.value') }}
          </li>
          <li>
            <strong>{{ $t('home.token_details.circulating_supply.label') }}</strong>
            {{ $t('home.token_details.circulating_supply.value') }}
          </li>
        </ul>
        <div>
          <p>
            <strong>{{ $t('home.token_details.pre_sale_rounds.label') }}</strong>
          </p>
          <ul>
            <li>
              <strong>{{ $t('home.token_details.pre_sale_rounds.round1.title') }}</strong>
              <ul>
                <li>{{ $t('home.token_details.pre_sale_rounds.round1.price') }}</li>
                <li>{{ $t('home.token_details.pre_sale_rounds.round1.end_date') }}</li>
              </ul>
            </li>
            <li>
              <strong>{{ $t('home.token_details.pre_sale_rounds.round2.title') }}</strong>
              <ul>
                <li>{{ $t('home.token_details.pre_sale_rounds.round2.price') }}</li>
                <li>{{ $t('home.token_details.pre_sale_rounds.round2.end_date') }}</li>
              </ul>
            </li>
            <li>
              <strong>{{ $t('home.token_details.pre_sale_rounds.round3.title') }}</strong>
              <ul>
                <li>{{ $t('home.token_details.pre_sale_rounds.round3.price') }}</li>
                <li>{{ $t('home.token_details.pre_sale_rounds.round3.end_date') }}</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2>{{ $t('home.join.title') }}</h2>
        <p>
          <strong>{{ $t('home.join.steps.get_started') }}</strong>
        </p>
        <ol>
          <li>{{ $t('home.join.steps.step1') }}</li>
          <li>{{ $t('home.join.steps.step2') }}</li>
          <li>{{ $t('home.join.steps.step3') }}</li>
        </ol>
      </section>

      <section>
        <h2>{{ $t('home.stay_connected.title') }}</h2>
        <ul>
          <li>{{ $t('home.stay_connected.social_media') }}</li>
          <li>{{ $t('home.stay_connected.community_discussions') }}</li>
        </ul>
      </section>

      <section>
        <h2>{{ $t('home.contact.title') }}</h2>
        <p>{{ $t('home.contact.body') }}</p>
      </section>

      <footer>
        <p>{{ $t('home.footer.body') }}</p>
      </footer>
    </main>
  </FadeInComponent>
</template>

<script>
export default {
  name: 'HomePage'
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
