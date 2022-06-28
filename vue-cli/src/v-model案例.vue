<template>
  <div>
    <div>
      <span>选择所在地区：</span>
      <input type="radio" value="0" name="area" v-model="area" />中国大陆
      <input type="radio" value="1" name="area" v-model="area" />中国香港
    </div>
    <div>
      <span>手机号码：</span>
      <input type="text" v-model.number="phone" />
    </div>

    <div><span>年龄</span>： <input type="text" v-model.number="age" /></div>
    <div>
      <span>密码</span>：
      <input type="password" v-model="pass" />
    </div>

    <div>
      <span>爱好：</span>
      <input type="checkbox" value="看书" v-model="hoop" />看书
      <input type="checkbox" value="学习" v-model="hoop" />学习
      <input type="checkbox" value="写代码" v-model="hoop" />写代码
      <input type="checkbox" value="游戏" v-model="hoop" />游戏
    </div>
    <div><input type="checkbox" v-model="info" /> 记住密码</div>
    <div>===============================================</div>
    <div>
      我来自：{{ { 0: "中国大陆", 1: "中国香港" }[area] }}
      <br />
      手机号码是：{{ phone }}
      <br />
      年龄是：{{ age }}
      <br />
      密码是：{{ pass }}
      <br />
      爱好是：{{ hoop.join("-") }}
      <br />
      是否记住密码：{{ info ? "是" : "否" }}
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      area: 0,
      phone: "",
      age: "",
      pass: "",
      hoop: [],
      info: "",
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
