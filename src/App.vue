<script setup lang="ts">
import Heading from "./components/ui/heading.vue";
import { onMounted, ref } from "vue";

const session = ref<null | string | undefined>(null);
</script>
<template>
  <div>
    <Heading class="text-red-600 h-40" type="h1"> HI {{ session }}</Heading>
    <a href="http://localhost:8000/login/google"> Google Login </a>
  </div>
</template>
