<template>
  <div>
    <WebHeader></WebHeader>
    <div class="service-title">
      <p>请通过以下方式联系我们<br>为您更好的服务</p>
    </div>
    <div class="phone-wrapper">
      <div class="phone-title">客服电话</div>
      <div class="phone-body">400-800-3039</div>
    </div>
    <div class="service-wrapper">
      <div class="service-body">
        <div class="service-head"><h1>微信公众号：立德信</h1></div>
        <div class="service-content">
          <div class="qrcode">
            <img :src="WeChatQrCode" alt="">
          </div>
        </div>
        <div class="service-foot">请使用微信扫描二维码</div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import WebHeader from '@/components/layout/header'

  export default {
    name: "service",
    computed: {
      ...mapState({
        WeChatQrCode: state => state.data.data.WeChatQrCode
      })
    },
    components: {
      WebHeader
    }
  }
</script>
<style scoped lang="less">
  .service-title {
    font-size: 0.186667rem;
    line-height: 0.293334rem;
    color: #fff;
    padding: 0.373334rem 0.2rem;
    background-color: #ff8202;

    p {
      height: 0.586667rem;
      padding-left: 0.773334rem;
      background: url("../../assets/img/g01_03.png") no-repeat left center;
      background-size: 0.586667rem 0.586667rem;
    }
  }

  .phone-wrapper {
    padding: 0.333334rem 0.2rem 0.4rem;
    text-align: center;
    border-bottom: 0.133334rem solid #f4f4f4;

    .phone-title {
      width: 1.066667rem;
      height: 0.253334rem;
      line-height: 0.253334rem;
      font-size: 0.186667rem;
      color: #666;
      padding-left: 0.333334rem;
      background: url("../../assets/img/g01_07.png") no-repeat left center;
      background-size: 0.253334rem 0.253334rem;
      margin: 0 auto 0.133334rem;
    }

    .phone-body {
      font-size: 0.28rem;
      color: #333;
    }
  }

  .service-wrapper {
    padding: 0.466667rem 0.2rem 0.646667rem;;

    .service-head,.service-foot{
      font-size: 0.213334rem;
      color: #333;
      text-align: center;
    }

    .service-head{
      margin-bottom: 0.2rem;
      h1{
        width: 2rem;
        height: 0.253334rem;
        line-height: 0.253334rem;
        padding-left: 0.32rem;
        margin: 0 auto;
        background: url("../../assets/img/g01_11.png") no-repeat left center;
        background-size: 0.253334rem 0.253334rem;
      }
    }

    .service-content {
      background-color: #fff;

      .qrcode {
        width: 2.986667rem;
        height: 2.986667rem;
        margin: 0 auto 0.253334rem;

        img {
          width: 100%;
        }
      }
    }
  }
</style>
