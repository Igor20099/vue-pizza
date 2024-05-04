<template>
  <div class="sort">
    <img class="img" src="../assets/img/arrow_top.svg" />
    <p class="text">
      Сортировка по:
      <span
        @click.prevent="isVisiblePopup = !isVisiblePopup"
        class="sort-category"
        >{{ store.state.filter.sortType.sortName }}</span
      >
    </p>
    <ul class="popup" :class="isVisiblePopup ? 'visible' : ''">
      <li
        @click.prevent="handleSelectSort(i)"
        :key="i"
        class="item"
        :class="activeIndex === i ? 'active' : ''"
        v-for="(sortName, i) in sortNames"
      >
        {{ sortName }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const isVisiblePopup = ref(false);
const sortNames = ["Популярности", "Цене", "Алфавиту"];
const activeIndex = ref(0);
const store = useStore();
const sortTypes = [
  { sortName: "Популярности", sortQuery: "rating", order: "desc" },
  { sortName: "Цене", sortQuery: "price", order: "asc" },
  { sortName: "Алфавиту", sortQuery: "title", order: "asc" },
];

const handleSelectSort = (i) => {
  activeIndex.value = i;
  store.commit("setSortType", sortTypes[i]);
  isVisiblePopup.value = false;
};
</script>

<style scoped lang="scss">
.sort {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;

  .img {
    width: 10px;
    height: 6px;
    margin-right: 6px;
  }

  .sort-category {
    color: #fe5f1e;
    border-bottom: 1px dotted #fe5f1e;
    cursor: pointer;
  }

  .popup {
    display: none;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    right: 0;
    top: 46px;
    background: #ffffff;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.09);
    border-radius: 10px;
    overflow: hidden;
    padding: 10px 0;
    width: 160px;
    list-style-type: none;

    .item {
      padding: 16px 16px;
      cursor: pointer;
    }

    .active {
      color: #fe5f1e;
      background-color: #fe5d1e10;
    }
  }

  .visible {
    display: flex;
  }
}
</style>
