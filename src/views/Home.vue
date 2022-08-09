<template>
  <div class="home-wrapper inner-wrapper">
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
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
import { useStore } from "vuex";

import DivideLine from '@/components/DivideLine.vue';
import Pagination from '@/components/Pagination.vue';
import ArticleListItem from './article/ArticleListItem.vue';


</script>
<style lang="less" scoped>
.home-wrapper {
  width: 100%;
  padding: 16px;
  &.inner-wrapper{
    width: 900px;
    margin: 0 auto;
  }
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