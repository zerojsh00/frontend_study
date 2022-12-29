<template>
  <div v-for="(data, i) in blogData" :key="i">
    <h5>
      <router-link
        :to="{ name: 'detail', params: { id: i } }"
        v-bind:blogData="blogData"
      >
        {{ data.title }}
      </router-link>
    </h5>
    <p>{{ data.content }}</p>
    <p>{{ data.data }}</p>
    <p>{{ data.number }}</p>
  </div>
</template>

<script>
export default {
  name: "ListCmp",
  props: {
    blogData: Array,
  },
};
</script>

<style></style>
