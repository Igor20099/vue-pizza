<template>
  <div class="wrapper">
    <HeaderComponent />
  </div>
</template>

<script setup>
import HeaderComponent from "./components/HeaderComponent.vue";
</script>

<style scoped lang="scss">
.wrapper {
  background-color: #fff;
  width: calc(100vw - 100px);
  margin: 0 auto;
  border-radius: 10px;
}
</style>
