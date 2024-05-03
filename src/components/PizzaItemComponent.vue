<template>
  <div class="pizza" v-if="pizza">
    <img class="img" :src="pizza.imageUrl" alt="" />
    <h4 class="title">{{ pizza.title }}</h4>
    <div class="wrapper">
      <!--TODO: инициализировать тип и размер пиццы-->
      <ul class="type">
        <li
          @click.prevent="activeTypeIndex = i"
          :key="i"
          v-for="(pizzaType, i) in pizza.types"
          :class="activeTypeIndex === i ? 'active' : ''"
        >
          {{ typeNames[pizzaType] }}
        </li>
      </ul>
      <ul class="size">
        <li
          @click.prevent="activeSizeIndex = i"
          :key="i"
          v-for="(size, i) in pizza.sizes"
          :class="activeSizeIndex === i ? 'active' : ''"
        >
          {{ size }} см.
        </li>
      </ul>
    </div>
    <div class="price-wrapper">
      <p class="price">от {{ pizza.price }} ₽</p>
      <button class="btn">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
            fill="#EB5A1E"
          />
        </svg>
        Добавить
        <span class="count">0</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const { pizza } = defineProps(["pizza"]);
const typeNames = ["Тонкое", "Традиционное"];
const activeSizeIndex = ref(0);
const activeTypeIndex = ref(0);
</script>

<style scoped lang="scss">
.pizza {
  display: flex;
  flex-direction: column;
  width: 280px;
  justify-content: center;
  align-items: center;
  .img {
    width: 260px;
    height: 260px;
  }

  .title {
    font-size: 20px;
    font-weight: 900;
    letter-spacing: 1%;
    margin-bottom: 20px;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    background-color: #f3f3f3;
    border-radius: 10px;

    .type {
      display: flex;
      list-style-type: none;
      justify-content: center;
      gap: 8px;
      margin-bottom: 4px;
      margin-left: 8px;
      margin-top: 8px;
      width: 280px;

      li {
        padding: 8px;
        flex: 1;
        cursor: pointer;
        font-weight: 600;
        font-size: 14px;
        text-align: center;
      }

      .active {
        background: #ffffff;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
        border-radius: 5px;
        cursor: auto;
      }
    }

    .size {
      display: flex;
      list-style-type: none;
      justify-content: space-between;
      gap: 4px;
      margin-bottom: 8px;
      margin-left: 8px;
      margin-top: 8px;

      li {
        padding: 8px;
        flex: 1;
        cursor: pointer;
        font-weight: 600;
        font-size: 14px;
        text-align: center;
      }
      .active {
        background: #ffffff;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
        border-radius: 5px;
        cursor: auto;
      }
    }
  }
  .price-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    width: 280px;

    .price {
      font-weight: bold;
      font-size: 22px;
      line-height: 27px;
      letter-spacing: 0.015em;
    }

    .btn {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #eb5a1e;
      background-color: #fff;
      border: 1px solid #eb5a1e;
      border-radius: 10px;
      padding: 8px 16px;
      gap: 4px;
      font-weight: 900;
      cursor: pointer;
      transition: all 0.2s ease-in;

      .count {
        color: #fff;
        background-color: #eb5a1e;
        padding: 4px 8px;
        border-radius: 30px;
        text-align: center;
      }
    }
    .btn:hover {
      background-color: #eb5a1e;
      color: #fff;
      path {
        fill: #fff;
      }

      .count {
        color: #eb5a1e;
        background-color: #fff;
      }
    }
  }
}
</style>
