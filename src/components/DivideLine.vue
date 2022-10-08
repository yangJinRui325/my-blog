<template>
  <t-divider class="divide-line" :class="`divide-line-${pos}`" :style="{ 'border-color': color, width: realWidth }" />
</template>
<script lang="ts" setup>
import { computed } from "vue";
import TdDividerProps from "tdesign-vue-next/esm/divider/type.d.ts";
interface Props extends TdDividerProps {
  color?: string; // 分割线颜色
  width?: string | number; // 分割线宽度
  pos?: "left" | "right" | "center" | false; // 分割线位置
}
const prop = withDefaults(defineProps<Props>(), {
  color: "#7f8c8d",
  pos: false,
});
const realWidth = computed(() => {
  if (typeof prop.width === "number") {
    return width + "px";
  }
  return prop.width;
});
</script>
<style lang="less" scoped>
@import "@/assets/less/global.less";

.divide-line {
  position: relative;

  &-left {
    left: 0;
  }

  &-right {
    right: 0;
    margin-left: auto;
  }

  &-center {
    .trans-center();
  }
}
</style>
