<template>
  <div class="load"></div>
</template>
<style lang="scss">
.load {
  margin: 50px auto 0;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: inset 4px 2px 0px 0px rgba(0, 0, 0, 0.6);
  animation: rotating 1s linear infinite;
}
@keyframes rotating {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>