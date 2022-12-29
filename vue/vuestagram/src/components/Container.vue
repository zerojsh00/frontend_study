<template>
  <div v-for="(post, i) in postData" :key="i">
    <Post v-bind:post="postData[i]" />
  </div>
</template>

<script>
import PostCmp from "./Post.vue";
export default {
  name: "ContainerCmp",
  components: {
    Post: PostCmp,
  },
  props: {
    postData: Array,
  },
};
</script>

<style></style>
