import { createStore } from "vuex";
import { filterModule } from "./modules/filterModule";

export const store = createStore({
  modules: {
    filter: filterModule,
  },
});
