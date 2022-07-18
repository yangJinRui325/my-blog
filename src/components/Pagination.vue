<template>
  <div class="pagination-wrapper">
    <t-pagination :totalContent="false" showPageNumber :showPageSize="false" showPreviousAndNextBtn />
  </div>
</template>
<!-- 'Pagination' -->
<script lang="ts" setup>
</script>
<style lang="less" scoped>
.pagination-wrapper {
  padding-top: 16px;
  text-align: left;

  :deep(.t-pagination) {
    justify-content: flex-start;
  }
}
</style>