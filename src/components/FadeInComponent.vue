<template>
  <div class="fadeInUp-animation">
    <slot></slot>
  </div>
</template>

<style scoped>
@keyframes fadeInUp {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.fadeInUp-animation {
  animation: 0.5s fadeInUp ease-in;
}
</style>
