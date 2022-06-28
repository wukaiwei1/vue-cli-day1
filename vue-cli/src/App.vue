<template>
  <div>
    <a v-bind:href="url">点我去百度</a>
    <img v-bind:src="imgUrl" alt="" />
  </div>
</template>

<script>
import imgUrl from "./assets/01.jpg";
export default {
  name: "App",
  data() {
    return {
      url: "https://www.baidu.com/",
      imgUrl,
    };
  },
};
</script>

<style>
</style>
