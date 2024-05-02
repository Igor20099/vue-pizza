<template>
  <div class="wrapper">
    <HeaderComponent />
    <main>
      <div class="content-top">
        <CategoriesComponent />
        <sortComponent />
      </div>
    </main>
  </div>
</template>

<script setup>
import HeaderComponent from "./components/HeaderComponent.vue";
import CategoriesComponent from "./components/CategoriesComponent.vue";
import SortComponent from "./components/SortComponent.vue";
</script>

<style scoped lang="scss">
.wrapper {
  padding: 20px;
  background-color: #fff;
  width: calc(100vw - 100px);
  margin: 0 auto;
  border-radius: 10px;
  margin-top: 43px;
}

.content-top {
  display: flex;
}
</style>
