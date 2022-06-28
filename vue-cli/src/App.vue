<template>
  <div>
    <p>你要购买的商品数量:{{ count }}</p>

    <button v-on:click="add">+1</button>

    <button v-on:click="addFn(5)">+5</button>

    <button v-on:click="revoer">-1</button>
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
      this.count++;
    },
    addFn(val) {
      this.count += val;
    },
    revoer() {
      this.count--;
    },
  },
};
</script>

<style>
</style>
