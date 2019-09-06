<template>
  <div style="height: 100vh;background-color: #f4f4f4;">
    <WebHeader></WebHeader>
    <div class="realname-wrapper">
      <van-cell-group>
        <van-field v-model="name" clearable label="真实姓名" placeholder="请输入真实姓名"/>
        <van-field v-model="identityCard" clearable label="身份证号" placeholder="请输入身份证号"/>
        <van-cell title="城市选择" is-link :value="cityAddress" @click="areaSelect()"/>
        <van-field type="textarea" v-model="address" clearable label="详细地址" placeholder="请输入详细地址"/>
      </van-cell-group>
      <div class="button_wrapper">
        <div class="tip">
          <van-icon name="info-o"/>
          <span class="tip-content">温馨提示：</span>
        </div>
        <div class="intro">您收款和分润提现的资金都将结算到此银行卡，<b>请绑定储存卡！</b></div>
        <van-button type="default" @click="next">下一步</van-button>
      </div>
    </div>
    <van-action-sheet v-model="show">
      <van-area value="440303" :area-list="areaList" v-show="show" @cancel="show=fal
      se" @confirm="onConfirm"
                @change="onChange"/>
    </van-action-sheet>
  </div>
</template>
<script>
  import areaList from '@/api/area';
  import WebHeader from '@/components/layout/header'

  export default {
    name: "realName",
    data() {
      return {
        areaList: areaList,
        name: "",
        identityCard: "",
        address: "",
        cityAddress: "请选择所在城市",
        cityModel: "广东省 深圳市 罗湖区",
        show: false
      }
    },
    methods: {
      areaSelect() {
        this.show = true
      },
      chooseBank(index) {
        this.show = false
      },
      next() {
        this.$toast("下一步")
        this.$router.push("/userupdate")
      },
      onChange(picker, value, index) {
        let areaName = ''
        for (let i = 0; i < value.length; i++) {
          areaName = areaName + value[i].name + ' '
        }
        this.cityModel = areaName
      },
      onConfirm() {
        this.cityAddress = this.cityModel
        this.show = false
      }
    },
    components: {
      WebHeader
    }
  }
</script>
<style scoped lang="less">

  .realname-wrapper {
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

  .van-picker {
    /deep/ .van-ellipsis {
      min-height: auto;
      line-height: 44px;
      text-align: center;
      border: 0;
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
</style>
