<template>
  <div style="height: 100vh;background-color: #f4f4f4;">
    <WebHeader></WebHeader>
    <div class="upload-wrapper">
      <h1>上传身份证正面和背面照片 完成实名验证</h1>
      <van-uploader class="front-upload" v-model="front" multiple :max-count="1" :after-read="afterRead">
        <img :src="frontUrl" alt="">
      </van-uploader>
      <van-uploader class="back-upload" v-model="back" multiple :max-count="1" :after-read="afterRead">
        <img :src="backUrl" alt="">
      </van-uploader>
    </div>
    <div class="button_wrapper">
      <div class="button-head">身份证照片要求</div>
      <div class="button-content">
        <p>开户人持有的本人有效二代身份证；</p>
        <p>拍摄时确保身份证边框完整，字体清晰，亮度均匀；</p>
      </div>
      <van-button type="default" @click="uploadPic">请上传身份证</van-button>
    </div>
  </div>
</template>

<script>
  import WebHeader from '@/components/layout/header'

  export default {
    name: "userUpdate",
    data() {
      return {
        front: [],
        back: [],
        frontUrl: require("../../assets/img/h01_07.jpg"),
        backUrl: require("../../assets/img/h01_09.jpg")
      }
    },
    methods: {
      afterRead(file) {
        console.log(file);
      },
      uploadPic(){
        this.$toast("身份证")
        this.$router.push("/addCard")
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

    .front-upload, .back-upload {
      background-color: #2b9bff;
      border-radius: 0.046667rem;
      overflow: hidden;

      img {
        width: 1.346667rem;
        height: 1.313334rem;
        line-height: 1.313334rem;
        padding: 0.333334rem 0.413334rem 0.24rem;
      }

      /deep/ .van-uploader__preview {
        margin: 0;
      }

      /deep/ .van-uploader__preview-image {
        width: auto;
        height: auto;
      }

      /deep/ img {
        width: 1.346667rem;
        height: 1.313334rem;
        line-height: 1.313334rem;
        padding: 0.333334rem 0.413334rem 0.24rem;
      }
    }
  }

  .button_wrapper {
    padding: 0 0.2rem;
    .button-head{
      font-size: 0.186667rem;
      color: #333;
      padding: 0.333334rem 0 0.2rem;
      border-bottom: 1px solid #c1c1c1;
    }
    .button-content{
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
