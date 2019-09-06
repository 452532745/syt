<template>
  <div style="height: 100vh;background-color: #f4f4f4;">
    <WebHeader></WebHeader>
    <div class="card-wrapper">
      <van-cell-group v-for="(item,index) in levels" :key="index" v-show="item.id == (parseInt(levelCount) + 1)">
        <van-cell class="level" title="用户等级:" :value="item.level"/>
        <van-cell title="收款分润:" :value="item.receiptProfit + '%'"/>
        <van-cell title="服务费分润:" :value="item.serviceProfit + '%'"/>
        <van-cell class="service" title="服务费:" :value="item.service + '元'"/>
      </van-cell-group>
      <div class="button_wrapper">
        <div class="tip">
          <van-icon name="info-o"/>
          <span class="tip-content">温馨提示：</span>
        </div>
        <div class="intro">您好！为了你更好的体验，用户升级之后分润更高、服务费更低.</div>
        <van-button type="default" @click="confirm">立即支付</van-button>
      </div>
    </div>
  </div>
</template>
<script>
  import WebHeader from '@/components/layout/header'
  import {mapState} from 'vuex'

  export default {
    name: "userLevel",
    data() {
      return {
        levels: [
          {
            id: 0,
            level: "普通用户",
            receiptProfit: "0.08",
            serviceProfit: "40.00",
            service: "198.00"
          },
          {
            id: 1,
            level: "金卡用户",
            receiptProfit: "0.08",
            serviceProfit: "40.00",
            service: "198.00"
          },
        ],
        show: false
      }
    },
    methods: {
      confirm() {
        this.$toast("银行卡")
        this.$router.push("/pay")
      }
    },
    computed: {
      ...mapState({
        levelCount: state => state.data.data.user.level
      })
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

    .level /deep/ .van-cell__value {
      color: #3d16f2;
    }

    .service /deep/ .van-cell__value {
      color: #f28734;
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
      padding: 0.4rem 0.2rem;

      .tip {
        font-size: 0.146667rem;
        color: #ff8202;

        .van-icon {
          font-size: 0.2133334rem;
          line-height: 0.2133334rem;
          vertical-align: middle;
        }

        .tip-content {
          height: 0.2133334rem;
          line-height: 0.2133334rem;
          vertical-align: middle;
        }
      }

      .intro {
        font-size: 0.146667rem;
        color: #7b7b7b;
        line-height: 0.333334rem;
        margin-bottom: 0.24rem;

        b {
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
