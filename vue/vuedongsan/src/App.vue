<template>
  <div>
    <Menu></Menu>
    <Discount></Discount>
    <button @click="sortAscending">낮은가격순</button>
    <button @click="sortInit">가격순초기화</button>
    <button @click="sortDescending">비싼가격순</button>

    <Transition name="fade">
      <Modal
        v-bind:oneroom="oneroom"
        v-bind:isModalOpened="isModalOpened"
        v-bind:pageIdx="pageIdx"
        @closeModal="closeModal"
      ></Modal>
    </Transition>
    <Card v-bind:oneroom="oneroom_sorted" @openModal="openModal($event)"></Card>
  </div>
</template>

<script>
import oneroom from "./assets/oneroom";
import MenuBar from "./components/Menu.vue";
import ModalWindow from "./components/Modal.vue";
import RoomCard from "./components/Card.vue";
import DiscountCmp from "./components/Discount.vue";

export default {
  name: "App",
  data() {
    return {
      pageIdx: 0,
      isModalOpened: false,
      oneroom: [...oneroom],
      oneroom_sorted: [...oneroom],
    };
  },
  components: {
    Menu: MenuBar,
    Modal: ModalWindow,
    Card: RoomCard,
    Discount: DiscountCmp,
  },
  methods: {
    openModal(pageIdx) {
      this.isModalOpened = true;
      this.pageIdx = pageIdx;
    },
    closeModal() {
      this.isModalOpened = false;
    },
    sortAscending() {
      const sorted = [...this.oneroom].sort((a, b) => a.price - b.price);
      this.oneroom_sorted = sorted;
    },
    sortInit() {
      this.oneroom_sorted = oneroom;
    },
    sortDescending() {
      const sorted = [...this.oneroom].sort((a, b) => b.price - a.price);
      this.oneroom_sorted = sorted;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
