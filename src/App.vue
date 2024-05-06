<template>
  <div class="wrapper">
    <HeaderComponent />
    <main class="content">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import HeaderComponent from "./components/HeaderComponent.vue";
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #fff;
  width: calc(100vw - 100px);
  margin: 0 auto;
  border-radius: 10px;
  margin-top: 43px;
  margin-bottom: 63px;
  max-width: 1440px;
}

.content {
  padding: 0 65px;
}
</style>
