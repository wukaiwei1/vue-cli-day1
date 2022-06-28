<template>
  <div @click="father">
    <button @click.stop="add">阻止冒泡</button>
    <a href="http://www.baidu.com" @click.prevent.stop="btn"
      >.prevent阻止默认行为</a
    >
    <button @click.once="addFn">事件对象</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    add() {
      console.log("son");
    },
    father() {
      console.log("father");
    },
    btn() {
      console.log("阻止默认行为");
    },
    addFn() {
      console.log("只能执行一次");
    },
  },
};
</script>

<style>
</style>
