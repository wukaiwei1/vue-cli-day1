<template>
  <div>
    <h2>{{ msg }}</h2>
    <h2>{{ obj.uname }}</h2>
    <h2>{{ obj.age >= 18 ? "你已经成年了" : "你还未成年" }}</h2>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      msg: "张三",
      obj: {
        uname: "法外狂徒",
        age: 20,
      },
    };
  },
};
</script>

<style>
</style>
