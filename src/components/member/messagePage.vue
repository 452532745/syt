<template>
  <div>
    <WebHeader></WebHeader>
    <div class="article-wrapper">
      <div class="title">{{data.title}}</div>
      <div class="desc">{{data.time}} <i>{{data.author}}</i></div>
      <div class="content">{{data.content}}</div>
    </div>
  </div>
</template>
<script>
  import WebHeader from '@/components/layout/header'
  import {getData, messageUrl} from '@/common/js/axios'

  export default {
    name: "messagePage",
    data() {
      return {
        routerId: 0,
        data:{}
      }
    },
    watch: {
      $route() {
        this.routerId = this.$route.query.id
      }
    },
    mounted() {
      this.routerId = this.$route.query.id
      this.getContent(this.routerId);
    },
    methods: {
      getContent(dataId) {
        getData(messageUrl, dataId).then((res) => {
          if (res.data.errno === 0) {
            for(let obj of res.data.message.messageContent){
              if (obj.id == dataId){
                this.data = obj
              }
            }
          }
        })
      },
    },
    components: {
      WebHeader
    }
  }
</script>
<style scoped lang="less">
  .article-wrapper {
    padding: 0.36rem 0.2rem;
  }

  .title {
    font-size: 0.28rem;
    color: #000;
    margin-bottom: 0.2rem;
  }

  .desc {
    font-size: 0.213334rem;
    color: #888;
    margin-bottom: 0.266667rem;

    i {
      font-style: normal;
      color: #476df8;
    }
  }

  .content {
    font-size: 0.186667rem;
    line-height: 0.32rem;
  }
</style>
