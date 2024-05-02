<template>
  <div class="wrapper">
    <HeaderComponent />
    <main class="content">
      <div class="content-top">
        <CategoriesComponent />
        <sortComponent />
      </div>
      <PizzaListComponent :pizzas="pizzas" />
    </main>
  </div>
</template>

<script setup>
import HeaderComponent from "./components/HeaderComponent.vue";
import CategoriesComponent from "./components/CategoriesComponent.vue";
import SortComponent from "./components/SortComponent.vue";
import PizzaListComponent from "./components/PizzaListComponent.vue";
import axios from "axios";
import { onMounted, ref } from "vue";

const pizzas = ref([]);
onMounted(() => {
  axios
    .get("https://6633ca37f7d50bbd9b4aab4a.mockapi.io/pizzas")
    .then((response) => {
      // Handle response
      pizzas.value = response.data;
      console.log(response);
      console.log(pizzas.value);
    })
    .catch((err) => {
      // Handle errors
      console.error(err);
    });
});
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

.content-top {
  display: flex;
}
</style>
