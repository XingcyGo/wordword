<template>
  <el-form ref="form" :model="form" label-width="80px" class="demo-ruleForm" v-show="!isLogin">
    <el-form-item label="昵称">
      <el-input
        maxlength="1"
        show-word-limit
        placeholder="请输入单字昵称(只作显示)"
        v-model="form.nickname"
      ></el-input> </el-form-item
    ><el-form-item label="用户名">
      <el-input v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input type="password" v-model="form.password"></el-input>
    </el-form-item>
    <el-button type="primary" @click="login">提交</el-button>
  </el-form>
  <div>{{ username }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import { ElMessage } from "element-plus";
import store from "../store";

export default defineComponent({
  name: "account",
  data() {
    return {
      form: {
        nickname: "",
        username: "",
        password: "",
      },
    };
  },
  computed: {
    isLogin() {
      return store.state.isLogin;
    },
  },
  methods: {
    async login() {
      let self = this;
      axios
        .post("http://localhost:8001/login", { username: self.form.username, password: self.form.password })
        .then((res) => {
          console.log(res.data);
          if (res.data.code === 200) {
            self.success();
            store.commit("changeLogin", self.form.nickname);
          } else self.failed(res.data.message);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    success() {
      ElMessage({
        showClose: true,
        message: "登陆成功",
        type: "success",
      });
    },
    failed(mes: any) {
      ElMessage({
        showClose: true,
        message: "登陆失败, " + mes,
        type: "error",
      });
    },
  },
});
</script>

<style></style>
