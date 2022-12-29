<template>
  <div>
    <Nav></Nav>
    <router-view v-bind:blogData="blogData"></router-view>

    <!-- <List v-bind:blogData="blogData"></List> -->
  </div>
</template>

<script>
import NavCmp from "./components/Nav.vue";
// import ListCmp from "./components/List.vue";
import blogData from "./assets/blog.js";

export default {
  name: "App",
  components: {
    // List: ListCmp,
    Nav: NavCmp,
  },
  data() {
    return {
      blogData: blogData,
    };
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
}
</style>
