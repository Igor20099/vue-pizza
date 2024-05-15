<template>
  <li class="pizza">
    <div class="info">
      <img :src="pizza.imageUrl" alt="" class="img" />
      <div class="text">
        <h3>{{ pizza.title }}</h3>
        <p>{{ pizza.types }}, {{ pizza.size }} см.</p>
      </div>
    </div>
    <div class="count-container">
      <button class="btn btn-minus">-</button>
      <p class="count">{{ pizza.count }}</p>
      <button class="btn btn-plus">+</button>
    </div>
    <p class="price">
      <b>{{ pizza.price }} ₽</b>
    </p>
    <button class="btn-delete" @click.prevent="handleDeletePizza(pizza)">
      <img src="../assets/img/delete-pizza.svg" alt="" />
    </button>
  </li>
</template>

<script setup>
import { useStore } from "vuex";

defineProps({
  pizza: Object,
});

const store = useStore();

const handleDeletePizza = (pizza) => {
  store.commit("deletePizza", pizza.id);
};
</script>

<style scoped lang="scss">
.pizza {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 821px;

  .img {
    width: 80px;
  }

  .info {
    display: flex;
    justify-content: start;
    align-items: center;
    width: 480px;
  }

  .count-container {
    display: flex;
    align-items: center;

    .btn {
      background-color: transparent;
      padding: 6px 10px;
      border-radius: 50%;
      cursor: pointer;
      color: #fe5f1e;
      border: 2px solid #fe5f1e;
      font-weight: 700;
    }

    .count {
      font-weight: 700;
      margin: 0 12px;
    }
  }

  .btn-delete {
    background-color: transparent;
    border: 1px solid #d7d7d7;
    padding: 6px 10px;
    border-radius: 50%;
    cursor: pointer;
  }
}
</style>
