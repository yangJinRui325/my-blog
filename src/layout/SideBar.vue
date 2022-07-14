<template>
  <aside class="bar-wrapper narrow-scrollbar">
    <t-menu theme="light" :collapsed="collapsed" class="sidebar-inner" :width="asideWidth" @change="changeHandler">
      <template #logo>
        <t-card :bordered="false" shadow class="web-card">
          <div class="user-head" flex="dir:top main:center cross:center">
            <t-avatar size="100px" class="user-head__photo"> W </t-avatar>
            <h1 class="text-base cursor">漪洛</h1>
            <p class="text-extra">漪洛的个人小破站</p>
            <p class="user-head__icon">
              <AppIcon class="mr6" />
              <BacktopRectangleIcon class="mr6" />
              <BarcodeIcon />
            </p>
          </div>
        </t-card>
      </template>
      <t-menu-group v-for="side in asideMenu" :key="side.code" :title="side.name">
        <!-- 有二级 -->
        <template v-for="sideItem in side.children">
          <template v-if="sideItem.children?.length">
            <t-submenu :key="sideItem.code" :value="sideItem.code" mode="popup">
              <template #icon>
                <SvgIcon :icon="`b-menu-${sideItem.icon}`" className="ml10 mr6"></SvgIcon>
              </template>
              <template #title>
                <span>{{ sideItem.name }}</span>
              </template>
              <t-menu-item v-for="item in sideItem.children || []" :key="item.code" :value="item.code">
                <template #icon>
                  <SvgIcon :icon="`b-menu-${item.icon}`" className="ml10 mr6"></SvgIcon>
                </template>
                {{ item.name }}
              </t-menu-item>
            </t-submenu>
          </template>
          <template v-else>
            <t-menu-item :key="sideItem.code" :value="sideItem.code">
              <template #icon>
                <SvgIcon :icon="`b-menu-${sideItem.icon}`" className="ml10 mr6"></SvgIcon>
              </template>
              {{ sideItem.name }}
            </t-menu-item>
          </template>
        </template>
      </t-menu-group>
      <!-- 操作栏插槽 -->
      <template #operations>
        <t-icon class="t-menu__operations-icon" name="view-list" @click="changeCollapsed" />
      </template>
    </t-menu>
  </aside>
</template>
<script setup lang="ts">
import SvgIcon from "../components/SvgIcon.vue";
import {
  AppIcon,
  BacktopRectangleIcon,
  BarcodeIcon,
} from "tdesign-icons-vue-next";
import { ref } from "vue";

const collapsed = ref(false);
const changeHandler = (active: any) => {
  console.log("change", active);
};
const changeCollapsed = () => {
  collapsed.value = !collapsed.value;
  emit('onChange', collapsed.value)
};

// emit事件
interface Emit {
  (e: 'onChange', value: boolean): void
}
const emit = defineEmits<Emit>()


const asideWidth = ['220px', '64px']
const asideMenu = [
  {
    name: "导航",
    id: "root1",
    code: "one_nav",
    children: [
      {
        name: "首页",
        id: "secend1-1",
        code: "two_home",
        icon: "home",
      },
      {
        name: "笔记",
        id: "secend1-2",
        code: "two_note",
        icon: "note",
        children: [],
      },
      {
        name: "杂谈",
        id: "secend1-3",
        code: "two_talk",
        icon: "talk",
      },
      {
        name: "关于",
        id: "secend1-4",
        code: "two_about",
        icon: "about",
      },
    ],
  },
  {
    name: "组成",
    id: "root2",
    code: "one_form",
    children: [
      {
        name: "文章",
        id: "secend2-1",
        code: "two_article",
        icon: "article",
        children: [
          {
            name: "专栏",
            id: "third2-1-1",
            code: "three_special",
            icon: "special",
            children: [],
          },
          {
            name: "归档",
            id: "third2-1-2",
            code: "three_file",
            icon: "file",
            children: [],
          },
          {
            name: "分类",
            id: "third2-1-3",
            code: "three_classify",
            icon: "classify",
            children: [],
          },
          {
            name: "标签",
            id: "third2-1-4",
            code: "three_tags",
            icon: "tags",
            children: [],
          },
        ],
      },
      {
        name: "百宝箱",
        id: "secend2-2",
        code: "two_box",
        icon: "box",
        children: [
          {
            name: "前端工具",
            id: "third2-2-1",
            code: "three_tool",
            icon: "tool",
            children: [],
          },
          {
            name: "推荐书籍",
            id: "third2-2-2",
            code: "three_books",
            icon: "books",
            children: [],
          },
          {
            name: "收藏夹",
            id: "third2-2-3",
            code: "three_favorites",
            icon: "favorites",
            children: [],
          },
        ],
      },
    ],
  },
];
</script>
<style lang="less" scoped>
.bar-wrapper {
  position: fixed;
  height: calc(100% - @header-height);
  background: @base-bg-white;

  :deep(.t-default-menu__inner) {
    .t-menu__logo {
      height: auto;
    }

    .t-menu {
      padding: 0 0 16px;

      .t-menu__item {
        border-radius: 0;

        .t-menu__content {
          margin-left: 10px;
        }
      }
    }
  }
}

.web-card {
  width: 100%;
}

.user-head {
  padding-top: 10px;
  text-align: center;

  &__icon {
    font-size: 20px;
  }
}
</style>