<template>
  <div style="height: 100vh;background-color: #f4f4f4;">
    <WebHeader></WebHeader>
    <div class="article-wrapper">
      <div class="content">{{content}}</div>
    </div>
  </div>
</template>
<script>
  import WebHeader from '@/components/layout/header'

  export default {
    name: "about",
    data() {
      return {
        content: "关于立德信关于立德信关于立德信关于立德信关于立德信关于立德信关于立德信关于立德信关于立德信关于立德信关于立德信关于立德信关于立德信关于立德信关于立德信关于立德信关于立德信关于立德信关于立德信关于立德信关于立德信关于立德信关于立德信关于立德信关于立德信关于立德信关于立德信关于立德信关于立德信关于立德信关于立德信关于立德信关于立德信关于立德信关于立德信关于立德信关于立德信关于立德信关于立德信关于立德信关于立德信关于立德信关于立德信关于立德信关于立德信关于立德信关于立德信关于立德信"
      }
    },
    components: {
      WebHeader
    }
  }
</script>
<style scoped lang="less">
  .article-wrapper {
    padding: 0.36rem 0.2rem 0.646667rem;
  }

  .content {
    font-size: 0.186667rem;
    line-height: 0.32rem;
  }
</style>
