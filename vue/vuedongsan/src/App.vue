<template>
  <div>
    <Menu></Menu>
    <Modal
      v-bind:oneroom="oneroom"
      v-bind:isModalOpened="isModalOpened"
    ></Modal>
    <Card v-bind:oneroom="oneroom"></Card>
  </div>
</template>

<script>
import oneroom from "./assets/oneroom";
import MenuBar from "./components/Menu.vue";
import ModalWindow from "./components/Modal.vue";
import RoomCard from "./components/Card.vue";

export default {
  name: "App",
  data() {
    return {
      isModalOpened: false,
      oneroom: oneroom,
    };
  },
  components: {
    Menu: MenuBar,
    Modal: ModalWindow,
    Card: RoomCard,
  },
  methods: {
    changeModalStatus() {},
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
