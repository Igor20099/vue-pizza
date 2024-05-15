<template>
  <ul class="pizzas">
    <PizzaCartItemComponent
      :key="pizza.id"
      v-for="pizza in $store.state.cart.cartPizzas"
      :pizza="pizza"
    />
  </ul>
</template>

<script setup>
import PizzaCartItemComponent from "./PizzaCartItemComponent.vue";
</script>

<style scoped lang="scss">
.pizzas {
  display: flex;
  flex-direction: column;
  list-style-type: none;
  justify-content: center;
}
</style>
