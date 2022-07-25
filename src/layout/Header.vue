<template>
  <header class="header-wrapper box-shadow-bottom" flex="cross:center">
    <span class="header-menu">
      <SvgIcon icon="b-action-org" :size="30" @click="handleMenuClick"></SvgIcon>
    </span>
  </header>
</template>
<script setup lang="ts">
import { defineEmits, computed } from 'vue'
import { useStore, mapMutations } from 'vuex'
const store = useStore()

// interface Emit {
//   (e: 'menuClick'): void
// }
// const emit = defineEmits<Emit>()

const isShowDrawer = computed((): boolean => store.state.isShowDrawer)
const handleMenuClick = () => {
  // 暂时不用emit。用vuex全局管理状态
  // emit('menuClick')
  store.commit('changeIsShowHeader', !isShowDrawer.value)
}
</script>
<style lang="less" scoped>
.header-wrapper {
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  height: @header-height;
  padding: 0 20px;
  background: @header-bg-color;

  .header-menu {
    color: #fff;
    cursor: pointer;
  }
}
</style>
