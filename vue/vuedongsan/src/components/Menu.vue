<template>
  <div class="menu">
    <a v-for="(m, i) in menu" :key="i">{{ m }}</a>
  </div>
</template>

<script>
export default {
  name: "MenuBar",
  data() {
    return { menu: ["Home", "Shop", "About"] };
  },
};
</script>

<style>
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}
</style>
