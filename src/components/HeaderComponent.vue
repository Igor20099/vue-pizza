<template>
  <header class="header">
    <div class="wrapper">
      <img class="logo" src="../assets/img/logo.png" />

      <div class="content">
        <h1 class="title">VUE PIZZA</h1>
        <p class="description">самая вкусная пицца во вселенной</p>
      </div>
    </div>
    <SearchComponent />
    <button @click.prevent="this.$router.push('/cart')" class="btn-cart">
      <span> 500 ₽</span>
      <div class="line"></div>
      <img class="btn-image" src="../assets/img/cart.svg" />
      <span class="count">3</span>
    </button>
  </header>
</template>

<script setup>
import SearchComponent from "./SearchComponent.vue";
</script>

<style scoped lang="scss">
.header {
  margin: 40px 65px 60px 75px;
  display: flex;
  justify-items: center;
  align-items: center;

  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    .logo {
      width: 38px;
      height: 38px;
      margin-right: 8px;
    }

    .content {
      display: flex;
      flex-direction: column;

      .title {
        font-size: 24px;
        margin-left: 16px;
      }

      .description {
        color: #7b7b7b;
      }
    }
  }

  .btn-cart {
    margin-left: auto;
    background-color: #fe5f1e;
    color: #fff;
    padding: 16px 23px;
    border: none;
    cursor: pointer;
    border-radius: 16px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    transition: all 0.4s ease-in-out;

    .count {
      margin-top: 2px;
    }

    .line {
      width: 1px;
      height: 25px;
      background-color: rgba(255, 255, 255, 0.25);
      margin-left: 10px;
      margin-right: 10px;
    }

    .btn-img {
      width: 16px;
      height: 16px;
    }
  }

  .btn-cart:hover {
    background-color: #c94d1c;
  }
}
</style>
