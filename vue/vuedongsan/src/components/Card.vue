<template>
  <div v-for="(room, i) in oneroom" :key="i">
    <h4>{{ room.title }}</h4>
    <img :src="room.image" class="room-img" />
    <p>{{ room.content }}</p>
    <p>{{ room.price }} 원</p>
  </div>
</template>

<script>
export default {
  name: "RoomCard",
  props: {
    oneroom: Array,
  },
};
</script>

<style>
.room-img {
  width: 100%;
  margin-top: 20px;
}
</style>
