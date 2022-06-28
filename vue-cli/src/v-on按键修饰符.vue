<template>
  <div>
    <input type="text" @keydown.enter="add" />
    <input type="text" @keydown.esc="reover" />
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
      alert("enter");
    },
    reover() {
      alert("esc");
    },
  },
};
</script>

<style>
</style>
