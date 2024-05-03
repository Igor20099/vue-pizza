export const filterModule = {
  state() {
    return {
      categoryId: 0,
    };
  },

  mutations: {
    setCategoryId(state, id) {
      state.categoryId = id;
      console.log(id);
    },
  },
  getters: {
    getCategoryId(state) {
      return state.categoryId;
    },
  },
};
