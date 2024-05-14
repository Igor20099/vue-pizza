<template>
  <div class="pizzas">
    <h2 class="title">Все пиццы</h2>
    <div class="container">
      <PizzaItemComponent
        :key="pizza.id"
        v-for="pizza in $store.state.pizza.pizzas"
        :pizza="pizza"
      />
    </div>
  </div>
</template>

<script setup>
import PizzaItemComponent from "./PizzaItemComponent.vue";
</script>

<style scoped lang="scss">
.pizzas {
  margin-bottom: 96px;
}
.title {
  font-size: 36px;
  font-weight: 900;
  margin-top: 32px;
  margin-bottom: 36px;
}

.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-row-gap: 65px;
}
</style>
