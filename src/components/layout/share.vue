<template>
  <van-action-sheet v-model="toggleshare" cancel-text="取消">
    <div class="wrapper">
      <van-cell v-for="(item,index) in share" :key="index">
        <span>{{item.name}}</span>
        <img slot="icon" slot-scope="props" :src="item.avatar">
      </van-cell>
    </div>
  </van-action-sheet>
</template>
<script>
  import {mapState} from 'vuex'

  export default {
    name: "share",
    props: ["toggleshare"],
    data() {
      return {
        active: 0
      }
    },
    computed: {
      ...mapState({
        share: state => state.data.data.share,
      })
    },
  }
</script>
<style scoped>
</style>
