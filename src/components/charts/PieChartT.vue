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
                chart: null
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
                this.getRequest('/warning/taxi/statistics').then(resp => {
                    if (resp) {
                        let sum = 0;
                        for(let i in resp){
                            if(resp[i]){
                                sum += resp[i].value;
                            }
                        }
                        let options = {
                            title: {
                                text: '车辆预警统计',
                                subtext: '预警总计:'+sum+'条',
                                left: 'center'
                            },
                            tooltip: {
                                trigger: 'item',
                                formatter: '{a} <br/>{b} : {c} ({d}%)'
                            },
                            legend: {
                                orient: 'vertical',
                                left: 'left',
                                data: ['预警期外', '额外', '额外', '预警期内', '已过期限']
                            },
                            series: [
                                {
                                    name: '访问来源',
                                    type: 'pie',
                                    radius: '55%',
                                    center: ['50%', '60%'],
                                    data: resp,
                                    emphasis: {
                                        itemStyle: {
                                            shadowBlur: 10,
                                            shadowOffsetX: 0,
                                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                                        }
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
                      console.log(param)
                        this.$router.push({
                            path: "/warn/taxi"
                        })
                    }
                )
            }
        }
    }
</script>
