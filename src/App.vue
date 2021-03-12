<template>
  <el-row>
    <el-col :span="24"><div class="grid-content"></div></el-col>
  </el-row>
  <el-row>
    <el-col :span="12"><div class="grid-content"></div></el-col>
    <el-col :span="12"><div class="grid-content"></div></el-col>
  </el-row>
  <el-row>
    <el-col :span="8"><div class="grid-content"></div></el-col>
    <el-col :span="8"><div class="grid-content"></div></el-col>
    <el-col :span="8"><div class="grid-content"></div></el-col>
  </el-row>
  <el-row>
    <el-col :span="6"><div class="grid-content"></div></el-col>
    <el-col :span="6"><div class="grid-content"></div></el-col>
    <el-col :span="6"><div class="grid-content"></div></el-col>
    <el-col :span="6"><div class="grid-content"></div></el-col>
  </el-row>
  <el-row>
    <el-col :span="4"><div class="grid-content"></div></el-col>
    <el-col :span="4"><div class="grid-content"></div></el-col>
    <el-col :span="4"><div class="grid-content"></div></el-col>
    <el-col :span="4"><div class="grid-content"></div></el-col>
    <el-col :span="4"><div class="grid-content"></div></el-col>
    <el-col :span="4"><div class="grid-content"></div></el-col>
  </el-row>
  <HelloWorld />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
</style>
