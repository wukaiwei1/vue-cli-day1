<template>
  <div class="container">
    <div class="imglist">
      <h3>图片列表区</h3>
      <img
        src="./assets/01.jpg"
        alt=""
        @mouseenter="mouseoverFn(1)"
        @click="message(1, $event)"
      />
      <img
        src="./assets/02.jpg"
        alt=""
        @mouseenter="mouseoverFn(2)"
        @click="message(2, $event)"
      />
      <img
        src="./assets/03.jpg"
        alt=""
        @mouseenter="mouseoverFn(3)"
        @click="message(3, $event)"
      />
    </div>
    <div class="show">
      <h3>图片预览区</h3>
      <img :src="msg" alt="" style="width: 600px; height: auto" />
    </div>
    <div></div>
  </div>
</template>

<script>
import imgUrl1 from "./assets/01.jpg";
import imgUrl2 from "./assets/02.jpg";
import imgUrl3 from "./assets/03.jpg";
export default {
  data() {
    return {
      msg: imgUrl1,
    };
  },
  methods: {
    mouseoverFn(val) {
      console.log(val);
      this.msg = { 1: imgUrl1, 2: imgUrl2, 3: imgUrl3 }[val];
    },
    message(val, e) {
      alert(`第${val}图片地址是${e.target.src}`);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
}
.imglist {
  border: 2px solid red;
}
.imglist img {
  width: 200px;
  height: auto;
}
.show {
  border: 2px solid red;
  margin-right: 20px;
}
</style>