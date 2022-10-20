<template>
  <div class="hello">
    <h1 class="bg-orange-600 hover:bg-purple-500">{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
});
</script>
