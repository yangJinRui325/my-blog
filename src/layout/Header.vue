<template>
  <header class="header-wrapper box-shadow-bottom">我的头部</header>
</template>
<script setup lang="ts">
</script>
<style lang="less" scoped>
.header-wrapper {
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  height: @header-height;
  background: @base-ba-white-1;
}
</style>
