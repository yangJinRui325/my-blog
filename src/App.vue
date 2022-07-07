<template>
  <t-config-provider :global-config="globalConfig">
    <div class="website-container">
      <t-row :gutter="16">
        <t-col span="3">
          <SideBar></SideBar>
        </t-col>
        <t-col span="21">
          <router-view></router-view>
        </t-col>
      </t-row>
    </div>
  </t-config-provider>
</template>
<script setup lang="ts">
import SideBar from "@/layout/SideBar.vue";
import { merge } from "lodash";
import enConfig from "tdesign-vue-next/es/locale/en_US";
const globalConfig = merge(enConfig);
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
  margin-top: 50px;
}
</style>>
