<template>
  <div>
    <div>
      <el-input
        class="max-40"
        placeholder="请输入单词"
        v-model="word"
        clearable
        maxlength="16"
        show-word-limit
        @keyup.enter="getword"
      >
      </el-input>
      <el-button @click="getword">点击查询</el-button>
    </div>
    <div class="cen">
      <el-card class="box-card" shadow="never">
        <template #header>
          <div class="card-header">
            <span>{{ word }}</span>
            <el-button class="button" type="text" @click="todo">发音</el-button>
          </div>
        </template>
        <div class="text item">
          {{ translation }}
        </div>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import axios from "axios";
import { ElMessage } from "element-plus";

export default defineComponent({
  name: "",
  props: {
    msg: {
      type: String,
      required: false,
    },
  },
  setup: () => {
    return {
      word: ref(""),
      translation: ref(""),
      todo() {
        ElMessage({
          showClose: true,
          message: "功能还没有开发",
          type: "warning",
        });
      },
    };
  },

  methods: {
    async getword() {
      let self = this;
      axios
        .get("http://localhost:8001/word/" + this.word)
        .then(function (response) {
          console.log(response.data.data.word, response.data.data.translation);
          self.translation = response.data.data.translation;
        })
        .catch(function (error) {
          console.log(error);
          self.translation = "未查询到结果,请检查输入的内容";
        });
    },
  },
});
</script>

<style scoped>
* {
  margin: 8px;
  text-align: center;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2px;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  /* width: 655px; */
  min-width: 50%;
}
.max-40 {
  max-width: 500px;
}
.flexl {
  display: flex;
  align-items: center;
  justify-items: center;
}
.cen {
  display: inline-block;
  /* max-width: 600px; */
  align-content: center;
  min-width: 40em;
  width: fit-content;
}
</style>
