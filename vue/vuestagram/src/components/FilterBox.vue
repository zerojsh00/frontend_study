<template>
  <div
    :class="`${filter} filter-item`"
    :style="`background-image:url(${imgurl})`"
    @click="eventTrigger"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    imgurl: String,
    filter: String,
  },
  methods: {
    eventTrigger() {
      this.emitter.emit("emittedFilter", this.filter);
    },
  },
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>
