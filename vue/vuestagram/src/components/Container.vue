<template>
  <div>
    <div v-if="step === 0">
      <div v-for="(post, i) in postData" :key="i">
        <Post v-bind:post="postData[i]" />
      </div>
    </div>

    <div v-if="step === 1">
      <!-- 필터선택페이지 -->
      <div
        :class="`${filter} upload-image`"
        :style="{ backgroundImage: `url(${imgurl})` }"
      ></div>
      <div class="filters">
        <FilterBox
          v-bind:imgurl="imgurl"
          v-for="(filter, i) in filters"
          :key="i"
          :filter="filter"
          >{{ filter }}</FilterBox
        >
      </div>
    </div>
    <div v-if="step === 2">
      <!-- 글작성페이지 -->
      <div
        :class="`${filter} upload-image`"
        :style="{ backgroundImage: `url(${imgurl})` }"
      ></div>
      <div class="write">
        <textarea
          class="write-box"
          @input="$emit('write', $event.target.value)"
        >
write!</textarea
        >
      </div>
    </div>
  </div>
</template>

<script>
import PostCmp from "./Post.vue";
import FilterBox from "./FilterBox.vue";
export default {
  name: "ContainerCmp",
  components: {
    Post: PostCmp,
    FilterBox: FilterBox,
  },
  props: {
    postData: Array,
    step: Number,
    imgurl: String,
    value: String,
  },
  methods: {},
  data() {
    return {
      filter: "",
      filters: [
        "aden",
        "_1977",
        "brannan",
        "brooklyn",
        "clarendon",
        "earlybird",
        "gingham",
        "hudson",
        "inkwell",
        "kelvin",
        "lark",
        "lofi",
        "maven",
        "mayfair",
        "moon",
        "nashville",
        "perpetua",
        "reyes",
        "rise",
        "slumber",
        "stinson",
        "toaster",
        "valencia",
        "walden",
        "willow",
        "xpro2",
      ],
    };
  },
  mounted() {
    this.emitter.on("emittedFilter", (filter) => {
      this.filter = filter;
    });
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>
