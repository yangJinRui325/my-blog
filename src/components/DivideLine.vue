<template>
  <div class="divide-line" :style="{ color: color, ...divideStyle }">
    <span v-if="title" class="divide-line-title" :style="{ ...titleStyle }">
      {{ title }}
    </span>
  </div>
</template>
<script lang="ts" setup>
interface Props {
  title?: string, // 分割线标识
  color?: string, // 分割线颜色
  divideStyle?: object, // 分割线样式
  titleStyle?: object   // title样式
}
const prop = withDefaults(defineProps<Props>(), {
  color: "#333"
})
</script>
<style lang="less" scoped>
@import '@/assets/less/global.less';

.divide-line {
  .trans-center();
  position: relative;
  width: 100%;
  text-align: center;
  margin: 10px 0;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    width: 100%;
    height: 0.5px;
    background: currentColor;
    z-index: 1;
  }

  &-title {
    position: relative;
    padding: 0 20px;
    z-index: 2;
    color: #333;
    background-color: #f1f2f9;
    font-size: 18px;
  }
}
</style>