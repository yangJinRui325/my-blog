<template>
  <div class="website-container box-shadow-lg" :class="[{ 'header-fixed': isShowHeader }]">
    <SideBar></SideBar>
    <div class="website-inner" :class="{ 'website-inner-collapsed': isShowDrawer }">
      <Header></Header>
      <div class="website-wrapper">
        <router-view />
      </div>
    </div>
  </div>
</template>
<!-- 'Basic' -->
<script lang="ts" setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

import SideBar from "./SideBar.vue";
import Header from "./Header.vue";

const mode = ref<string>("push");
const placement = ref<{ left; right; top; bottom }>("left");

const collapsed = ref<boolean>(false);
function sideCollapsedChange(isCollapsed: boolean) {
  collapsed.value = isCollapsed;
}

// 是否展示头部
const store = useStore()
const isShowHeader = computed((): boolean => store.state.isShowHeader)
const isShowDrawer = computed((): boolean => store.state.isShowDrawer)


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

  &-collapsed {
    margin-left: 0;
  }
}
</style>
