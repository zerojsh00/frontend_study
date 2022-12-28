<template>
  <div class="black-bg" v-if="isModalOpened == true">
    <div class="white-bg">
      <h4>{{ oneroom[pageIdx].title }}</h4>
      <p>{{ oneroom[pageIdx].content }}</p>
      <img :src="oneroom[pageIdx].image" style="width: 50%" />
      <!-- <input @input="month = $event.target.value" /> -->
      <p><input v-model.number="month" /> 개월</p>
      <p>
        {{ month }} X {{ oneroom[pageIdx].price }} =
        {{ month * oneroom[pageIdx].price }} 원
      </p>
      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalWindow",
  data() {
    return { month: 1 };
  },
  props: {
    oneroom: Array,
    isModalOpened: Boolean,
    pageIdx: Number,
  },
  watch: {
    month(inputData) {
      if (typeof inputData == "string") {
        alert("숫자를 입력하시오.");
        this.month = 1;
      }
    },
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
  height: 70%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 10px;
}
</style>
