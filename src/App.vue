<template>
  <t-config-provider :global-config="globalConfig" class="website-container box-shadow-lg">
    <Header></Header>
    <SideBar @onChange="sideCollapsedChange"></SideBar>
    <div class="website-inner" :class="{ 'website-inner-collapsed': collapsed }">
      <router-view></router-view>
    </div>
    <!-- <t-row :gutter="16">
          <t-col span="3">
          </t-col>
          <t-col span="21">
            <router-view></router-view>
          </t-col>
        </t-row> -->
  </t-config-provider>
</template>
<script setup lang="ts">
import SideBar from "@/layout/SideBar.vue";
import Header from "@/layout/Header.vue";
import { merge } from "lodash";
import enConfig from "tdesign-vue-next/es/locale/en_US";
import { ref } from "vue";
const globalConfig = merge(enConfig);

const collapsed = ref(false)
function sideCollapsedChange(isCollapsed: boolean) {
  collapsed.value = isCollapsed
}
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
}

.website-inner {
  display: grid;
  grid-template-columns: auto 200px;
  margin-left: 220px;

  &-collapsed {
    margin-left: 70px;
  }
}
</style>>
