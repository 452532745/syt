<template>
  <div style="height: 100vh;background-color: #f4f4f4;">
    <WebHeader></WebHeader>
    <div class="message-wrapper">
      <Scroll :on-refresh="onRefresh" :on-infinite="onInfinite" :dataList="scrollData">
        <van-tabs v-model="active" animated>
          <van-tab v-for="(items,index) in listdata" :title="items.classify" :key="index">
            <van-list class="scrollList" v-model="items.loading" :finished="finished">
              <div v-for="(item,index) in items.items" :key="index">
                <van-cell v-for="(ite,index) in item" :key="index" :title="ite.title" :value="ite.time"
                          :label="ite.desc" :to="{path:'/messagepage',query:{ id:ite.id }}" is-link/>
              </div>
            </van-list>
          </van-tab>
        </van-tabs>
      </Scroll>
    </div>
  </div>
</template>
<script>
  import Scroll from '@/components/components/scroll'
  import WebHeader from '@/components/layout/header'
  import {getData, messageUrl} from '@/common/js/axios'
  import {classify} from '@/common/js/common'

  export default {
    data() {
      return {
        finished:true,
        active: 0,
        counter: 1, //当前页
        num: 5, // 一页显示多少条
        pageStart: 0, // 开始页数
        pageEnd: 0, // 结束页数
        listdata: [], // 下拉更新数据存放数组
        downdata: [], // 上拉更多的数据存放数组
        scrollData: {
          noFlag: false //暂无更多数据显示
        }
      }
    },
    mounted(counter) {
      this.getList(this.counter);
    },
    methods: {
      getList(count) {
        getData(messageUrl).then((res) => {
          if (res.data.errno === 0) {
            let classifyData = classify(res.data.message.messageList, "classify")
            this.listdata = classifyData
            console.log(this.listdata)
            for (let i = 0; i < classifyData.length; i++) {
              let arr = classifyData[i].items
              let num = this.num
              this.listdata[i].items = []
              for (let j = 0; j < arr.length; j += num) {
                console.log(j + ":" + num + ":" + count + ":" + ((j / num) < count))
                if ((j / num) < count) {
                  this.listdata[i].items.push(arr.slice(j, j + num))
                } else {
                  this.scrollData.noFlag = true
                  break
                }
              }
            }
          }
        })
      },
      onRefresh(done) {
        this.counter = 1
        this.getList(this.counter);
        done(); // call done

      },
      onInfinite(done) {
        this.counter++;
        this.getList(this.counter);
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
</style>
