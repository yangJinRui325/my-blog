<template>
  <!-- 没有图片极简模式 -->
  <t-card :bordered="false" shadow class="web-card article-small-item">
    <h2 class="article-title mb6">{{ title }}</h2>
    <p class="article-description">{{ description }}</p>
    <divide-line color="rgba(160, 160, 160, 0.4)"></divide-line>
    <ul class="article-action" flex="align:center">
      <li class="article-action-item article-description">
        <SvgIcon icon="b-action-calendar" className="mr4"></SvgIcon>
        2022-05-08
      </li>
      <li class="article-action-item article-description ml20">
        <SvgIcon icon="b-action-org" className="mr4"></SvgIcon>
        前端技术
      </li>
      <li class="article-action-item article-description ml20">
        <SvgIcon icon="b-action-tags" className="mr4"></SvgIcon>
        标签合集
      </li>
    </ul>
  </t-card>
  <!-- 有一个小图标的模式 -->
  <t-card :bordered="false" shadow class="web-card article-simple-item">
    <div class="article-simple-item-img mr16 article-item-img">
      <img src="https://placeimg.com/50/50/tech" alt="">
    </div>
    <h2 class="article-title mb6">{{ title }}</h2>
    <p class="article-description">{{ description }}</p>
    <divide-line color="rgba(160, 160, 160, 0.4)"></divide-line>
    <ul class="article-action" flex="align:center">
      <li class="article-action-item article-description">
        <SvgIcon icon="b-action-calendar" className="mr4"></SvgIcon>
        2022-05-08
      </li>
      <li class="article-action-item article-description ml20">
        <SvgIcon icon="b-action-org" className="mr4"></SvgIcon>
        前端技术
      </li>
      <li class="article-action-item article-description ml20">
        <SvgIcon icon="b-action-tags" className="mr4"></SvgIcon>
        标签合集
      </li>
    </ul>
  </t-card>
  <!-- 左侧图片 -->
  <t-card :bordered="false" shadow class="web-card article-default-item">
    <div class="article-default-item-img article-item-img">
      <img src="https://placeimg.com/200/200/architecture" alt="">
    </div>
    <div class="article-default-item-info">
      <h2 class="article-title mb6">{{ title }}</h2>
      <p class="article-description">{{ description }}</p>
      <divide-line color="rgba(160, 160, 160, 0.4)"></divide-line>
      <ul class="article-action" flex="align:center">
        <li class="article-action-item article-description">
          <SvgIcon icon="b-action-calendar" className="mr4"></SvgIcon>
          2022-05-08
        </li>
        <li class="article-action-item article-description ml20">
          <SvgIcon icon="b-action-org" className="mr4"></SvgIcon>
          前端技术
        </li>
        <li class="article-action-item article-description ml20">
          <SvgIcon icon="b-action-tags" className="mr4"></SvgIcon>
          标签合集
        </li>
      </ul>
    </div>
  </t-card>
  <!-- 顶部大图片 -->
  <t-card :bordered="false" shadow class="web-card article-large-item">
    <div class="article-large-item-img article-item-img">
      <img src="https://placeimg.com/750/170/tech" alt="">
    </div>
    <div class="article-large-item-info">
      <h2 class="article-title mb6">{{ title }}</h2>
      <p class="article-description">{{ description }}</p>
      <divide-line color="rgba(160, 160, 160, 0.4)"></divide-line>
      <ul class="article-action" flex="align:center">
        <li class="article-action-item article-description">
          <SvgIcon icon="b-action-calendar" className="mr4"></SvgIcon>
          2022-05-08
        </li>
        <li class="article-action-item article-description ml20">
          <SvgIcon icon="b-action-org" className="mr4"></SvgIcon>
          前端技术
        </li>
        <li class="article-action-item article-description ml20">
          <SvgIcon icon="b-action-tags" className="mr4"></SvgIcon>
          标签合集
        </li>
      </ul>
    </div>
  </t-card>
</template>
<!-- large default simple small -->
<!-- 'ArticleListItem' -->
<script lang="ts" setup>
import SvgIcon from "@/components/SvgIcon.vue";
import DivideLine from '@/components/DivideLine.vue';


const title = 'CentOS sendmail 模块配置'
const description = '终于毕业了，从去年10月份开始就着月份开始就着月、今年3月份初审、院盲审、最后的最终答辩，重重关卡，终于顺利毕业，这其实是我心中最重要的一个石头，...'
</script>
<style lang="less" scoped>
.web-card {
  margin-bottom: 16px;
}

.article-item-img {
  overflow: hidden;
  border-radius: @base-border-radius;

  img {
    width: 100%;
    height: 100%;
  }
}

.article-small-item {
  width: 100%;
  border-radius: @base-border-radius;
  overflow: hidden;
}

.article-simple-item {
  &-img {
    width: 48px;
    height: 48px;
    overflow: hidden;
    float: left;
  }
}

.article-default-item {
  :deep(.t-card__body) {
    padding: 0 24px 0 0;
    display: grid;
    grid-template-columns: 180px auto;
    grid-column-gap: 24px;
    align-items: center;
  }

  &-img {
    height: 100%;
    display: flex;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;

    img {
      flex-grow: 1;
    }
  }

  &-info {
    padding: 16px 0;
  }
}

.article-large-item {
  :deep(.t-card__body) {
    padding: 0;
  }

  &-img {
    width: 100%;
    height: 180px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  &-info {
    padding: 16px 24px;
  }
}

.article-action {
  padding-top: 12px;
}
</style>