<template>
  <div class="hello">
    <img alt="Vue logo" class="logo" src="@/assets/logo-mobile.webp" />

    <div class="greetings">
      <h1 class="green">{{ $t("hello.title") }}</h1>
      <p>{{ $t("hello.body") }}</p>
    </div>
  </div>
</template>

<style scoped>
.hello {
  display: grid;
  grid-template-columns: 125px auto;

  img {
    min-width: 125px;
    width: 125px;
    margin-left: -6px;
  }

  .greetings {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    min-width: 175px;
    margin-top: 1rem;
  }
}

h1 {
  font-weight: bolder;
  font-size: 1.5rem;
  position: relative;
  top: -10px;
}

.greetings h1,
.greetings h3 {
  text-align: left;
}


@media (min-width: 1024px) {
  .hello {
    display: flex;
    justify-content: center;

    .greetings {
      display: block;
      text-align: center;
    }

    img {
      display: none;
    }
  }

  h1 {
    font-size: 2.6rem;
  }

  h3 {
    font-size: 1.2rem;
  }

  .greetings h1,
  .greetings h3 {
    text-align: center;
  }


}
</style>
