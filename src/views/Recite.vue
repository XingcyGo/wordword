<template>
  <div class="contain">
    <div class="arrow"><el-button icon="el-icon-arrow-left" circle></el-button></div>
    <div>
      <div class="card">
        <el-card class="box-card" shadow="hover" @click="changeShow">
          <div class="textblock">
            <div class="word">{{ word }}单词</div>
            <br />
            <br />
            <br />
            <div v-show="!isShow">{{ translation }}翻译</div>
          </div>
        </el-card>
      </div>
      <div class="button2">
        <el-button type="info">稍后再现</el-button>
        <el-button type="success">我已记住</el-button>
      </div>
    </div>
    <div class="arrow">
      <el-button icon="el-icon-arrow-right" circle></el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "recite",
  setup() {
    return { isShow: ref(false) };
  },
  methods: {
    changeShow() {
      this.isShow = !this.isShow;
    },
  },
});
</script>

<style>
.contain {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.box-card {
  display: block;
  margin: 12px;
  margin-top: 35px;
}
.textblock {
  width: 400px;
  height: 200px;
}
.word {
  font-size: 135%;
}
</style>
