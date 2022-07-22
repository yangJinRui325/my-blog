<template>
  <div
    class="index-wrapper"
    ref="indexRef"
    :style="{ backgroundImage: `url(${bgLink})` }"
  >
    <t-card :bordered="false" shadow class="web-card index-inner">
      <t-avatar
        class="inner-avatar"
        size="100px"
        image="https://tdesign.gtimg.com/site/avatar.jpg"
      />
      <p class="inner-title">yiluo′s blog</p>
      <DivideLine width="80%" pos="center" />
      <ul class="index-nav">
        <li class="nav-item" @click="goPage('/home')">
          <p class="nav-item-en">Home</p>
          <p class="nav-item-cn">首页</p>
        </li>
        <DivideLine layout="vertical" />
        <li class="nav-item" @click="goPage('/note')">
          <p class="nav-item-en">Note</p>
          <p class="nav-item-cn">笔记</p>
        </li>
        <DivideLine layout="vertical" />
        <li class="nav-item" @click="goPage('/tattle')">
          <p class="nav-item-en">Tattle</p>
          <p class="nav-item-cn">杂谈</p>
        </li>
        <DivideLine layout="vertical" />
        <li class="nav-item" @click="goPage('/about')">
          <p class="nav-item-en">About</p>
          <p class="nav-item-cn">关于</p>
        </li>
        <DivideLine layout="vertical" />
        <li class="nav-item" @click="goPage('/treasure')">
          <p class="nav-item-en">Treasure</p>
          <p class="nav-item-cn">百宝箱</p>
        </li>
      </ul>
    </t-card>
  </div>
</template>
<!-- 'Index' -->
<script lang="ts" setup>
import { onMounted, ref, computed } from "vue";
import { useRouter } from "vue-router";
const $router = useRouter();
const indexRef = ref();

const random = ref<number>(Math.floor(Math.random() * 5));

// 此处vite动态加载静态资源
const bgLink = computed(
  () =>
    new URL(`/src/assets/image/index_bg${random.value}.jpg`, import.meta.url)
);

const goPage: vide = (path: string) => {
  $router.push(path);
};
</script>
<style lang="less" scoped>
@import "@/assets/less/global.less";

.index-wrapper {
  .pos-center();
  position: fixed;
  background-size: 100%;
  z-index: -1;

  &::before {
    .pos-center();
    content: "";
    display: block;
    position: absolute;
    margin: auto;
    background: rgba(0, 0, 0, 0.4);
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
    font-family: "myfont";
    font-size: 50px;
    text-align: center;
    margin-top: 40px;
  }

  .index-nav {
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    font-size: 18px;
    li {
      font-family: "myfont";
      font-size: 20px;
      font-weight: 300;
      // color: #3a539b;
      // color: #985e6d;
      // color: #494e6b;
      cursor: pointer;
    }
  }
}
.nav-item {
  height: 36px;
  overflow: hidden;
  &:hover {
    .nav-item-en,
    .nav-item-cn {
      opacity: 1;
      transform: translateY(-100%);
    }
  }
  &-en {
    transition: all 0.3s cubic-bezier(0.38, 0, 0.24, 1);
  }
  &-cn {
    opacity: 0;
    color: #985e6d;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    transition: all 0.3s cubic-bezier(0.38, 0, 0.24, 1);
  }
}
</style>
