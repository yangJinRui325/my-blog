<template>
  <t-config-provider :global-config="globalConfig" class="website-container box-shadow-lg">
    <router-view></router-view>
  </t-config-provider>
</template>

<script setup lang="ts">
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
