<template>
  <div class="search">
    <img
      src="../assets/img/search.svg"
      alt="search"
      width="16"
      class="image-search"
    />
    <input
      type="text"
      class="input"
      placeholder="Поиск пицц..."
      v-model="searchValue"
      ref="focusInput"
    />
    <img
      src="../assets/img/clear.svg"
      alt="clear"
      width="16"
      class="image-clear"
      @click.prevent="handleClearSearch"
      v-show="searchValue"
    />
  </div>
</template>

<script setup>
//TODO: Добавить lodash.debounce для оптимизации поиска
import { ref, watch } from "vue";
import { useStore } from "vuex";
const searchValue = ref("");
const focusInput = ref(null);
const store = useStore();

const handleClearSearch = () => {
  focusInput.value.focus();
  searchValue.value = "";
};
watch(
  searchValue,
  () => {
    console.log("111");
    store.commit("setSearchQuery", searchValue.value);
  },
  { deep: true }
);
</script>

<style scoped lang="scss">
.search {
  position: relative;
  margin: 0 auto;
  .input {
    padding: 6px 20px;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.4);
    width: 200px;
    transition: all 0.3s ease-in-out;

    &:focus {
      opacity: 0.7;
      width: 300px;
    }
  }

  .image-search {
    position: absolute;
    top: 6px;
    left: 4px;
    opacity: 0.6;
  }

  .image-clear {
    position: absolute;
    top: 6px;
    right: 4px;
    opacity: 0.6;
    cursor: pointer;
  }
}
</style>
