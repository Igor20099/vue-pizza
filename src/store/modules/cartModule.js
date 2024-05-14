export const cartModule = {
  state() {
    return {
      cartPizzas: [],
      count: 0,
      totalPrice: 0,
    };
  },
  mutations: {
    addPizzaToCart(state, pizza) {
      state.cartPizzas.push(pizza);
    },
    setCount(state) {
      state.count = 0;
      state.count = state.cartPizzas.reduce((acc, pizza) => {
        return (acc += pizza.count);
      }, 0);
    },
    addPizzaCount(state, pizza) {
      const pz = state.cartPizzas.find((p) => {
        return pizza.id == p.id;
      });
      pz.count++;
    },
    setTotalPrice(state) {
      state.totalPrice = 0;
      state.totalPrice = state.cartPizzas.reduce((acc, pizza) => {
        return (acc += pizza.price);
      }, 0);
    },
  },
  getters: {
    getCartPizzas(state) {
      return state.cartPizzas;
    },
  },
};
