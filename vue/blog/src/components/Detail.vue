<template>
  <div>
    <h5>{{ blogData[$route.params.id].title }}의 글 제목</h5>
    <p>{{ blogData[$route.params.id].content }}</p>
  </div>
</template>

<script>
export default {
  name: "detailCmp",
  props: {
    blogData: Array,
  },
};
</script>

<style></style>
