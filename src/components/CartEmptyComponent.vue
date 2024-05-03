<template>
  <div class="cart-empty">
    <h2 class="title">Корзина пустая 😕</h2>
    <p class="description">
      Вероятней всего, вы не заказывали ещё пиццу. <br />Для того, чтобы
      заказать пиццу, перейди на главную страницу.
    </p>
    <img
      class="image"
      src="../assets/img/shopping-cart.png"
      alt="shoping-cart"
    />
    <button @click.prevent="this.$router.push('/')" class="btn-back">
      Вернуться назад
    </button>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.cart-empty {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    font-size: 32px;
    margin-bottom: 10px;
  }

  .description {
    text-align: center;
    color: #777777;
    margin-bottom: 42px;
  }

  .image {
    width: 280px;
    height: 255px;
    margin-bottom: 30px;
  }

  .btn-back {
    padding: 12px 32px;
    color: #fff;
    background-color: #282828;
    border-radius: 32px;
    cursor: pointer;
    text-align: center;
    margin-bottom: 120px;
    transition: all 0.2s ease-in;
  }

  .btn-back:hover {
    background-color: #474747;
  }
}
</style>
