<template>
  <div>
    <van-nav-bar :title="headerTitle" left-arrow>
      <van-icon name="arrow-left" slot="left" @click="back"/>
      <van-icon name="ellipsis" slot="right" @click="showShare"/>
    </van-nav-bar>
    <van-action-sheet v-model="toggleShare" cancel-text="取消">
      <div class="wrapper">
        <van-cell v-for="(item,index) in share" :key="index" @click="link(item.url)">
          <span>{{item.name}}</span>
          <img slot="icon" slot-scope="props" :src="item.avatar">
        </van-cell>
      </div>
    </van-action-sheet>
  </div>
</template>
<script>
  import {mapState} from 'vuex'

  export default {
    name: "header",
    data() {
      return {
        active: 0,
        toggleShare: false
      }
    },
    computed: {
      ...mapState({
        headerTitle: state => state.headerTitle,
        share: state => state.data.data.share
      })
    },
    methods: {
      back() {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
      },
      showShare() {
        this.toggleShare = true
      },
      link(url){
        this.$toast(url)
      }
    }
  }
</script>
<style scoped lang="less">
  .van-nav-bar {
    background-color: #393a3e;
    color: #fff;
    height: 0.586667rem;
    line-height: 0.586667rem;

    .van-icon {
      color: #fff;
      font-size: 0.36rem;
    }

    .van-nav-bar__title {
      color: #fff;
      font-size: 0.24rem;
    }

    .van-nav-bar__left {
      left: 0.2rem;
    }

    .van-nav-bar__right {
      right: 0.2rem;
    }

    &::after {
      border: 0;
    }
  }

  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    width: 3.6rem;
    z-index: 3;
    height: 100vh;
    background-color: #fff;
    transform: translateX(-100%);
    transition: all 0.5s;

    &.enter {
      transform: translateX(0);
    }

    .member {
      background-color: #476df8;
      background-image: url("../../assets/img/a04_06.jpg");
      background-repeat: no-repeat;
      background-position: center bottom;
      background-size: 100% auto;
      padding: 0.2rem 0.2rem 0.15rem;

      .avatar {
        text-align: center;
        line-height: 0.853334rem;
        margin-bottom: 0.133334rem;

        img {
          width: 0.853334rem;
          height: 0.853334rem;
          border-radius: 50%;
        }
      }

      .content {
        font-size: 0.213334rem;
        color: #fff;
        line-height: 0.32rem;
        border-bottom: 1px solid #adbdf9;

        .title, .level {
          text-align: center;
        }

        .upgrade {
          width: 0.933334rem;
          height: 0.266667rem;
          line-height: 0.266667rem;
          background-color: #ff8202;
          font-size: 0.133333rem;
          border: 1px solid #d86d00;
          margin: 0.08rem auto 0.2rem;
          border-radius: 0.053334rem;

          a {
            color: #fff;
          }
        }
      }

      .earning {
        display: flex;

        .earning-item {
          display: flex;
          flex: 1;
          flex-direction: column;
          justify-content: center;
          color: #fff;
          padding-top: 0.173334rem;

          .earn-title {
            font-size: 0.16rem;
            margin-bottom: 0.133334rem;
          }

          .earn-num {
            font-size: 0.28rem;
          }
        }
      }
    }

    .cell {
      padding: 0.266667rem 0.2rem 0;

      .van-cell {
        font-size: 0.213334rem;
        color: #333;
        padding: 0.133334rem 0;

        &::after {
          left: 0;
          border-color: #e5e5e5;
        }
      }
    }
  }

  .shade {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.75);
  }

  .van-popup {
    .wrapper {
      display: flex;
    }

    .van-cell {
      display: block;
      background-color: #f7f7f7;
      text-align: center;
      padding: 0.133334rem 0.2rem 0;
      img{
        max-width: 100%;
        width: 0.60rem;
        height: 0.60rem;
      }
      .van-cell__value{
        text-align: center;
      }
    }
  }
</style>
