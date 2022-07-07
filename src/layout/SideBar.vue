<template>
  <div class="bar-wrapper">
    <t-card :bordered="false" shadow class="web-card">
      <div class="user-head" flex="dir:top main:center cross:center">
        <t-avatar size="100px" class="user-head__photo"> W </t-avatar>
        <h1 class="text-base cursor">漪洛</h1>
        <p class="text-extra">漪洛的个人小破站</p>
        <p class="user-head__icon">
          <AppIcon />
          <BacktopRectangleIcon />
          <BarcodeIcon />
        </p>
      </div>
    </t-card>
  </div>
</template>
<script setup lang="ts">
import {
  AppIcon,
  BacktopRectangleIcon,
  BarcodeIcon,
} from "tdesign-icons-vue-next";

const infoMessage = "这就是";
</script>
<style lang="less" scoped>
.user-head {
  padding: 10px 0;
  text-align: center;
  &__icon {
    font-size: 18px;
  }
}
</style>