<template>
  <div class="website-container box-shadow-lg" :class="{ layoutClass, 'header-fixed': isShowHeader }">
    <SideBar @onChange="sideCollapsedChange"></SideBar>
    <div class="website-inner" :class="{ 'website-inner-collapsed': collapsed }">
      <div class="home-wrapper">
        <ul class="banner-inner">
          <li class="banner-item" flex="dir:bottom">
            <h2 class="banner-item-title">这是一个标题呐</h2>
          </li>
          <li class="banner-item" flex="dir:bottom">
            <h2 class="banner-item-title">这是一个标题呐</h2>
          </li>
          <li class="banner-item" flex="dir:bottom">
            <h2 class="banner-item-title">这是一个标题呐</h2>
          </li>
        </ul>
        <divide-line title="最新文章" color="rgba(215,28%,17%,0.05)" :titleStyle="{ 'background': '#f1f2f9' }">
        </divide-line>
        <article-list-item></article-list-item>
        <divide-line color="rgba(160, 160, 160, 0.4)" :titleStyle="{ 'background': '#f1f2f9' }"></divide-line>
        <pagination></pagination>
      </div>
    </div>
  </div>

</template>
<script setup lang="ts">
import { ref, computed } from "vue";
import { useStore } from "vuex";

import SideBar from "@/layout/SideBar.vue";
import DivideLine from '@/components/DivideLine.vue';
import Pagination from '@/components/Pagination.vue';
import ArticleListItem from './article/ArticleListItem.vue';

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
<style lang="less" scoped>
.home-wrapper {
  width: 100%;
  padding: 16px;
}

// banner区
.banner-inner {
  height: 320px;
  display: grid;
  grid-gap: 16px;

  .banner-item {
    border-radius: @base-border-radius;

    &:nth-child(1) {
      grid-row: 1 / 3;
      grid-column: 1 / 3;
      background: url('https://placeimg.com/500/320/nature') center center no-repeat;
      background-size: 100% 100%;
    }

    &:nth-child(2) {
      grid-column: 3;
      background: url('https://placeimg.com/300/160/nature') center center no-repeat;
      background-size: 100% 100%;
    }

    &:nth-child(3) {
      grid-column: 3;
      background: url('https://placeimg.com/300/160/nature') center center no-repeat;
      background-size: 100% 100%;
    }

    &-title {
      color: #fff;
      font-weight: 600;
      font-size: 18px;
      padding: 10px 20px;
    }
  }
}
</style>