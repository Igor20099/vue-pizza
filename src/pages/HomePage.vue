<template>
  <div class="content-top">
    <CategoriesComponent />
    <sortComponent />
  </div>
  <PizzaListComponent />
</template>

<script setup>
import PizzaListComponent from "../components/PizzaListComponent.vue";
import SortComponent from "../components/SortComponent.vue";
import CategoriesComponent from "../components/CategoriesComponent.vue";
import { computed, onMounted, ref, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();
const categoryId = computed(() => store.getters.getCategoryId);
const sortType = computed(() => store.getters.getSortType);
const searchQuery = computed(() => store.getters.getSearchQuery);

watch(
  [categoryId, sortType, searchQuery],
  () => {
    store.dispatch("fetchPizzas", store.state.filter);
  },
  { deep: true }
);

onMounted(() => {
  store.dispatch("fetchPizzas", store.state.filter);
});
</script>

<style scoped lang="scss">
.content-top {
  display: flex;
}
</style>
