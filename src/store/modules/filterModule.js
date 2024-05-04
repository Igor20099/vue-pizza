export const filterModule = {
  state() {
    return {
      categoryId: 0,
      sortType: {
        sortName: "Популярности",
        sortParam: "rating",
        order: "desc",
      },
    };
  },

  mutations: {
    setCategoryId(state, id) {
      state.categoryId = id;
      console.log(id);
    },
    setSortType(state, sortType) {
      state.sortType = sortType;
    },
  },
  getters: {
    getCategoryId(state) {
      return state.categoryId;
    },
    getSortType(state) {
      return state.sortType;
    },
  },
};
