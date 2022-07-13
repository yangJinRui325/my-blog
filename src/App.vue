<template>
  <t-config-provider :global-config="globalConfig">
    <div class="website-container box-shadow-lg">
      <Header></Header>
      <div class="website-inner">
        <SideBar></SideBar>
        <router-view></router-view>
        <!-- <t-row :gutter="16">
          <t-col span="3">
          </t-col>
          <t-col span="21">
            <router-view></router-view>
          </t-col>
        </t-row> -->
      </div>
    </div>
  </t-config-provider>
</template>
<script setup lang="ts">
import SideBar from "@/layout/SideBar.vue";
import Header from "@/layout/Header.vue";
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
}
.website-inner {
  display: grid;
  grid-template-columns: 220px auto 200px;
  width: 100%;
}
</style>>
