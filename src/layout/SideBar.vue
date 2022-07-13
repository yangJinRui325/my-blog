<template>
  <div class="bar-wrapper">
    <t-card :bordered="false" shadow class="web-card">
      <div class="user-head" flex="dir:top main:center cross:center">
        <t-avatar size="100px" class="user-head__photo"> W </t-avatar>
        <h1 class="text-base cursor">漪洛</h1>
        <p class="text-extra">漪洛的个人小破站</p>
        <p class="user-head__icon">
          <AppIcon class="mr6" />
          <BacktopRectangleIcon class="mr6" />
          <BarcodeIcon />
        </p>
      </div>
    </t-card>
    <t-menu
      theme="light"
      default-value="item2"
      :collapsed="collapsed"
      width="100%"
      @change="changeHandler"
    >
      <t-menu-group title="导航">
        <t-menu-item value="item1">
          <template #icon>
            <t-icon name="dashboard" />
          </template>
          首页
        </t-menu-item>
      </t-menu-group>
      <t-menu-group title="组成">
        <t-menu-item value="item2"> 调度平台 </t-menu-item>
        <t-menu-item value="item3">
          菜单内容二很长很长很长很长很长很长很长很长
        </t-menu-item>
      </t-menu-group>
      <t-menu-group title="Classification C">
        <t-menu-item value="item4" :disabled="true"> 精准监控 </t-menu-item>
      </t-menu-group>
      <template #operations>
        <t-icon
          class="t-menu__operations-icon"
          name="view-list"
          @click="changeCollapsed"
        />
      </template>
    </t-menu>
  </div>
</template>
<script setup lang="ts">
import {
  AppIcon,
  BacktopRectangleIcon,
  BarcodeIcon,
} from "tdesign-icons-vue-next";
import { ref } from "vue";
const collapsed = ref(false);
const changeHandler = (active: any) => {
  console.log("change", active);
};
const changeCollapsed = () => {
  collapsed.value = !collapsed.value;
};
</script>
<style lang="less" scoped>
.bar-wrapper {
  width: 100%;
  height: auto;
  background: @base-bg-white;
}
.user-head {
  padding-top: 10px;
  text-align: center;
  &__icon {
    font-size: 20px;
  }
}
</style>