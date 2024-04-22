<template>
  <el-button>
    <slot />
  </el-button>
</template>

<script lang="ts" setup>
defineOptions({ name: 'ml-btn', inheritAttrs: false });
</script>

<style lang="scss" scoped></style>
