<template>
  <div style="height: 100vh;background-color: #f4f4f4;">
    <WebHeader></WebHeader>
    <div class="card-wrapper">
      <van-cell-group>
        <van-field v-model="username" clearable label="持卡人姓名" placeholder="请输入持卡人姓名"/>
        <van-field v-model="cardid" clearable label="银行卡号" placeholder="请输入银行卡号"/>
        <van-cell title="发卡行" is-link value="请选择" to="cardsec"/>
      </van-cell-group>
      <van-cell-group class="phone-wrapper">
        <van-field v-model="phone" clearable label="银行预留手机号" placeholder="请输入预留手机号码"/>
      </van-cell-group>
      <div class="button_wrapper">
        <div class="tip">
          <van-icon name="info-o" />
          <span class="tip-content">温馨提示：</span>
        </div>
        <div class="intro">您收款和分润提现的资金都将结算到此银行卡，<b>请绑定储存卡！</b></div>
        <van-button type="default" @click="confirm">确 认</van-button>
      </div>
    </div>
  </div>
</template>
<script>
  import WebHeader from '@/components/layout/header'

  export default {
    name: "card",
    data() {
      return {
        username: "",
        cardid: "",
        phone: "",
        show: false
      }
    },
    methods:{
      confirm(){
        this.$toast("银行卡")
      }
    },
    components: {
      WebHeader
    }
  }
</script>
<style scoped lang="less">
  .card-wrapper {
    .van-cell {
      height: 0.586667rem;
      line-height: 0.586667rem;
      padding: 0 0.2rem;
    }

    /deep/ .van-cell__title {
      font-size: 0.226667rem;
      color: #333;
      flex: none;
      width: 1.786667rem;
    }

    /deep/ .van-cell__value {
      font-size: 0.226667rem;
      color: #7b7b7b;
      text-align: left;
    }

    .van-cell-group .van-icon {
      font-size: 0.186667rem;
      font-weight: bold;
      color: #666;
      line-height: 0.6rem;
      font-size: 0.186667rem;
    }

    .phone-wrapper {
      margin-top: 0.066667rem;
    }

    .button_wrapper {
      padding: 0.4rem 0.2rem 0.646667rem;;

      .tip{
        font-size: 0.146667rem;
        color: #ff8202;
        .van-icon{
          font-size: 0.2133334rem;
          line-height: 0.2133334rem;
          vertical-align: middle;
        }
        .tip-content{
          height: 0.2133334rem;
          line-height: 0.2133334rem;
          vertical-align: middle;
        }
      }
      .intro{
        font-size: 0.146667rem;
        color: #7b7b7b;
        line-height: 0.333334rem;
        margin-bottom: 0.24rem;
        b{
          color: #476df8;
        }
      }
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
  }
</style>
