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
      this.getRequest('/warning/driver/statistics').then(resp => {
        if (resp) {
          let preData = resp.preData;
          let midData = resp.midData;
          let outData = resp.outData;
          console.log(resp)
          let options = {
            title: {
//              text: '人员预警',
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              }
            },
            legend: {
              style: "float:right",
              data: ['预警期内', '预警期中', '预警期外']
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
                data: ['驾驶证', '资格证', '巡游证', '身份证', '暂住证']
              }
            ],
            yAxis: [
              {
                type: 'value'
              }
            ],
            series: [
              {
                name: '预警期内',
                type: 'bar',
                color: 'red',
                data: preData
              },
              {
                name: '预警期中',
                type: 'bar',
                color: 'orange',
                data: midData
              },
              {
                name: '预警期外',
                type: 'bar',
                data: outData,
                markLine: {
                  lineStyle: {
                    type: 'dashed'
                  },
                  data: [
                    [{type: 'min'}, {type: 'max'}]
                  ]
                }
              }
            ]
          }
          this.chart.setOption(options);
        }
      });
      this.chart.on(
          "click",
          (param) => {
            this.$router.push({
              path: "/warn/person"
            })
          }
      )
    }
  }
}
</script>
