<template>
  <div class="index-wrapper" ref="indexRef"></div>
</template>
<!-- 'Index' -->
<script lang="ts" setup>
import { onMounted, ref, watchEffect } from "vue"
const indexRef = ref()
const bgWidth = window.innerWidth;
const bgHeight = window.innerHeight;
const bgLink = `https://placeimg.com/${bgWidth}/${bgHeight}/nature`

onMounted(() => {
  indexRef.value.style.backgroundImage = `url(${bgLink})`
})

</script>
<style lang="less" scoped>
.index-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('');
}
</style>