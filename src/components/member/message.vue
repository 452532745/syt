<template>
  <div style="height: 100vh;background-color: #f4f4f4;">
    <WebHeader></WebHeader>
    <div class="message-wrapper">
      <div class="tabs">
        <div :class="currIndex == index ? 'active':''" v-for="(item,index) in classify" :key="index"
             @click="tab(index,item.name)">
          <span>{{item.title}}</span>
        </div>
      </div>
      <Scroll :on-refresh="onRefresh" :on-infinite="onInfinite" :dataList="scrollData">
        <div v-for="(item,index) in data" :key="index">
          <van-cell v-for="(ite,index) in item" :key="index" :title="ite.title" :value="ite.time"
                    :label="ite.desc" :to="{path:'/messagepage',query:{ id:ite.id }}" is-link/>
        </div>
      </Scroll>
    </div>
  </div>
</template>
<script>
  import Scroll from '@/components/components/scroll'
  import WebHeader from '@/components/layout/header'
  import {getData, messageUrl} from '@/common/js/axios'

  export default {
    data() {
      return {
        counter: 1, //当前页
        num: 5, // 一页显示多少条
        pageStart: 0, // 开始页数
        pageEnd: 0, // 结束页数
        scrollData: {
          noFlag: false //暂无更多数据显示
        },
        totalData: [],
        data: [],
        currIndex: 0,
        classify: [
          {
            id: 0,
            title: "消息",
            name: "msg"
          },
          {
            id: 1,
            title: "小贴士",
            name: "tips"
          }
        ]
      }
    },
    watch: {
      $route() {
        this.scrollData.noFlag = false
        this.totalData = []
        this.data = []
        this.counter = 1
        this.routerId = this.$route.params.id
        this.getList(this.routerId)
      }
    },
    mounted() {
      this.routerId = this.$route.params.id
      this.getList(this.routerId)
    },
    methods: {
      getList(classify) {
        getData(messageUrl, classify).then((res) => {
          this.totalData = []
          this.data = []
          let listData = []
          let listDataItem = []
          let num = this.num
          if (res.data.errno === 0) {

            for (let obj of res.data.message.messageList) {
              if (obj.classify == classify) {
                listData.push(obj)
              }
            }

            for (let i = 0; i < listData.length; i += num) {
              this.totalData.push(listData.slice(i, i + num))
            }

            this.data = this.totalData.slice(0, 1)

          }
        })
      },
      getDownList(count) {
        console.log(this.totalData)
        if (this.totalData.length < count) {
          this.scrollData.noFlag = true
          this.$el.querySelector('.load-more').style.display = 'none'
        } else {
          this.data = this.totalData.slice(0, count)
        }
      },
      // tabbar切换
      tab(index, val) {
        this.currIndex = index;
        this.$router.push(val);
      },
      onRefresh(done) {
        this.counter = 1
        this.getList(this.routerId)
        done(); // call done

      },
      onInfinite(done) {
        this.counter++;
        this.getDownList(this.counter)
        done();
      }
    },
    components: {
      WebHeader,
      Scroll
    },
  }
</script>
<style lang="less">
  ul li {
    min-height: 100px;
    line-height: 100px;
    text-align: center;
    border: 1px solid red;
  }

  .tabs {
    position: relative;
    display: flex;
    background-color: #fff;
    user-select: none;
    box-sizing: content-box;
    margin-bottom: 15px;

    div {
      position: relative;
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      flex: 1;
      box-sizing: border-box;
      min-width: 0;
      padding: 0 5px;
      font-size: 14px;
      line-height: 44px;
      text-align: center;
      cursor: pointer;
      color: #323233;

      &.active {
        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          z-index: 1;
          width: 100%;
          height: 3px;
          background-color: #f44;
          border-radius: 3px;
        }
      }

      span {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
</style>
