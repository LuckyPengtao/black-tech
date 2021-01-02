<template>
  <div>
    <el-container>
      <el-header class="homeHeader" style="height: 80px">
        <div class="title">创新黑科技</div>
        <div>
          <div class="userInfo">
            <span style="color: white">
              欢迎您!
            </span>
          </div>
        </div>
      </el-header>
          <el-breadcrumb separator-class="el-icon-arrow-right" v-if="this.$router.currentRoute.path!='/'">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{this.$router.currentRoute.name}}</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="homeWelcome" v-if="this.$router.currentRoute.path=='/'">
            <el-row :gutter="16" style="margin-top: 1%">
              <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
                <div class="card-panel">
                  <div class="card-panel-icon-wrapper icon-people">
                    <svg-icon icon-class="tel" class-name="card-panel-icon"/>
                  </div>
                  <div class="card-panel-description">
                    <div class="card-panel-text">
                      新技术
                    </div>
                    <div class="card-panel-num">
                      112条
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
                <div class="card-panel">
                  <div class="card-panel-icon-wrapper icon-message">
                    <svg-icon icon-class="news" class-name="card-panel-icon"/>
                  </div>
                  <div class="card-panel-description">
                    <div class="card-panel-text">
                      新闻产品
                    </div>
                    <div class="card-panel-num">
                      11条
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
                <div class="card-panel">
                  <div class="card-panel-icon-wrapper icon-complaint">
                    <svg-icon icon-class="create" class-name="card-panel-icon"/>
                  </div>
                  <div class="card-panel-description">
                    <div class="card-panel-text">
                      创意点子
                    </div>
                    <div class="card-panel-num">
                      10条
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
                <div class="card-panel">
                  <div class="card-panel-icon-wrapper icon-honor">
                    <svg-icon icon-class="yingjian" class-name="card-panel-icon"/>
                  </div>
                  <div class="card-panel-description">
                    <div class="card-panel-text">
                      硬件终端
                    </div>
                    <div class="card-panel-num">
                      13条
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="16" style="margin-top: 1%;height: 50%">
              <el-col :xs="24" :sm="24" :lg="16">
                <div class="chart-wrapper">
                  <bar-chart />
                </div>
              </el-col>
              <el-col :xs="24" :sm="24" :lg="8">
                <div class="chart-wrapper">
                    <!--                  <el-image :src="require('@/assets/cloud.gif')"></el-image>-->
                    <word-cloud/>

                </div>
              </el-col>
            </el-row>

            <el-row :gutter="16" style="margin-top: 1%;height: 50%">
              <el-col :xs="24" :sm="24" :lg="15">
                <div class="chart-wrapper">
                  <bar-chart />
                </div>
              </el-col>
              <el-col :xs="24" :sm="24" :lg="9">
                <div class="chart-wrapper">
                  <b>分享榜前三</b>
                </div>
              </el-col>
            </el-row>

          </div>
      </el-container>
  </div>
</template>

<script>
import BarChart from '../components/charts/BarChart'
import BarChartD from "@/components/charts/BarChartD";
import WordCloud from "@/components/charts/WordCloud";
import Word from "@/components/charts/Word";
export default {
  name: "Home",
  components: {
    BarChart,
    BarChartD,
    WordCloud,
    Word
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 0px;
  position: relative;
}

.homeWelcome {
  text-align: center;
  background-color: rgb(240, 242, 245);
  padding: 12px;
  position: relative;
}

.homeHeader {
  background-color: #409eff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 5%;
  box-sizing: border-box;
}

.homeHeader .title {
  font-size: 30px;
  font-family: 华文行楷;
  color: #ffffff;
  font-weight: 0.1;

}

.homeHeader .userInfo {
  cursor: pointer;
}

.chart-wrapper {
  background: #fff;
  padding: 16px 0 0 0;
  margin-bottom: 16px;
  height: 320px;
  text-align: center;
}

.card-panel-col {
  margin-bottom: 12px;
}

.card-panel {
  height: 78px;
  cursor: pointer;
  font-size: 18px;
  position: relative;
  overflow: hidden;
  color: #666;
  background: #fff;
  box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
  border-color: rgba(0, 0, 0, .05);

  &:hover {
    .card-panel-icon-wrapper {
      color: #fff;
    }

    .icon-people {
      background: #40c9c6;
    }

    .icon-message {
      background: #36a3f7;
    }

    .icon-invoice {
      background: #979696;
    }

    .icon-honor {
      background: #70f3ff
    }

    .icon-complaint {
      background: #fa8c35
    }

    .icon-money {
      background: #eacd76;
    }
  }

  .icon-people {
    color: #40c9c6;
  }

  .icon-message {
    color: #36a3f7;
  }

  .icon-invoice {
    color: #979696;
  }

  .icon-complaint {
    color: #fa8c35
  }

  .icon-honor {
    color: #70f3ff
  }

  .icon-money {
    color: #eacd76
  }

  .card-panel-icon-wrapper {
    float: left;
    margin: 6px 0 0 4px;
    padding: 16px;
    transition: all 0.38s ease-out;
    border-radius: 6px;
  }

  .card-panel-icon {
    float: left;
    font-size: 36px;
  }

  .card-panel-description {
    float: right;
    font-weight: bold;
    margin: 24px 10px 10px 0px;

    .card-panel-text {
      line-height: 12px;
      color: rgba(0, 0, 0, 0.45);
      font-size: 12px;
      margin-bottom: 12px;
    }

    .card-panel-num {
      font-size: 12px;
    }
  }
}

</style>
