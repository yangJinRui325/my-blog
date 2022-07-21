<template>
  <div class="index-wrapper" ref="indexRef" :style="{ backgroundImage: `url(${bgLink})` }">
    <t-card :bordered="false" shadow class="web-card index-inner">
      <t-avatar class="inner-avatar" size="100px" image="https://tdesign.gtimg.com/site/avatar.jpg" />
      <p class="inner-title">yiluo′s blog</p>
      <DivideLine color="#34495e" :style="{ width: '70%' }"></DivideLine>
    </t-card>
  </div>
</template>
<!-- 'Index' -->
<script lang="ts" setup>
import { onMounted, ref, computed } from "vue"
const indexRef = ref()

const random = ref<number>(Math.floor(Math.random() * 5))

// 此处vite动态加载静态资源
const bgLink = computed(() => new URL(`/src/assets/image/index_bg${random.value}.jpg`, import.meta.url))

</script>
<style lang="less" scoped>
@import '@/assets/less/global.less';

.index-wrapper {
  .pos-center();
  position: fixed;
  background-size: 100%;
  z-index: -1;

  &::before {
    .pos-center();
    content: '';
    display: block;
    position: absolute;
    margin: auto;
    background: rgba(0, 0, 0, 0.2);
  }
}

.index-inner {
  .trans-center();
  position: absolute;
  width: 920px;
  height: 280px;
  border-radius: 10px !important;
  background: rgba(255, 255, 255, 0.8);

  .inner-avatar {
    .pos-h-center();
    position: absolute;
    top: -50px;
    cursor: pointer;
    border: 2px solid #fff;
    border-radius: 50%;
    background-color: #ecf0f1;
    box-shadow: 0 0px 3px 1px rgb(0 0 0 / 30%);
  }

  .inner-title {
    font-family: 'myfont';
    font-size: 50px;
    text-align: center;
    margin-top: 40px;
  }
}
</style>