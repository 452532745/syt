<template>
  <div id="app">
    <van-tabbar v-model="active">
      <van-tabbar-item v-for="(item,index) in datas.tabbars" :key="index" @click="tab(index,item.name)">
        <span :class="currIndex == index ? active:''">{{item.title}}</span>
        <img slot="icon" slot-scope="props" :src="props.active ? item.icon.active : item.icon.normal">
      </van-tabbar-item>
    </van-tabbar>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>
  import {baseUrl, getData} from '@/common/js/axios'

  export default {
    name: 'App',
    data() {
      return {
        currIndex: 0,
        active: 0,
        datas: {}
      }
    },
    methods: {
      // tabbar切换
      tab(index, val) {
        this.currIndex = index;
        console.log(val)
        this.$router.push("/" + val);
      },
      // store获取数据
      _getData() {
        getData(baseUrl).then((res) => {
          if (res.data.errno === 0) {
            this.datas = res.data
            this.$store.dispatch("getDatas",res)
          }
        })
      }
    },
    created() {
      this._getData()
    }
  }
</script>
<style lang="less">
  @import "./common/less/index.less";
</style>
<style scoped lang="less">
  .van-tabbar{
    height: 0.646667rem;
  }
</style>
