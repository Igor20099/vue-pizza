export const filterModule = {
  state() {
    return {
      categoryId: 0,
      sortType: {
        sortName: "Популярности",
        sortParam: "rating",
        order: "desc",
      },
      searchQuery: "",
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
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
  },
  getters: {
    getCategoryId(state) {
      return state.categoryId;
    },
    getSortType(state) {
      return state.sortType;
    },
    getSearchQuery(state) {
      return state.searchQuery;
    },
  },
};
