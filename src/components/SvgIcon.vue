<template>
  <svg
    class="icon"
    aria-hidden="true"
    :style="{ fontSize: fontSize }"
    :class="className"
  >
    <use :xlink:href="iconName"></use>
  </svg>
</template>
<script lang="ts" setup>
import { computed } from "@vue/runtime-core";

// 此处设置默认属性可以通过辅助函数withDefaults
interface Props {
  icon?: string; // iconfont的类名
  size?: number; // 字体大小，默认16
  className?: string; // 扩展自定义类名
}
const props = withDefaults(defineProps<Props>(), { size: 16 });

const iconName = computed(() => `#${props.icon}`);
const fontSize = computed(() => props.size + "px");
</script>
<style lang="less" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  // fill: none;
  // stroke: currentcolor;
  // stroke-width: 2;
  // stroke-linecap: round;
  // stroke-linejoin: round;
  overflow: hidden;
}
</style>