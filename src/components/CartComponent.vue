<template>
  <div class="cart">
    <div class="wrapper">
      <div class="title-container">
        <img src="../assets/img/cart_2.svg" alt="" class="img" />
        <h2>Корзина</h2>
      </div>
      <div class="clear-container">
        <button class="btn">
          <img src="../assets/img/cart-clear.svg" alt="" /><span
            class="btn-text"
            >Очистить корзину</span
          >
        </button>
      </div>
    </div>
    <PizzaCartListComponent />
    <div class="info-container">
      <p class="count">
        Всего пицц: <b>{{ $store.state.cart.count }} шт.</b>
      </p>
      <p class="total-price">
        Сумма заказа:
        <span class="price">{{ $store.state.cart.totalPrice }} ₽</span>
      </p>
    </div>
    <div class="btns">
      <button class="btn-back" @click.prevent="this.$router.push('/')">
        &lt; Вернуться назад
      </button>
      <button class="btn-pay">Оплатить сейчас</button>
    </div>
  </div>
</template>

<script setup>
import PizzaCartListComponent from "./PizzaCartListComponent.vue";
</script>

<style scoped lang="scss">
.cart {
  width: 821px;
  margin: 0 auto;
}
.wrapper {
  display: flex;
  justify-content: space-between;

  .title-container {
    display: flex;
    justify-content: center;
    align-items: center;

    .img {
      margin-right: 7px;
    }
  }

  .clear-container {
    display: flex;

    .btn {
      color: #b6b6b6;
      background-color: transparent;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;

      &-text {
        margin-top: 4px;
      }
    }
  }

  .info-container {
    display: flex;
    justify-content: space-between;

    .price {
      color: #fe5f1e;
    }
  }

  .btns {
    display: flex;
    justify-content: space-between;

    .btn-back {
      background-color: transparent;
      padding: 16px;
      border-radius: 16px;
      color: #d3d3d3;
      border: 1px solid #d3d3d3;
      cursor: pointer;
    }
    .btn-pay {
      background-color: #fe5f1e;
      color: #fff;
      border: none;
      padding: 16px;
      border-radius: 16px;
      cursor: pointer;
    }
  }
}
</style>
