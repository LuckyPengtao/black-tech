<template>
  <div :class="className" :style="{height:height,width:width}"/>
</template>

<script>

import echarts from 'echarts'

require('echarts/theme/macarons') // echarts theme

export default {
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  name: "LineChart"
}
</script>

<style scoped>

</style>
