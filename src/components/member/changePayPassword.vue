<template>
  <div style="height: 100vh;background-color: #f4f4f4;">
    <WebHeader></WebHeader>
    <div class="password-wrapper">
      <van-cell-group>
        <van-field v-model="phone" clearable label="手机号码" placeholder="请输入手机号码"/>
        <van-field v-model="sms" center clearable label="验证码" placeholder="请输入验证码">
          <van-button slot="button" size="small" type="primary">获取验证码</van-button>
        </van-field>
      </van-cell-group>
      <div class="button_wrapper">
        <van-button type="default" @click="next">下一步</van-button>
      </div>
    </div>
  </div>
</template>
<script>
  import WebHeader from '@/components/layout/header'

  export default {
    name: "changePayPasspassword",
    methods:{
      next(){
        this.$toast("下一步")
        this.$router.push("/changepaypasswordsec")
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

    /deep/.van-field__button{
      border-left: 1px solid #ebedf0;
      .van-button--primary{
        background-color: transparent;
        border: 0;
        color: #476df8;
        font-size: 0.226667rem;
      }
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
