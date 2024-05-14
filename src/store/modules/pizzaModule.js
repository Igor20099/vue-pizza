import axios from "axios";

export const pizzaModule = {
  state() {
    return {
      pizzas: [],
    };
  },
  actions: {
    async fetchPizzas({ commit }, storeFilter) {
      axios
        .get("https://6633ca37f7d50bbd9b4aab4a.mockapi.io/pizzas", {
          params: {
            category: storeFilter.categoryId > 0 ? storeFilter.categoryId : "",
            sortBy: storeFilter.sortType.sortQuery,
            order: storeFilter.sortType.order,
          },
        })
        .then((response) => {
          // Handle response
          commit("setPizzas", response.data);
        })
        .catch((err) => {
          // Handle errors
          console.error(err);
        });
    },
  },
  mutations: {
    setPizzas(state, pizzas) {
      state.pizzas = pizzas;
    },
  },
  getters: {
    getPizzas(state) {
      return state.pizzas;
    },
  },
};
