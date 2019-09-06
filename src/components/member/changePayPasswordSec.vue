<template>
  <div style="height: 100vh;background-color: #f4f4f4;">
    <WebHeader></WebHeader>
    <div class="password-wrapper">
      <van-cell-group>
        <van-field v-model="phone" clearable label="支付密码" placeholder="请输入6-16位字母或数字"/>
        <van-field v-model="phone" clearable label="确认密码" placeholder="请再次输入密码"/>
      </van-cell-group>
      <div class="button_wrapper">
        <van-button type="default" @click="confirm">确 认</van-button>
      </div>
    </div>
  </div>
</template>
<script>
  import WebHeader from '@/components/layout/header'

  export default {
    name: "changePayPasspasswordSec",
    methods:{
      confirm(){
        this.$toast("确 认")
      }
    },
    components: {
      WebHeader
    }
  }
</script>
<style scoped lang="less">
  .van-cell-group {
    margin-top: 0.133334rem;

    .van-cell {
      color: #000;
      font-size: 0.226667rem;
      padding: 0 0.2rem;
      height: 0.586667rem;
      line-height: 0.586667rem;
    }

    .van-cell__right-icon {
      color: #666;
      font-weight: bold;
      line-height: 0.586667rem;
    }
  }

  .button_wrapper {
    padding: 0.333334rem 0.2rem 0.646667rem;;

    .van-button {
      display: block;
      width: 100%;
      height: 0.586667rem;
      line-height: 0.586667rem;
      background-color: #ff8202;
      color: #fff;
      font-size: 0.253334rem;
      border: 1px solid #d86d00;
      border-radius: 0.066667rem;
    }
  }
</style>
