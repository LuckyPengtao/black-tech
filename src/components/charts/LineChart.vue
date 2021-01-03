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
        data() {
            return {
                chart: null,
                lineData: [
                  ["2020-09-06",2],["2020-09-07",1],["2020-09-08",1],["2020-09-09",1],["2020-09-10",1],["2020-00-11",1],
                  ["2020-09-12",1],["2020-09-13",3],["2020-09-14",1],["2020-09-15",1],["2020-09-16",1],["2020-09-17",1],
                  ["2020-09-18",1],["2020-09-19",1],["2020-09-20",4],["2020-09-21",1],["2020-09-22",1],["2020-09-23",1],
                  ["2020-09-24",5],["2020-09-25",6],["2020-09-26",3],["2020-09-27",2],["2020-09-28",1],["2020-09-29",6],
                  ["2020-09-30",11]
                ]
            }
        },
        mounted() {
            this.initChart(this.lineData);
        },
        beforeDestroy() {
            if (!this.chart) {
                return
            }
            this.chart.dispose()
            this.chart = null
        },
        methods: {
            initChart(data) {
                this.chart = echarts.init(this.$el, 'macarons')
                let options = {
                    title: {
                        text: '技术分享'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        data: data.map(function (item) {
                            return item[0];
                        })
                    },
                    yAxis: {
                        splitLine: {
                            show: false
                        }
                    },
                    toolbox: {
                        left: 'center',
                        feature: {
                            dataZoom: {
                                yAxisIndex: 'none'
                            },
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    dataZoom: [{
                        startValue: '2020-09-05'
                    }, {
                        type: 'inside'
                    }],
                    visualMap: {
                        top: 10,
                        right: 10,
                        pieces: [{
                            gt: 0,
                            lte: 5,
                            color: '#096'
                        }, {
                            gt: 5,
                            lte: 10,
                            color: '#ffde33'
                        }, {
                            gt: 10,
                            lte: 15,
                            color: '#ff9933'
                        }, {
                            gt: 15,
                            lte: 20,
                            color: '#cc0033'
                        }, {
                            gt: 20,
                            lte: 30,
                            color: '#660099'
                        }, {
                            gt: 30,
                            color: '#7e0023'
                        }],
                        outOfRange: {
                            color: '#999'
                        }
                    },
                    series: {
                        name: '黑科技分享量',
                        type: 'line',
                        data: data.map(function (item) {
                            return item[1];
                        }),
                        markLine: {
                            silent: true,
                            data: [{
                                yAxis: 5
                            }, {
                                yAxis: 10
                            }, {
                                yAxis: 15
                            }, {
                                yAxis: 20
                            }, {
                                yAxis: 30
                            }]
                        }
                    }
                }
                this.chart.setOption(options);
            }
        }
    }
</script>
