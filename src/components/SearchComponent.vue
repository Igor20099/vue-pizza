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
      width="24"
      class="image-clear"
      @click.stop="handleClearSearch"
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
    padding: 10px 20px;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.4);
    width: 200px;
    transition: all 0.3s ease-in-out;
    font-size: 16px;

    &:focus {
      opacity: 0.7;
      width: 300px;
    }
  }

  .image-search {
    position: absolute;
    top: 12px;
    left: 4px;
    opacity: 0.6;
  }

  .image-clear {
    position: absolute;
    top: 8px;
    right: 4px;
    opacity: 0.6;
    cursor: pointer;
  }
}
</style>
