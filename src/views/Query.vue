<template>
  <queryword />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import queryword from "../components/queryword.vue";
export default defineComponent({
  components: { queryword },
  name: "query",
});
</script>

<style>
.flexlayout {
  display: flex;
  justify-content: center;
  align-items: center;
}
.max-500 {
  max-width: 500px;
}
</style>
