<template>
  <div class="black-bg" v-if="isModalOpened == true">
    <div class="white-bg" v-for="(room, i) in oneroom" :key="i">
      <h4>{{ room.title }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalWindow",
  props: {
    oneroom: Array,
    isModalOpened: Boolean,
  },
};
</script>

<style>
body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>
