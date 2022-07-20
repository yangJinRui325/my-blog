<template>
  <div class="article-wrapper">
    <Viewer ref="viewerRef" :value="viewer" :plugins="plugins"></Viewer>
    <ViewerCatalog></ViewerCatalog>
  </div>
</template>
<!-- 'Viewer' -->
<script lang="ts" setup>
import { Viewer } from '@bytemd/vue-next'
import { ref, watchEffect } from 'vue';
import gfm from '@bytemd/plugin-gfm'
import ViewerCatalog from './ViewerCatalog.vue';

const viewer = ref('')
interface Anode {
  id?: string,
  text?: string,
  className?: string
}
const plugins = [
  gfm(),
  {
    viewerEffect({ markdownBody, file }) {
      console.log()
      const hs = markdownBody.querySelectorAll("h1,h2,h3,h4,h5,h6");
      hs.forEach((item, index) => {
        const h = item.nodeName.substr(0, 2).toLowerCase()
        item.id = `Anchor-${h}-${index}`;
        getCatalog.push({ id: `Anchor-${h}-${index}`, text: item.textContent, className: `anchor-${h}` });
      })
    },
  },
  // add more plugins
]

// 获取目录
let getCatalog: Anode[] = []

fetch('/example.md')
  .then((res) => res.text())
  .then((md) => {
    viewer.value = md
    // md = md.replace(
    //   '# themes:',
    //   '# themes: ' + Object.keys(themes).join(', ')
    // );

    // const editor = new bytemd.Editor({
    //   target: document.querySelector('#app'),
    //   props: {
    //     value: md,
    //     plugins,
    //   },
    // });

    // editor.$on('change', (e) => {
    //   editor.$set({ value: e.detail.value });
    // });
  });

watchEffect(() => {
  console.log(getCatalog)
})
</script>
<style lang="less" scoped>
.article-wrapper {
  padding: 0 16px;
  background: #f1f2f9;

  .markdown-body {
    padding: 0 16px;
    background: #fff;
  }
}
</style>