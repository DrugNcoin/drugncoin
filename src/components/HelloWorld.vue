<template>
  <div class="hello">
    <img alt="Vue logo" class="logo" src="@/assets/logo-mobile.webp" width="200" />

    <div class="greetings">
      <h1 class="green">{{ $t("hello.title") }}</h1>
      <h3>{{ $t("hello.body") }}</h3>
    </div>
  </div>
</template>

<style scoped>
.hello {
  display: flex;
  justify-content: flex-start;

  flex-direction: row;
  align-items: center;
  align-content: center;
}

h1 {
  font-weight: bolder;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: left;
  margin-left: 2rem;
}

@media (min-width: 1024px) {
  .hello {
    justify-content: center;

    img {
      display: none;
    }
  }

  .greetings h1,
  .greetings h3 {
    text-align: center;
    margin-left: 0;
  }
}
</style>
