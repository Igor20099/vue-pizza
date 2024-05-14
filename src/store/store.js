import { createStore } from "vuex";
import { filterModule } from "./modules/filterModule";
import { pizzaModule } from "./modules/pizzaModule";
import { cartModule } from "./modules/cartModule";

export const store = createStore({
  modules: {
    filter: filterModule,
    pizza: pizzaModule,
    cart: cartModule,
  },
});
