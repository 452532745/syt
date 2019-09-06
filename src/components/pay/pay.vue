<template>
  <div>
    <WebHeader></WebHeader>
    <div class="pay-wrapper">
      <div class="card-wrapper">
        <van-cell :title="user.card[cardIndex].address" is-link @click="show = true"/>
        <div class="card-content">
          <div class="card-id">****&nbsp;&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;&nbsp;{{user.card[cardIndex].id
            | secretId}}
          </div>
          <div class="card-date">{{user.card[cardIndex].date}}</div>
        </div>
      </div>
    </div>
    <div class="money-wrapper">
      <div class="key-title">支付金额</div>
      <div class="key-money">￥{{money}}</div>
      <van-cell-group>
        <van-cell title="姓名" :value="user.name"/>
        <van-cell title="身份证号" :value="user.identity"/>
      </van-cell-group>
      <div class="button_wrapper">
        <van-button type="default" @click="pay">确认支付</van-button>
      </div>
    </div>
    <van-action-sheet v-model="show" v-show="user.card" title="选择信用卡付款">
      <van-swipe-cell v-for="(item,index) in user.card" :key="index">
        <van-cell is-link @click="chooseCard(index)">
          <div class="bank">{{item.bank}}</div>
          <div class="bank-id">尾号{{item.id | secretId}}</div>
          <div class="bank-date">{{item.date}}</div>
        </van-cell>
        <template slot="right">
          <van-button square type="danger" text="删除" @click="deteleCard"/>
        </template>
      </van-swipe-cell>
      <div class="button_wrapper">
        <van-button type="default" to="/addcard">使用新银行卡</van-button>
      </div>
    </van-action-sheet>

    <van-dialog v-model="showHandle" title="是否删除信用卡" show-cancel-button @confirm="confirm" @cancel="cancel">
    </van-dialog>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import WebHeader from '@/components/layout/header'

  export default {
    name: "pay",
    data() {
      return {
        userDatas: [],
        cardIndex: 0,
        show: false,
        showHandle: false
      }
    },
    computed: {
      ...mapState({
        user: state => state.data.data.user,
        money: state => state.money
      })
    },
    filters: {
      secretId: function (item) {
        return item.substring(item.length - 4)
      }
    },
    methods: {
      pay() {
        this.$toast('支付');
      },
      chooseCard(index) {
        this.cardIndex = index;
        this.show = false;
      },
      deteleCard() {
        this.showHandle = true
      },
      confirm(){
        this.$toast("已删除")
      },
      cancel(){
        this.$toast("已取消")
      }
    },
    components: {
      WebHeader
    }
  }
</script>
<style scoped lang="less">
  .pay-wrapper {
    background-color: #f4f4f4;
    padding: 0.533334rem 0.2rem;

    .card-wrapper {
      border-radius: 0.066667rem;
      overflow: hidden;
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);

      .van-cell {
        background-color: #476df8;
        font-size: 0.253334rem;
        line-height: 0.253334rem;
        color: #fff;
        padding: 0.133334rem 0.2rem;

        .van-cell__right-icon {
          font-size: 0.253334rem;
          color: #fff;
        }
      }

      .card-content {
        background-color: #fff;
        font-size: 0.213334rem;
        padding: 0.233334rem;
        line-height: 0.36rem;
        overflow: hidden;
        color: #333;

        .card-id {
          float: left;
          padding-left: 0.733334rem;
          background: url("../../assets/img/card.png") no-repeat left center;
          background-size: 0.553334rem auto;
        }

        .card-date {
          float: right;
          color: #9b9b9b;
        }
      }
    }
  }

  .money-wrapper {
    text-align: center;

    .key-title {
      font-size: 0.28rem;
      color: #333;
      margin-top: 0.4rem;
    }

    .key-money {
      font-size: 0.6rem;
      color: #333;
      margin-top: 0.2rem;
    }

    .van-cell-group {
      margin-top: 0.44rem;

      .van-cell {
        padding: 0 0.2rem;
        height: 0.586667rem;
        line-height: 0.586667rem;
        text-align: left;

        .van-cell__title {
          flex: 1;
          color: #000;
        }

        .van-cell__value {
          flex: 3;
          text-align: left;
          color: #7b7b7b;
        }

        &:not(:last-child)::after {
          border-color: #e5e5e5;
          left: 0;
        }
      }

      &[class*=van-hairline]::after {
        border-color: #e5e5e5;
      }
    }
  }

  .button_wrapper {
    padding: 0.4rem 0.2rem 0.646667rem;;

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

  .van-swipe-cell {

    .van-cell__right-icon {
      height: 0.586667rem;
      line-height: 0.586667rem;
      margin-left: 0.333334rem;
      color: #666;
      font-weight: bold;
    }

    .van-action-sheet__header {
      font-size: 0.253334rem;
      height: 0.586667rem;
      line-height: 0.586667rem;
    }

    .van-cell {
      height: 0.586667rem;
      padding: 0 0.2rem;
    }

    .van-button {
      height: 0.586667rem;
      line-height: 0.586667rem;
      font-size: 0.186667rem;
      float: left;
    }

    .bank {
      line-height: 0.586667rem;
      font-size: 0.226667rem;
      float: left;
    }

    .bank-id {
      line-height: 0.586667rem;
      font-size: 0.213334rem;
      float: left;
      color: #7b7b7b;
      margin-left: 0.333334rem;
    }

    .bank-date {
      line-height: 0.586667rem;
      font-size: 0.213334rem;
      float: right;
      color: #7b7b7b;
    }
  }
</style>

