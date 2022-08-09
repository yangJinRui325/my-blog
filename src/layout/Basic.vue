<template>
  <div class="website-container box-shadow-lg" :class="[{ 'header-fixed': isShowHeader }]">
    <SideBar ref="siderRef" @onChange="sideCollapsedChange"></SideBar>
    <!-- <div class="website-inner" :class="{ 'website-inner-collapsed': isShowDrawer }"> -->
    <div class="website-inner" ref="websiteRef">
      <Header></Header>
      <div class="website-wrapper">
        <router-view />
      </div>
    </div>
  </div>
</template>
<!-- 'Basic' -->
<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import { useStore } from "vuex";

import SideBar from "./SideBar.vue";
import Header from "./Header.vue";

const websiteRef = ref()
const siderRef = ref()

function sideCollapsedChange(isCollapsed: boolean, width: number) {
  console.log(width)
  if (isShowDrawer) {
    websiteRef.value.style.marginLeft = width + 'px'
  }
}

// 是否展示头部
const store = useStore()
const isShowHeader = computed((): boolean => store.state.isShowHeader)
const isShowDrawer = computed((): boolean => store.state.isShowDrawer)

watch(isShowDrawer, (flag) => {
  console.log(1111, siderRef.value)
  console.log(1111, siderRef.value.getAsideWidth())
  if (isShowDrawer) {
    websiteRef.value.style.marginLeft = siderRef.value.getAsideWidth() + 'px'
  }
})


</script>
<style lang="less" scoped>
.website-container {
  width: 100%;

  &.header-fixed {
    padding-top: @header-height;
  }
}

.website-inner {
  margin-left: 220px;
  transition: all 0.3s;

  // &-collapsed {
  //   margin-left: 0;
  // }
}
</style>
