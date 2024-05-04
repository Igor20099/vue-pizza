<template>
  <div class="content-top">
    <CategoriesComponent />
    <sortComponent />
  </div>
  <PizzaListComponent :pizzas="pizzas" />
</template>

<script setup>
import PizzaListComponent from "../components/PizzaListComponent.vue";
import SortComponent from "../components/SortComponent.vue";
import CategoriesComponent from "../components/CategoriesComponent.vue";
import axios from "axios";
import { computed, onMounted, ref, watch } from "vue";
import { useStore } from "vuex";

const pizzas = ref([]);
const store = useStore();
const categoryId = computed(() => store.getters.getCategoryId);
const sortType = computed(() => store.getters.getSortType);

watch(
  [categoryId, sortType],
  () => {
    axios
      .get("https://6633ca37f7d50bbd9b4aab4a.mockapi.io/pizzas", {
        params: {
          category:
            store.state.filter.categoryId > 0
              ? store.state.filter.categoryId
              : "",
          sortBy: store.state.filter.sortType.sortQuery,
          order: store.state.filter.sortType.order,
        },
      })
      .then((response) => {
        // Handle response
        pizzas.value = response.data;
      })
      .catch((err) => {
        // Handle errors
        console.error(err);
      });
  },
  { deep: true }
);

onMounted(() => {
  axios
    .get("https://6633ca37f7d50bbd9b4aab4a.mockapi.io/pizzas", {
      params: {
        category:
          store.state.filter.categoryId > 0
            ? store.state.filter.categoryId
            : "",
        sortBy: store.state.filter.sortType.sortQuery,
        order: store.state.filter.sortType.order,
      },
    })
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
.content-top {
  display: flex;
}
</style>
