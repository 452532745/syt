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
      <van-cell-group>
        <van-field v-model="depositCount" clearable label="提现金额(元)" :placeholder="depositCount"/>
        <van-cell title="提现手续费(元)" :value="serviceCount"/>
        <van-cell title="实际可到账(元)"
                  :value="parseFloat(depositCount) - parseFloat(serviceCount) > 0 ? parseFloat(depositCount) - parseFloat(serviceCount) : 0"/>
      </van-cell-group>
      <div class="button_wrapper">
        <van-button type="default" @touchstart.stop="isDeposit">确定提现</van-button>
        <p>预计到账时间:<b>2019.07.05 23:59:59</b>前</p>
      </div>
    </div>
    <van-action-sheet v-model="show" v-show="user.card" title="选择储蓄卡">
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
    <div class="password-keyboard" v-show="showDeposit">
      <!--密码输入-->
      <van-field class="password-input" v-show="showPassword" type="password" label="密码:" readonly :value="value"/>
      <!--数字键盘-->
      <van-number-keyboard v-model="value" :show="showDeposit" close-button-text="取消" @blur="onBlur"
                           @input="onInput" @delete="onDelete"/>
      <van-overlay :show="showDeposit"/>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import WebHeader from '@/components/layout/header'

  export default {
    name: "pay",
    data() {
      return {
        depositCount: "0.00",
        serviceCount: "2.00",
        truthCount: "0",
        userDatas: [],
        cardIndex: 0,
        value: '',
        show: false,
        showPassword:false,
        showDeposit: false,
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
      confirm() {
        this.$toast("已删除")
      },
      cancel() {
        this.$toast("已取消")
      },
      isDeposit() {
        this.showDeposit = true
      },
      onInput(value) {
        this.showPassword = true
      },
      onDelete() {
        this.$toast('退格');
      },
      onBlur(){
        this.showDeposit = false
        this.showPassword = false
        this.value = ""
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
    padding-bottom: 0.646667rem;
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
    padding: 0.4rem 0.2rem;

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

    p {
      font-size: 0.186667rem;
      color: #ccc;
      margin-top: 0.2rem;

      b {
        color: #ff8202;
      }
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

  .password-keyboard {

    .password-input {
      position: fixed;
      bottom: 2.88rem;
      height: 0.72rem;
      line-height: 0.72rem;
      padding: 0 0.2rem;
      z-index: 101;
      max-width: 80%;

      /deep/ .van-cell__title {
        width: auto;
        font-size: 0.24rem;
        height: 0.72rem;
        line-height: 0.72rem;
        margin-right: 15px;
      }

      /deep/ .van-cell__value {
        font-size: 0.24rem;
        height: 0.72rem;
        line-height: 0.72rem;
      }
    }

    .van-number-keyboard {
      /deep/ .van-number-keyboard__title {
        height: 0.72rem;
        line-height: 0.72rem;
      }

      /deep/ .van-number-keyboard__body {
        font-size: 0;

        .van-key {
          height: 0.72rem;
          line-height: 0.72rem;
        }
      }
    }
  }
</style>

