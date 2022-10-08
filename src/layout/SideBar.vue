<template>
  <aside class="aside-wrapper narrow-scrollbar" :class="{ 'is-collapsed': isShowDrawer }">
    <t-menu ref="asideRef" theme="light" :collapsed="collapsed" class="sidebar-inner" :width="asideWidth"
      @change="changeHandler">
      <t-card :bordered="false" shadow class="web-card">
        <div class="user-head" flex="dir:top main:center cross:center">
          <!-- <t-avatar size="100px" class="user-head__photo"> W </t-avatar> -->
          <!-- <h1 class="text-base cursor">漪洛</h1> -->
          <!-- <p class="text-extra">漪洛的个人小破站</p> -->
          <p class="user-head__icon">
            <AppIcon class="mr6" />
            <BacktopRectangleIcon class="mr6" />
            <BarcodeIcon />
          </p>
        </div>
      </t-card>
      <t-menu-group v-for="side in asideMenu" :key="side.code" :title="side.name">
        <!-- 有二级 -->
        <template v-for="sideItem in side.children">
          <template v-if="sideItem.children?.length">
            <t-submenu :key="sideItem.code" :value="sideItem.code" mode="popup">
              <template #icon>
                <div class="b-menu-icon-slot">
                  <p class="b-menu-icon-slot__svg">
                    <SvgIcon :icon="`b-menu-${sideItem.icon}`" className="ml6 mr6"></SvgIcon>
                  </p>
                  <p class="b-menu-icon-slot__tip">{{ sideItem.name }}</p>
                </div>
              </template>
              <template #title>
                <span>{{ sideItem.name }}</span>
              </template>
              <t-menu-item v-for="item in sideItem.children || []" :key="item.code" :value="item.code" :to="item.path">
                <template #icon>
                  <SvgIcon :icon="`b-menu-${item.icon}`" className="ml6 mr6"></SvgIcon>
                </template>
                {{ item.name }}
              </t-menu-item>
            </t-submenu>
          </template>
          <template v-else>
            <t-menu-item :key="sideItem.code" :value="sideItem.code" :to="sideItem.path">
              <template #icon>
                <div class="b-menu-icon-slot">
                  <p class="b-menu-icon-slot__svg">
                    <SvgIcon :icon="`b-menu-${sideItem.icon}`" className="ml6 mr6"></SvgIcon>
                  </p>
                  <p class="b-menu-icon-slot__tip">{{ sideItem.name }}</p>
                </div>
              </template>
              {{ sideItem.name }}
            </t-menu-item>
          </template>
        </template>
      </t-menu-group>
      <!-- 操作栏插槽 -->
      <!-- <template #operations>
        <t-icon class="t-menu__operations-icon" name="view-list" @click="changeCollapsed" />
      </template> -->
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
import { ref, computed, watch, toRaw } from "vue";
import { useStore } from "vuex";

// 获取当前侧边栏的宽度
const asideRef = ref()
const getAsideWidth = (): number => {
  return toRaw(asideRef.value?.offsetWidth)
}

// emit事件
interface Emit {
  (e: 'onChange', value: boolean, width: number): void
}
const emit = defineEmits<Emit>()

const collapsed = ref(false);

const changeCollapsed = () => {
  collapsed.value = !collapsed.value;
  emit('onChange', collapsed.value, getAsideWidth())
};

// 获取vuex中的是否展示侧边栏
const store = useStore()
const isShowDrawer = computed(() => store.state.isShowDrawer)

const changeHandler = () => { }

const asideWidth = ref(['220px', '70px'])
const asideMenu = [
  {
    name: "导航",
    id: "root1",
    code: "one_nav",
    path: null,
    children: [
      {
        name: "首页",
        id: "secend1-1",
        code: "two_home",
        icon: "home",
        path: "/home"
      },
      {
        name: "笔记",
        id: "secend1-2",
        code: "two_note",
        icon: "note",
        children: [],
        path: "/note"
      },
      {
        name: "杂谈",
        id: "secend1-3",
        code: "two_tattle",
        icon: "tattle",
        path: "/tattle"
      },
      {
        name: "关于",
        id: "secend1-4",
        code: "two_about",
        icon: "about",
        path: "/about"
      },
    ],
  },
  {
    name: "组成",
    id: "root2",
    code: "one_form",
    path: null,
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
            path: "/special"
          },
          {
            name: "归档",
            id: "third2-1-2",
            code: "three_archived",
            icon: "archived",
            children: [],
            path: "/archived"
          },
          {
            name: "分类",
            id: "third2-1-3",
            code: "three_classify",
            icon: "classify",
            children: [],
            path: "/classify"
          },
          {
            name: "标签",
            id: "third2-1-4",
            code: "three_tags",
            icon: "tags",
            children: [],
            path: "/tags"
          },
        ],
      },
      {
        name: "百宝箱",
        id: "secend2-2",
        code: "two_treasure",
        icon: "treasure",
        path: null,
        children: [
          {
            name: "前端工具",
            id: "third2-2-1",
            code: "three_tool",
            icon: "tool",
            children: [],
            path: "/tool"
          },
          {
            name: "推荐书籍",
            id: "third2-2-2",
            code: "three_books",
            icon: "books",
            children: [],
            path: "/books"
          },
          {
            name: "收藏夹",
            id: "third2-2-3",
            code: "three_favorites",
            icon: "favorites",
            children: [],
            path: "/favorites"
          },
        ],
      },
    ],
  },
];

// 暴露给父级
defineExpose({ getAsideWidth })
</script>
<style lang="less" scoped>
.aside-wrapper {
  position: fixed;
  width: 220px;
  height: 100%;
  top: 0;
  background: @base-ba-white-1;
  transition: all 0.3s cubic-bezier(0.38, 0, 0.24, 1);

  &.is-collapsed {
    overflow: hidden;
    transform: translateX(-220px)
  }

  :deep(.t-is-collapsed) {
    .b-menu-icon-slot__tip {
      display: block;
    }

    .t-menu__item {
      &:hover {
        background: #ccc;

        .b-menu-icon-slot__svg {
          transform: translateY(-100%);
        }

        .b-menu-icon-slot__tip {
          transform: translateY(-100%);
        }
      }
    }
  }

  :deep(.t-default-menu__inner) {
    .t-menu__logo {
      height: auto;
    }

    .t-menu {
      padding: 0 0 16px;

      .t-menu__item {
        border-radius: 0;

        .t-menu__content {
          padding-left: 10px;
        }
      }
    }
  }
}

.b-menu-icon-slot {
  height: 100%;
  overflow: hidden;

  &__svg {
    text-align: center;
    transition: all 0.3s cubic-bezier(0.38, 0, 0.24, 1);
  }

  &__tip {
    display: none;
    transition: all 0.3s cubic-bezier(0.38, 0, 0.24, 1);
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