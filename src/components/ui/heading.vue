<script setup lang="ts">
defineProps<{
  type: "h1" | "h2" | "h3";
}>();
</script>
<template>
  <component :is="type"><slot></slot></component>
</template>
