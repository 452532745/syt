<template>
  <div style="height: 100vh;background-color: #f4f4f4;">
    <WebHeader></WebHeader>
    <div class="user-wrapper">
      <div class="key-user">您好，{{user.name}}</div>
      <div class="user">
        <div class="key-title">我的用户</div>
        <div class="user-count">{{user.mine.length}}<sub>人</sub></div>
      </div>
    </div>
    <div class="user-list">
      <van-row class="list-head">
        <van-col span="8">直属用户</van-col>
        <van-col span="8">用户级别</van-col>
        <van-col span="8">旗下用户</van-col>
      </van-row>
      <van-row class="list-item" v-for="(item,index) in user.mine" :key="index">
        <van-col span="8">{{item.person}}</van-col>
        <van-col span="8" :class="{vip:item.level == '会员用户'}">{{item.level}}</van-col>
        <van-col span="8">{{item.its}}</van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import WebHeader from '@/components/layout/header'

  export default {
    name: "user",
    computed: {
      ...mapState({
        user: state => state.data.data.user
      })
    },
    components: {
      WebHeader
    }
  }
</script>
<style scoped lang="less">
  .user-wrapper {
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

    .user {
      text-align: center;
      background-color: #fff;
      padding: 0.4rem;

      .key-title {
        font-size: 0.186667rem;
        color: #37383b;
        margin-bottom: 0.2rem;
      }

      .user-count {
        font-size: 0.6rem;
        color: #ff8202;
        margin-bottom: 0.2rem;

        sub {
          font-size: 0.186667rem;
          color: #666;
        }
      }
    }
  }

  .user-list{
    padding-bottom: 0.646667rem;

    .list-head{
      font-size: 0.213334rem;
      color: #666;
      height: 0.586667rem;
      line-height: 0.586667rem;
      background-color: #fafafa;
      padding-left: 0.426667rem;
      border-bottom: 1px solid #e5e5e5;
    }
    .list-item{
      font-size: 0.186667rem;
      color: #7b7b7b;
      height: 0.586667rem;
      line-height: 0.586667rem;
      padding-left: 0.426667rem;
      border-bottom: 1px solid #e5e5e5;
      background-color: #fff;
      .van-col:first-child{
        color: #000;
      }
      .van-col.vip{
        color: #ff8202;
      }
    }
  }
</style>
