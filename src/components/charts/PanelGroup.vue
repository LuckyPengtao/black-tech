<template>
  <el-row :gutter="18" class="panel-group">
    <el-col :xs="24" :sm="24" :lg="24" class="card-panel-col">
      <el-card>
        <div style="font-size: 32px;align-items: center;color: #666">
          欢迎登录鑫华出租车管理系统！
        </div>
      </el-card>
      <!--<count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num" />-->
    </el-col>
    <el-col :xs="6" :sm="6" :lg="4" class="card-panel-col">
      <div class="card-panel" @click="handleForward('taxi')">
        <div class="card-panel-icon-wrapper icon-people">
          <svg-icon icon-class="taxi" class-name="card-panel-icon"/>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            车辆总数
          </div>
          <div class="card-panel-num">
            {{ total.carsNum }}辆
          </div>
          <!--<count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num" />-->
        </div>
      </div>
    </el-col>
    <el-col :xs="6" :sm="6" :lg="4" class="card-panel-col">
      <div class="card-panel" @click="handleForward('driver')">
        <div class="card-panel-icon-wrapper icon-message">
          <svg-icon icon-class="peoples" class-name="card-panel-icon"/>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            人员数量
          </div>
          <div class="card-panel-num">
            {{ total.driversNum }}人
          </div>
          <!--<count-to :start-val="0" :end-val="81212" :duration="3000" class="card-panel-num" />-->
        </div>
      </div>
    </el-col>
    <el-col :xs="6" :sm="6" :lg="4" class="card-panel-col">
      <div class="card-panel" @click="handleForward('invoice')">
        <div class="card-panel-icon-wrapper icon-invoice">
          <svg-icon icon-class="invoice" class-name="card-panel-icon"/>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            发票领取
          </div>
          <div class="card-panel-num">
            {{ total.invoicesNum }}张
          </div>
          <!--<count-to :start-val="0" :end-val="9280" :duration="3200" class="card-panel-num" />-->
        </div>
      </div>
    </el-col>
    <el-col :xs="6" :sm="6" :lg="4" class="card-panel-col">
      <div class="card-panel" @click="handleForward('fee')">
        <div class="card-panel-icon-wrapper icon-money">
          <svg-icon icon-class="money" class-name="card-panel-icon"/>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            缴费金额
          </div>
          <div class="card-panel-num">
            {{ total.fees }}万
          </div>
          <!--<count-to :start-val="0" :end-val="13600" :duration="3600" class="card-panel-num" />-->
        </div>
      </div>
    </el-col>
    <el-col :xs="6" :sm="6" :lg="4" class="card-panel-col">
      <div class="card-panel" @click="handleForward('honor')">
        <div class="card-panel-icon-wrapper icon-honor">
          <svg-icon icon-class="honor" class-name="card-panel-icon"/>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            好人好事
          </div>
          <div class="card-panel-num">
            {{ total.honorsNum }}条
          </div>
          <!--<count-to :start-val="0" :end-val="13600" :duration="3600" class="card-panel-num" />-->
        </div>
      </div>
    </el-col>
    <el-col :xs="6" :sm="6" :lg="4" class="card-panel-col">
      <div class="card-panel" @click="handleForward('complaint')">
        <div class="card-panel-icon-wrapper icon-complaint">
          <svg-icon icon-class="complaint" class-name="card-panel-icon"/>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            投诉记录
          </div>
          <div class="card-panel-num">
            {{ total.complaintsNum }}条
          </div>
          <!--<count-to :start-val="0" :end-val="13600" :duration="3600" class="card-panel-num" />-->
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import SvgIcon from '../svgicon/SvgIcon'

export default {
  components: {
    SvgIcon
  },
  data() {
    return {
      total: {
        carsNum: 515,
        driversNum: 961,
        invoicesNum: 15000,
        fees: 21.5,
        honorsNum: 72,
        complaintsNum: 63
      }
    }
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      this.getRequest('/user/pg/total').then(resp => {
        if (resp) {
          this.total = resp;
          console.log(resp);
        }
      })
    },
    handleSetLineChartData(type) {
      this.$emit('handleSetLineChartData', type)
    },
    handleForward(type) {
      if (type == 'driver') {
        this.$router.push({
          path: "/emp/basic"
        })
      } else if (type == 'taxi') {
        this.$router.push({
          path: "/taxi/basic"
        })
      } else if (type == 'invoice') {
        this.$router.push({
          path: "/business/ticket"
        })
      } else if (type == 'fee') {
        this.$router.push({
          path: "/business/fee"
        })
      } else if (type == 'honor') {
        this.$router.push({
          path: "/business/honor"
        })
      } else {
        this.$router.push({
          path: "/business/complaint"
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.panel-group {
  margin-top: 18px;

  .card-panel-col {
    margin-bottom: 32px;
  }

  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
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
      margin: 14px 0 0 6px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: left;
      font-size: 46px;
    }

    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px 12px 26px 0px;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 15px;
        margin-bottom: 12px;
      }

      .card-panel-num {
        font-size: 18px;
      }
    }
  }
}

@media (max-width: 550px) {
  .card-panel-description {
    display: none;
  }
  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>
