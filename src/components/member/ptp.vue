<template>
  <div style="height: 100vh;background-color: #ff8202;">
    <WebHeader></WebHeader>
    <div class="ptp-wrapper">
      <div class="ptp-body">
        <div class="key-title">邀请好友扫描你的二维码</div>
        <div class="ptp-content">
          <div class="qrcode">
            <img :src="WeChatQrCode" alt="">
          </div>
          <div class="button_wrapper">
            <van-button type="default" @click="invite">马上邀请</van-button>
          </div>
        </div>
        <p>邀请好友收款&nbsp;&nbsp;&nbsp;&nbsp;TA省钱你赚钱</p>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import WebHeader from '@/components/layout/header'

  export default {
    name: "ptp",
    computed: {
      ...mapState({
        WeChatQrCode: state => state.data.data.WeChatQrCode
      })
    },
    methods: {
      invite() {
        this.$toast("邀请")
      }
    },
    components: {
      WebHeader
    }
  }
</script>
<style scoped lang="less">
  .ptp-wrapper {
    padding: 0.4rem 0.2rem 0.646667rem;;

    .ptp-body {
      position: relative;

      > p {
        font-size: 0.16rem;
        color: #fff;
        text-align: center;
        margin-top: 0.266667rem;
      }

      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0.853334rem;
        width: 0.12rem;
        height: 0.12rem;
        background-color: #ff8202;
        border-radius: 50%;
        transform: translate(-50%, -50%);
      }

      &::after {
        content: "";
        position: absolute;
        right: 0;
        top: 0.853334rem;
        width: 0.12rem;
        height: 0.12rem;
        background-color: #ff8202;
        border-radius: 50%;
        transform: translate(50%, -50%);
      }
    }

    .key-title {
      font-size: 0.213334rem;
      color: #333;
      background-color: #fff;
      text-align: center;
      height: 0.853334rem;
      line-height: 0.853334rem;
      border-bottom: 1px solid #e5e5e5;
    }

    .ptp-content {
      padding: 0.4rem 0.2rem 0.586667rem;
      background-color: #fff;

      .qrcode {
        width: 2.986667rem;
        height: 2.986667rem;
        margin: 0 auto 0.306667rem;

        img {
          width: 100%;
        }
      }
    }

    .button_wrapper {
      .van-button {
        display: block;
        width: 3.333334rem;
        height: 0.586667rem;
        line-height: 0.586667rem;
        background-color: #ff8202;
        color: #fff;
        font-size: 0.253334rem;
        border: 1px solid #d86d00;
        border-radius: 0.066667rem;
        margin: 0 auto;
      }
    }
  }
</style>
