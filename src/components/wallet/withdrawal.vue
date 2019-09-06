<template>
  <div style="height: 100vh;background-color: #f4f4f4;">
    <WebHeader></WebHeader>
    <div class="deposit-wrapper">
      <div class="key-user">您好，{{user.name}}</div>
      <div class="deposit">
        <div class="key-title">累计提现</div>
        <div class="deposit-count">{{user.deposit}}</div>
      </div>
    </div>
    <div class="proceeds-wrapper">
      <van-swipe :initial-swipe="(user.proceeds.length)/2-1" :loop="false" :autoplay="0">
        <van-swipe-item v-for="(items,index) in user.proceeds" :key="index">
          <van-nav-bar class="proceeds-month" :title="items.month" left-text="<" right-text=">"/>
          <div class="proceeds-total">
            <div class="total-title">合计提现</div>
            <div class="total-amount">{{totalProceeds}}</div>
          </div>
          <van-cell-group>
            <van-cell v-for="(item,index) in items.proceedsItem" :key="index" :title="item.name"
                      :value="`-${item.amount} 元`"
                      :label="item.time" is-link/>
          </van-cell-group>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import WebHeader from '@/components/layout/header'

  export default {
    name: "withdrawal",
    data() {
      return {
        totalProceeds: "3000.00"
      }
    },
    computed: {
      ...mapState({
        user: state => state.data.data.user,
        money: state => state.money
      })
    },
    components: {
      WebHeader
    }
  }
</script>
<style scoped lang="less">
  .deposit-wrapper {
    padding: 0 0.2rem 0.266667rem;
    background-image: url("../../assets/img/b01_02.png");
    background-color: #f4f4f4;
    background-repeat: no-repeat;
    background-size: 100% auto;

    .key-user {
      font-size: 0.186667rem;
      color: #fff;
      padding-top: 0.266667rem;
      padding-bottom: 0.2rem;
    }

    .deposit {
      text-align: center;
      background-color: #fff;
      padding: 0.4rem;

      .key-title {
        font-size: 0.186667rem;
        color: #37383b;
        margin-bottom: 0.2rem;
      }

      .deposit-count {
        font-size: 0.6rem;
        color: #ff8202;
        margin-bottom: 0.233334rem;
      }
    }
  }

  .proceeds-wrapper {
    padding: 0 0.2rem 0.646667rem;;

    .van-swipe {
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0.586667rem;;
        width: 0.133334rem;
        height: 0.133334rem;
        background-color: #f4f4f4;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        z-index: 2;
      }

      &::after {
        content: "";
        position: absolute;
        right: 0;
        top: 0.586667rem;;
        width: 0.133334rem;
        height: 0.133334rem;
        background-color: #f4f4f4;
        transform: translate(50%, -50%);
        border-radius: 50%;
        z-index: 2;
      }
    }

    .proceeds-month {
      height: 0.586667rem;
      line-height: 0.586667rem;
      font-size: 0.213334rem;
      color: #333;
      text-align: center;
      background-color: #eaeaea;

      .van-nav-bar__left, .van-nav-bar__right {
        .van-nav-bar__text {
          font-size: 0.16rem;
          color: #666;
        }
      }
    }

    .proceeds-total {
      padding: 0.186667rem;
      text-align: center;
      background-color: #fff;

      .total-title {
        font-size: 0.146667rem;
        color: #9b9b9b;
        margin-bottom: 0.14rem;
      }

      .total-amount {
        font-size: 0.28rem;
        color: #ff8202;
      }
    }
  }

  /deep/ .van-swipe__indicators {
    opacity: 0;
  }

  .van-cell {
    padding: 0.246667rem 0.233334rem;

    .van-cell__title {
      font-size: 0.233334rem;
      color: #333;

      span {
        margin-bottom: 0.113334rem;
      }
    }

    .van-cell__label {
      font-size: 0.16rem;
      color: #9b9b9b;
    }
    .van-cell__value{
      height: 0.6rem;
      line-height: 0.6rem;
      font-size: 0.186667rem;
      color: #ff8202;
    }
    .van-icon{
      font-size: 0.186667rem;
      font-weight: bold;
      color: #666;
      line-height: 0.6rem;
      font-size: 0.186667rem;
    }
  }
</style>
