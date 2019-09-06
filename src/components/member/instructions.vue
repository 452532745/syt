<template>
  <div style="height: 100vh;background-color: #f4f4f4;">
    <WebHeader></WebHeader>
    <van-collapse v-model="activeName" accordion>
      <van-collapse-item v-for="(item,index) in instructions" :title="item.title" :name="index" :key="index">
        {{item.content}}
      </van-collapse-item>
    </van-collapse>
  </div>
</template>
<script>
  import WebHeader from '@/components/layout/header'

  export default {
    name: "instructions",
    data() {
      return {
        activeName: '1',
        instructions: [
          {
            title: "如何注册和登录?",
            content: "打开APP后，在登录页面上点击快速注册打开APP后，在登录页面上点击快速注册打开APP后，在登录页面上点击快速注册打开APP后，在登录页面上点击快速注册打开APP后，在登录页面上点击快速注册打开APP后，在登录页面上点击快速注册打开APP后，在登录页面上点击快速注册"
          },
          {
            title: "如何注册和登录222222222",
            content: "打开APP后，在登录页面上点击快速注册打开APP后，在登录页面上点击快速注册打开APP后，在登录页面上点击快速注册打开APP后，在登录页面上点击快速注册打开APP后，在登录页面上点击快速注册打开APP后，在登录页面上点击快速注册打开APP后，在登录页面上点击快速注册"
          },
          {
            title: "如何注册和登录222222222",
            content: "打开APP后，在登录页面上点击快速注册打开APP后，在登录页面上点击快速注册打开APP后，在登录页面上点击快速注册打开APP后，在登录页面上点击快速注册打开APP后，在登录页面上点击快速注册打开APP后，在登录页面上点击快速注册打开APP后，在登录页面上点击快速注册"
          },
          {
            title: "如何注册和登录222222222",
            content: "打开APP后，在登录页面上点击快速注册打开APP后，在登录页面上点击快速注册打开APP后，在登录页面上点击快速注册打开APP后，在登录页面上点击快速注册打开APP后，在登录页面上点击快速注册打开APP后，在登录页面上点击快速注册打开APP后，在登录页面上点击快速注册"
          }
        ]
      }
    },
    components: {
      WebHeader
    }
  }
</script>
<style scoped lang="less">
  .van-collapse {
    margin-top: 0.173334rem;
    padding-bottom: 0.646667rem;
    /deep/.van-collapse-item__content {
      background-color: transparent;
    }
    .van-cell:not(:last-child)::after{
      border-color: #dadada;
    }
  }
</style>
