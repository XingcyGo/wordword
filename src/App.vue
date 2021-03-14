<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-submenu index="1">
        <template #title
          ><el-avatar class="el-icon-user mright">{{ nickname }} </el-avatar></template
        >
        <router-link to="/account" class="linelayout1"><el-menu-item index="1-1">个人中心</el-menu-item></router-link>
        <router-link to="" class="linelayout1"><el-menu-item index="1-2">数据中心</el-menu-item></router-link>
        <router-link to="" class="linelayout1"><el-menu-item index="1-3">数据统计</el-menu-item></router-link>
        <el-submenu index="1-4">
          <template #title>账号操作</template>
          <el-menu-item index="1-4-1">更换账号</el-menu-item>
          <el-menu-item index="1-4-2">退出账号</el-menu-item>
          <el-menu-item index="1-4-3">注销账号</el-menu-item>
        </el-submenu>
      </el-submenu>
      <router-link to="/query"><el-menu-item index="2" class="linelayout">单词查询</el-menu-item></router-link
      ><router-link to="/recite"><el-menu-item index="3" class="linelayout">背诵练习</el-menu-item></router-link
      ><router-link to="/about"><el-menu-item index="4" class="linelayout">关于</el-menu-item></router-link>
    </el-menu>
  </div>

  <div><router-view /></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "./store";

export default defineComponent({
  name: "App",
  components: {},
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key: any, keyPath: any) {
      console.log(key, keyPath);
    },
  },
  computed: {
    nickname() {
      return store.state.nickname;
    },
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #f0f0f0;
  margin: 0;
  padding: 0;
  user-select: none;
}
.linelayout {
  display: inline-block;
}
.linelayout1 {
  display: block;
  text-decoration: none;
}
.mright {
  display: inline-block;
  justify-items: right;
}
</style>
