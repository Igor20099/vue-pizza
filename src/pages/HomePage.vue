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
import { useStore, mapState, mapGetters } from "vuex";

const pizzas = ref([]);
const store = useStore();
const categoryId = computed(() => store.getters.getCategoryId);

watch(categoryId, () => {
  axios
    .get("https://6633ca37f7d50bbd9b4aab4a.mockapi.io/pizzas", {
      params: {
        category:
          store.state.filter.categoryId > 0
            ? store.state.filter.categoryId
            : "",
        sortBy: "rating",
        order: "desc",
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
});

onMounted(() => {
  axios
    .get("https://6633ca37f7d50bbd9b4aab4a.mockapi.io/pizzas", {
      params: {
        category:
          store.state.filter.categoryId > 0
            ? store.state.filter.categoryId
            : "",
        sortBy: "raiting",
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
