<template>
  <div class="black-bg" v-if="isModalOpened == true">
    <div class="white-bg">
      <h4>{{ oneroom[pageIdx].title }}</h4>
      <p>{{ oneroom[pageIdx].content }}</p>
      <!-- <img :src="oneroom[pageIdx].image" /> -->
      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalWindow",
  props: {
    oneroom: Array,
    isModalOpened: Boolean,
    pageIdx: Number,
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

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>
