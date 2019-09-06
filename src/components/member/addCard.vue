<template>
  <div style="height: 100vh;background-color: #f4f4f4;">
    <WebHeader></WebHeader>
    <div class="upload-wrapper">
      <h1>上传信用卡照片，认证本人信用</h1>
      <div class="card-upload">
        <van-uploader v-model="cardList" multiple :max-count="1" :after-read="afterRead">
          <img :src="cardUrl" alt="">
        </van-uploader>
      </div>
    </div>
    <div class="card-wrapper">
      <van-cell-group>
        <van-field v-model="cardid" clearable label="信用卡号" placeholder="请输入信用卡号"/>
        <van-cell title="信用卡归属行" is-link :value="cardBank" @click="handleCard()"/>
      </van-cell-group>
      <van-cell-group class="phone-wrapper">
        <van-field v-model="phone" clearable label="银行预留手机号" placeholder="请输入预留手机号码"/>
      </van-cell-group>
      <div class="button_wrapper">
        <div class="tip">
          <van-icon name="info-o"/>
          <span class="tip-content">温馨提示：</span>
        </div>
        <div class="intro">您收款和分润提现的资金都将结算到此银行卡，<b>请绑定储存卡！</b></div>
        <van-button type="default" @click="uploadPic">确 认</van-button>
      </div>
    </div>
    <van-action-sheet title="归属行" v-model="show" cancel-text="取消">
      <div class="wrapper">
        <van-cell v-for="(item,index) in banks" :key="index" :class="item.shortName" :value="item.name"
                  @click="chooseBank(index)"/>
      </div>
    </van-action-sheet>
  </div>
</template>
<script>
  import WebHeader from '@/components/layout/header'

  export default {
    name: "addCard",
    data() {
      return {
        cardid: "",
        cardBank: "请选择",
        phone: "",
        show: false,
        cardList: [],
        cardUrl: require("../../assets/img/i02_03.jpg"),
        banks: [
          {
            name: "中国工商银行",
            shortName: "icbc"
          },
          {
            name: "中国农业银行",
            shortName: "abc"
          },
          {
            name: "中国银行",
            shortName: "boc"
          },
          {
            name: "中国建设银行",
            shortName: "ccb"
          },
          {
            name: "中国建设银行1",
            shortName: "ccb1"
          },
          {
            name: "中国建设银行2",
            shortName: "ccb2"
          },
          {
            name: "中国建设银行3",
            shortName: "ccb3"
          },
          {
            name: "中国建设银行4",
            shortName: "ccb4"
          },
          {
            name: "中国建设银行5",
            shortName: "ccb5"
          },
          {
            name: "中国建设银行6",
            shortName: "ccb6"
          },
          {
            name: "中国建设银行7",
            shortName: "ccb7"
          },
        ]
      }
    },
    methods: {
      afterRead(file) {
        console.log(file);
      },
      uploadPic() {
        this.$toast("身份证")
        this.$router.push("/cashier")
      },
      handleCard() {
        this.show = true
      },
      chooseBank(index) {
        this.cardBank = this.banks[index].name
        this.show = false
      }
    },
    components: {
      WebHeader
    }
  }
</script>
<style scoped lang="less">
  .upload-wrapper {
    padding: 0.4rem 0.2rem;
    background-color: #476df8;

    h1 {
      font-size: 0.186667rem;
      color: #fff;
      text-align: center;
      margin-bottom: 0.266667rem;
    }

    .card-upload {
      text-align: center;

      .van-uploader {
        background-color: #2b9bff;
        border-radius: 0.046667rem;
        overflow: hidden;
      }

      img {
        width: 1.933334rem;
        height: 1.186667rem;
        line-height: 1.186667rem;
        padding: 0.253334rem 0.346667rem;
      }

      /deep/ .van-uploader__preview {
        margin: 0;
      }

      /deep/ .van-uploader__preview-image {
        width: auto;
        height: auto;
      }

      /deep/ img {
        width: 1.933334rem;
        height: 1.186667rem;
        line-height: 1.186667rem;
        padding: 0.253334rem 0.346667rem;
      }
    }
  }

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

  .button_wrapper {
    padding: 0 0.2rem;

    .button-head {
      font-size: 0.186667rem;
      color: #333;
      padding: 0.333334rem 0 0.2rem;
      border-bottom: 1px solid #c1c1c1;
    }

    .button-content {
      font-size: 0.146667rem;
      color: #666;
      line-height: 0.24rem;
      margin-top: 0.2rem;
      margin-bottom: 0.4rem;
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
      margin: 0 auto;
    }
  }

  .van-action-sheet__content {
    height: 2.93334rem;
    overflow: scroll;

    .van-cell {
      padding: 0 0.2rem;
      height: 0.586667rem;
      line-height: 0.586667rem;

      /deep/ span {
        font-size: 0.186667rem;
      }
    }
  }
</style>
