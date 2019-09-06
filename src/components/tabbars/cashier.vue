<template>
  <div>
    <WebHeader></WebHeader>
    <div class="calculation">
      <Calculation></Calculation>
    </div>
  </div>
</template>
<script>
  import WebHeader from '@/components/layout/headerMember'
  import Calculation from '@/components/components/calculation'

  export default {
    name: "cashier",
    components: {
      WebHeader,
      Calculation
    }
  }
</script>
<style scoped lang="less">
</style>
