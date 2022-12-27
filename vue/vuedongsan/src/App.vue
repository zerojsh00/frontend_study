<template>
  <div>
    <Menu></Menu>
    <Discount></Discount>
    <Modal
      v-bind:oneroom="oneroom"
      v-bind:isModalOpened="isModalOpened"
      v-bind:pageIdx="pageIdx"
      @closeModal="closeModal"
    ></Modal>
    <Card v-bind:oneroom="oneroom" @openModal="openModal($event)"></Card>
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
      oneroom: oneroom,
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
</style>
