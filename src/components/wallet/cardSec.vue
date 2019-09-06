<template>
  <div style="height: 100vh;background-color: #f4f4f4;">
    <WebHeader></WebHeader>
    <div class="pay-wrapper">
      <div class="card-wrapper" v-for="(item,index) in user.card">
        <van-cell :title="item.address" is-link @click="handleCard(index)"/>
        <div class="card-content">
          <div class="card-id">****&nbsp;&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;&nbsp;{{item.id
            | secretId}}
          </div>
          <div class="card-date">{{item.date}}</div>
        </div>
      </div>
      <div class="button_wrapper">
        <van-button type="default" to="/addcard">使用新银行卡</van-button>
      </div>
    </div>
    <van-action-sheet
      :title="`您可对 ${user.card[cardIndex].bank} 尾号 ${(user.card[cardIndex].id).substring(user.card[cardIndex].id.length - 4)} 储存卡 进行操作`"
      v-model="show" cancel-text="取消">
      <van-cell class="del" value="删除" />
      <van-cell class="change" value="修改" />
    </van-action-sheet>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import WebHeader from '@/components/layout/header'

  export default {
    name: "cardSec",
    data() {
      return {
        cardIndex: 0,
        show: false
      }
    },
    computed: {
      ...mapState({
        user: state => state.data.data.user
      })
    },
    filters: {
      secretId: function (item) {
        return item.substring(item.length - 4)
      }
    },
    methods: {
      handleCard(index) {
        this.cardIndex = index
        this.show = true
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
    padding: 0.266667rem 0.2rem 0.646667rem;;

    .card-wrapper {
      border-radius: 0.066667rem;
      overflow: hidden;
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
      margin-bottom: 0.266667rem;

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

      &:nth-child(3n+2) {
        .van-cell {
          background-color: #f06d75;
        }
      }

      &:nth-child(3n+3) {
        .van-cell {
          background-color: #33bcac;
        }
      }
    }

    .button_wrapper {
      margin-top: 0.4rem;

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

  .van-popup{
    .del{
      .van-cell__value--alone{
        color: #ff0202;
      }
    }
    .change{
      .van-cell__value--alone{
        color: #476df8;
      }
    }
    .van-cell__value--alone{
      text-align: center;
    }
  }
</style>
