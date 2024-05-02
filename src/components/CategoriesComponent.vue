<template>
  <div class="categories">
    <ul class="list">
      <li
        @click.prevent="activeIndex = i"
        class="item"
        :class="activeIndex === i ? 'active' : ''"
        :key="i"
        v-for="(category, i) in categories"
      >
        {{ category }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
const categories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const activeIndex = ref(0);
</script>

<style scoped lang="scss">
.list {
  display: flex;
  list-style-type: none;

  .item {
    margin-right: 8px;
    background-color: #f9f9f9;
    padding: 16px 32px;
    border-radius: 24px;
    font-weight: 700;
    cursor: pointer;
  }
  .active {
    background-color: #282828;
    color: #fff;
  }
}
</style>
