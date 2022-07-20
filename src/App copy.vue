<template>
  <t-config-provider :global-config="globalConfig" class="website-container box-shadow-lg"
    :class="{ layoutClass, 'header-fixed': isShowHeader }">
    <Header v-if="isShowHeader"></Header>
    <SideBar @onChange="sideCollapsedChange"></SideBar>
    <div class="website-inner" :class="{ 'website-inner-collapsed': collapsed }">
      <router-view></router-view>
    </div>
  </t-config-provider>
</template>

<script setup lang="ts">
import SideBar from "@/layout/SideBar.vue";
import Header from "@/layout/Header.vue";

import { merge } from "lodash";
import { ref, computed } from "vue";
import { useStore } from "vuex";

import enConfig from "tdesign-vue-next/es/locale/en_US";
const globalConfig = merge(enConfig);

const collapsed = ref<boolean>(false)
function sideCollapsedChange(isCollapsed: boolean) {
  collapsed.value = isCollapsed
}

// 用来定义宽度的
const layoutClass = ref<string>('')

// 是否展示头部
const store = useStore()

const isShowHeader = computed(() => store.state.isShowHeader)
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>
<style scoped lang="less">
.website-container {
  max-width: 1200px;
  width: 1200px;
  margin: 0 auto;

  &.full {
    max-width: 100%;
    width: 100%;
  }

  &.header-fixed {
    padding-top: @header-height;
  }
}

.website-inner {
  margin-left: 220px;
  transition: all 0.3s;

  &-collapsed {
    margin-left: 70px;
  }
}
</style>>
