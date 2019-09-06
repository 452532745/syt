<template>
  <div style="height: 100vh;background-color: #f4f4f4;">
    <WebHeader></WebHeader>
    <div class="password-wrapper">
      <van-cell-group class="user-wrapper">
        <van-cell value="个人中心" is-link>
          <template slot="title">
            <span class="custom-avatar">
              <img :src="user.avatar" alt="">
            </span>
            <span class="custom-title">
              <span class="name">{{user.name}}</span>
              <span class="phone">{{user.phone}}</span>
            </span>
          </template>
        </van-cell>
      </van-cell-group>
      <van-cell-group>
        <van-cell title="修改登录密码" is-link to="changepassword"/>
        <van-cell title="修改支付密码" is-link to="changepaypassword"/>
      </van-cell-group>
      <van-cell-group>
        <van-cell title="手势密码" is-link to="setgesturepassword"/>
      </van-cell-group>
      <div class="button_wrapper">
        <van-button type="default" @click="logout">退出登录</van-button>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import WebHeader from '@/components/layout/header'

  export default {
    name: "password",
    computed: {
      ...mapState({
        user: state => state.data.data.user
      })
    },
    methods:{
      logout(){
        this.$toast("退出登录")
      }
    },
    components: {
      WebHeader
    }
  }
</script>
<style scoped lang="less">
  .van-cell-group {
    margin-top: 0.133334rem;

    .van-cell {
      color: #000;
      font-size: 0.226667rem;
      padding: 0 0.2rem;
      height: 0.586667rem;
      line-height: 0.586667rem;
    }

    .van-cell__right-icon {
      color: #666;
      font-weight: bold;
      line-height: 0.586667rem;
    }
  }

  .user-wrapper {
    padding: 0.153334rem 0;

    .van-cell__title {
      display: flex;

      .custom-avatar {
        width: 0.586667rem;
        height: 0.586667rem;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 0.213334rem;

        img {
          width: 0.586667rem;
          height: 0.586667rem;
        }
      }

      .custom-title {

        .name {
          display: block;
          font-size: 0.186667rem;
          line-height: 0.36rem;
          color: #333;
        }

        .phone {
          display: block;
          font-size: 0.16rem;
          line-height: 0.16rem;
          color: #666;
        }
      }
    }

    .van-cell__value {
      span {
        font-size: 0.16rem;
        line-height: 0.586667rem;
      }
    }
  }

  .button_wrapper {
    padding: 0.333334rem 0.2rem 0.646667rem;;
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
</style>
