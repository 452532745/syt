<template lang="html">
  <div class="yo-scroll" :class="{'down':(state===0),'up':(state==1),refresh:(state===2),touch:touching}"
       @touchstart="touchStart($event)" @touchmove="touchMove($event)" @touchend="touchEnd($event)">
    <section class="inner" :style="{ transform: 'translate3d(0, ' + top + 'px, 0)' }">
      <header class="pull-refresh">
        <slot name="pull-refresh">
          <span class="up-tip">松开刷新数据</span>
          <span class="refresh-tip"><van-loading size="24px">加载中...</van-loading></span>
        </slot>
      </header>
      <slot>
      </slot>
      <footer class="load-more">
        <slot name="load-more">
          <span v-show="downFlag === false">上拉加载更多</span>
          <span v-show="downFlag === true">加载中……</span>
        </slot>
      </footer>
      <div class="nullData" v-show="dataList.noFlag">暂无更多数据</div>
    </section>
  </div>
</template>
<script>
  export default {
    props: {
      offset: {
        type: Number,
        default: 100 //默认高度
      },
      enableInfinite: {
        type: Boolean,
        default: true
      },
      enableRefresh: {
        type: Boolean,
        default: true
      },
      dataList: {
        default: false,
        required: false
      },
      onRefresh: {
        type: Function,
        default: undefined,
        required: false
      },
      onInfinite: {
        type: Function,
        default: undefined,
        require: false
      }
    },
    data() {
      return {
        top: 0,
        state: 0,
        startX: 0,
        startY: 0,
        touching: false,
        infiniteLoading: false,
        downFlag: false, //用来显示是否加载中
      }
    },
    methods: {
      touchStart(e) {
        this.startY = e.targetTouches[0].pageY;
        this.startX = e.targetTouches[0].pageX;
        this.startScroll = this.$el.scrollTop || 0;
        this.touching = true; //留着有用，不能删除

        this.dataList.noFlag = false;
        this.$el.querySelector('.load-more').style.display = 'block';
      },
      touchMove(e) {
        if (!this.enableRefresh || this.dataList.noFlag || !this.touching) {
          return
        }
        let diff = e.targetTouches[0].pageY - this.startY - this.startScroll
        if (diff > 0) e.preventDefault()
        this.top = Math.pow(diff, 0.8) + (this.state === 2 ? this.offset : 0)
        if (this.state === 2) { // in refreshing
          return
        }
        if (this.top >= this.offset) {
          this.state = 1
        } else {
          this.state = 0
        }

        let more = this.$el.querySelector('.load-more');
        if (!this.top && this.state === 0) {
          more.style.display = 'block';
        } else {
          more.style.display = 'none';
        }
      },
      touchEnd(e) {

        if (!this.enableRefresh) {
          return
        }
        this.touching = false
        if (this.state === 2) { // in refreshing
          this.state = 2
          this.top = this.offset
          return
        }
        if (this.top >= this.offset) { // do refresh
          this.refresh()
        } else { // cancel refresh
          this.state = 0
          this.top = 0
        }

        //用于判断滑动是否在原地 ----begin
        let endX = e.changedTouches[0].pageX,
          endY = e.changedTouches[0].pageY,
          dy = this.startY - endY,
          dx = endX - this.startX;

        //如果滑动距离太短
        if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
          console.log("滑动距离太短")
          return;
        }

        //--------end--------

        if (!this.enableInfinite || this.infiniteLoading) {
          return
        }

        let outerHeight = this.$el.clientHeight,
          innerHeight = this.$el.querySelector('.inner').clientHeight,
          scrollTop = this.$el.scrollTop,
          ptrHeight = this.onRefresh ? this.$el.querySelector('.pull-refresh').clientHeight : 0,
          bottom = innerHeight - outerHeight - scrollTop - ptrHeight;

        console.log(bottom + " __ " + this.offset)

        if (bottom <= this.offset && this.state === 0) {
          this.downFlag = true;
          this.infinite();
        } else {
          this.$el.querySelector('.load-more').style.display = 'none';
          this.downFlag = false;
        }

      },
      refresh() {
        this.state = 2;
        this.top = this.offset;
        setTimeout(() => {
          this.onRefresh(this.refreshDone)
        }, 300);
      },
      refreshDone() {
        this.state = 0
        this.top = 0
      },
      infinite() {
        this.infiniteLoading = true

        setTimeout(() => {
          this.onInfinite(this.infiniteDone);
        }, 2000);
      },
      infiniteDone() {
        this.infiniteLoading = false
      }
    }
  }
</script>
<style scoped lang="less">
  .yo-scroll {
    z-index: 100;
    -webkit-overflow-scrolling: touch;
    margin-bottom: 0.646667rem;
    .inner {
      transition-duration: 300ms;

      .pull-refresh {
        position: relative;
        left: 0;
        top: 0;
        width: 100%;
        height: auto;
        display: flex;
        display: -webkit-flex;
        align-items: center;
        justify-content: center;
      }

      .load-more {
        font-size: 14px;
        color: #000;
        height: auto;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        padding-top: 15px;
        padding-bottom: 0.646667rem;

        span {
          display: block;
          padding-bottom: 15px;
          color: #969799;
        }
      }

      .nullData { //暂无更多数据样式
        font-size: 14px;
        padding-top: 15px;
        color: #999999;
        text-align: center;
      }

      .down-tip,
      .refresh-tip,
      .up-tip {
        font-size: 14px;
        color: #969799;
        display: none;
        padding-bottom: 15px;
      }

      .up-tip:before,
      .refresh-tip:before {
        content: '';
        display: inline-block;
        width: 160px;
        height: 70px;
        background-size: 70% !important;
        position: absolute;
        top: 0;
        left: 20%;
      }

      .up-tip:before {
        /*background: url(../img/down-logo.png) no-repeat center;*/
      }

      .refresh-tip:before {
        /*background: url(../img/refresh-logo.gif) no-repeat center;*/
      }
    }
  }

  .yo-scroll.touch .inner {
    transition-duration: 0;
  }

  .yo-scroll.down .down-tip {
    display: block;
  }

  .yo-scroll.up .up-tip {
    display: block;
  }

  .yo-scroll.refresh .refresh-tip {
    display: block;
  }
</style>
