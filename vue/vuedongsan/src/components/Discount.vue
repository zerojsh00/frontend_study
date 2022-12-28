<template>
  <div class="discount">
    <h4>지금 결제하면 {{ percent }}% 할인</h4>
  </div>
</template>

<script>
export default {
  name: "DiscountCmp",
  data() {
    return { percent: 20 };
  },
  methods: {},
  mounted() {
    let isStop = false;
    setInterval(() => {
      if (isStop === false) {
        this.percent--;
      }
      if (this.percent === 0) {
        isStop = true;
      }
    }, 1000);
  },
};
</script>

<style>
.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
</style>
