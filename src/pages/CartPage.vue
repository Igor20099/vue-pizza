<template>
  <CartComponent v-if="$store.state.cart.cartPizzas.length > 0" />
  <CartEmptyComponent v-else />
</template>

<script setup>
import CartEmptyComponent from "../components/CartEmptyComponent.vue";
import CartComponent from "../components/CartComponent.vue";
</script>

<style scoped lang="scss"></style>
