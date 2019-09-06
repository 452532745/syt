<template>
  <div>
    <WebHeader></WebHeader>
    <div class="deposit-wrapper">
      <div class="key-user">您好，{{user.name}}</div>
      <div class="deposit">
        <div class="key-title">账户余额</div>
        <div class="deposit-count">{{user.deposit}}</div>
        <div class="button_wrapper">
          <van-button type="default" @click="confirm">申请提现</van-button>
        </div>
      </div>
    </div>
    <div class="cell" v-model="activeKey" v-if="sidebar">
      <van-cell v-for="(item,index) in sidebar" :key="index" :title="item.title" is-link :to="item.path"
                :icon="item.avatar">
      </van-cell>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import WebHeader from '@/components/layout/header'

  export default {
    name: "wallet",
    data() {
      return {
        activeKey: 0,
        sidebar: [
          {
            "name": "proceeds",
            "title": "收款记录",
            "path": "/proceeds",
            "avatar": "http://4g.lovelesi.com/uploads/allimg/img/b01_17.png"
          },
          {
            "name": "promote",
            "title": "推广分润",
            "path": "/promote",
            "avatar": "http://4g.lovelesi.com/uploads/allimg/img/b01_20.png"
          },
          {
            "name": "withdrawal",
            "title": "提现记录",
            "path": "/withdrawal",
            "avatar": "http://4g.lovelesi.com/uploads/allimg/img/b01_22.png"
          },
          {
            "name": "card",
            "title": "我的银行卡",
            "path": "/card",
            "avatar": "http://4g.lovelesi.com/uploads/allimg/img/b01_24.png"
          },
        ]
      }
    },
    computed: {
      ...mapState({
        user: state => state.data.data.user,
        money: state => state.money
      })
    },
    methods: {
      confirm() {
        this.$router.push("/payfor");
      }
    },
    components: {
      WebHeader
    }
  }
</script>
<style scoped lang="less">
  .deposit-wrapper {
    padding: 0 0.2rem 0.4rem;
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
        margin-bottom: 0.4rem;
      }

      .button_wrapper {
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
  }

  .cell {
    padding-bottom: 0.646667rem;

    .van-cell {
      font-size: 0.226667rem;
      padding: 0 0.2rem;
      height: 0.586667rem;
      line-height: 0.586667rem;

      .van-icon {
        height: 0.586667rem;
        line-height: 0.586667rem;
      }

      .van-cell__left-icon {
        font-size: 0.293334rem;
        margin-right: 0.266667rem;
      }

      .van-cell__right-icon {
        font-size: 0.293334rem;
        font-weight: bold;
        color: #9b9b9b;
      }
    }
  }
</style>
