<template>
  <div>
    <h2>{{ msg }}</h2>
    <button @click="add">点击翻转</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      msg: "Hello,vue!",
    };
  },
  methods: {
    add() {
      this.msg = this.msg.split("").reverse().join("");
    },
  },
};
</script>

<style>
</style>
