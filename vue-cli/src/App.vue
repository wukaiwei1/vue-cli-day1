<template>
  <div>
    <a @click="add" href="https://www.baidu.com/">阻止跳转百度</a>

    <button @click="addFn(5, $event)">事件对象</button>
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
    add(e) {
      e.preventDefault();
    },
    addFn(val, e) {
      e.preventDefault();
    },
  },
};
</script>

<style>
</style>
