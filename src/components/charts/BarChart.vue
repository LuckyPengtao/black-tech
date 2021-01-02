<template>
  <div :class="className" :style="{height:height,width:width}" />
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
  data() {
    return {
      chart: null,
      barData: [171, 73, 77, 21]
    }
  },
  mounted() {
    this.initChart();
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
        let options = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
            data: ['图像', '视频', '自然语言', '5G消息','3D模型', '语音识别','AR/VR','其他']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              data: ['九月', '十月', '十一月', '十二月']
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '图像',
              type: 'bar',
              data: [12, 10, 17, 13, ]
            },
            {
              name: '视频',
              type: 'bar',
              data: [3, 1, 3, 4]
            },
            {
              name: '自然语言',
              type: 'bar',
              data: [2, 1, 3, 1]
            },
            {
              name: '3D模型',
              type: 'bar',
              data: [1,1,1,3]
            },
            {
              name: '5G消息',
              type: 'bar',
              data:[0,0,0,3]
            },

            {
              name: '语音识别',
              type: 'bar',
              data: [0,2,1,0]
            },
            {
              name: 'AR/VR',
              type: 'bar',
              data: [0,0,0,3]
            },
            {
              name: '其他',
              type: 'bar',
              data: [4,4,6,15]
            }
          ]
        };
        this.chart.setOption(options);
      }
    }
}
</script>
