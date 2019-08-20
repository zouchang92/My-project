<template>
  <!-- Calendar Section Start -->
  <section id="calendar" class="calendar padding-top-bottom">
    <div class="container">
      <div class="row">
        <div class="calendar-contain">
          <div class="wrapper" ref="wrapper">
            <ul class="content">
              <li v-for="(item, index) in calData" :key="index">
                <div class="crow">
                  <div class="row-left">
                    <div
                      class="row-date"
                      :class="{'row-date-red': item.agg_date==today}"
                      :id="item.agg_date"
                    >
                      <p>{{ item.agg_date | formatDateDate }}</p>
                    </div>
                    <div
                      class="row-week"
                      :class="{'row-week-red': item.agg_date==today}"
                      :id="item.agg_date"
                    >
                      <p>{{ item.agg_date | formatDateWeek }}</p>
                    </div>
                  </div>
                  <div class="row-right">
                    <div v-for="(itm, idx) in item.event_list" :key="idx">
                      <!-- <b-button
                        :style="{'background':'rgb('+Math.floor(Math.random()*50+180)+','+Math.floor(Math.random()*50+220)+','+Math.floor(Math.random()*50+220)+')'}"
                        class="row-content"
                      >
                        <p>{{ itm.start_date }}</p>
                        <span>{{ itm.event_title }}</span>
                      </b-button>-->
                      <el-popover placement="right-start" :title="itm.event_title" width="600" trigger="hover">
                        <div v-for="(ditm, didx) in itm.detail" :key="didx">
                          <h3>{{ ditm.update_date }}</h3>
                          <p>{{ ditm.content }}</p>
                          <h4>标的:</h4>
                          <p class="Calendar-targets">{{ ditm.targets }}</p>
                        </div>
                        <el-button
                          slot="reference"
                          class="row-content"
                          :style="{'background':'rgb('+Math.floor(Math.random()*50+180)+','+Math.floor(Math.random()*50+220)+','+Math.floor(Math.random()*50+220)+')'}"
                        >
                          <p>{{ itm.start_date }}</p>
                          <span>{{ itm.event_title }}</span>
                        </el-button>
                      </el-popover>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Calendar Section End -->
</template>
<script>
import BScroll from "better-scroll";
import { getNow } from "@better-scroll/shared-utils";
import { formatDate } from "@/common/date.js";

export default {
  name: "Calendar",
  components: {},
  created() {
    const that = this;
    this.loadData();
  },

  mounted() {
    
  },

  data() {
    return {
      calData: [],
      now: new Date(),
      pulldownMsg: "下拉刷新",
      pullupMsg: "加载更多",
      alertHook: "none",
      startDate: new Date(),
      today: formatDate(new Date(), "yyyy-MM-dd"),
      dialogVisible: false
    };
  },
  computed: {
    RandomColor(index) {
      let r, g, b;
      r = Math.floor(Math.random() * 256);
      g = Math.floor(Math.random() * 256);
      b = Math.floor(Math.random() * 256);
      return "rgb(" + r + "," + g + "," + b + ")";
    }
  },
  methods: {
    conclick(itm) {
      console.log(itm);
    },
    timeFormat(date) {
      if (!date || typeof date === "string") {
        this.console.error("日期参数异常");
      }
      let y = date.getFullYear();
      let m = date.getMonth() + 1;
      let d = date.getDate();
      return y + "-" + m + "-" + d;
    },

    getMonday(date) {
      let now = date;
      let weekday = now.getDay();
      now.setDate(now.getDate() - weekday + 1);
      return now;
    },

    refreshalert() {
      // 刷新成功提示
      this.alertHook = "block";
      setTimeout(() => {
        this.alertHook = "none";
      }, 1000);
    },

    loadData() {
      let startDate = this.startDate;
      let now = new Date();
      if (startDate.toDateString() == now.toDateString()) {
        startDate = this.getMonday(startDate);
      }

      let endDate = new Date(startDate.valueOf());
      endDate.setDate(endDate.getDate() + 7);
      let end = this.timeFormat(endDate);
      let start = this.timeFormat(startDate);
      this.startDate = endDate;
      // 下一次请求的起始日期
      let nextDate = new Date(endDate.valueOf());
      nextDate.setDate(nextDate.getDate() + 1);
      this.startDate = nextDate;

      let url = this.$host + "/calendar/";
      this.$ajax
        .get(url, {
          params: {
            start_date: start,
            end_date: end
          }
        })
        .then(res => {
          this.calData = this.calData.concat(res.data.data);
          console.log(this.calData);
          this.$nextTick(() => {
            if (!this.scroll) {
              this.scroll = new BScroll(this.$refs.wrapper, {});
              this.scroll.on("touchEnd", pos => {
                // 下拉动作
                if (pos.y < this.scroll.maxScrollY - 50) {
                  this.loadData();
                }
              });
            } else {
              this.scroll.refresh();
            }
          });
        });
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  },

  filters: {
    formatDateDate(date) {
      if (!date) return "";
      let arrMonth = new Array(
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月"
      );
      let newDate = new Date(date);
      let month = arrMonth[newDate.getMonth()];
      let day = newDate.getDate();
      let strDate = month + day + "日";
      return strDate;
    },
    formatDateWeek(date) {
      if (!date) return "";
      let arrWeek = new Array(
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六"
      );
      let newDate = new Date(date);
      let weekday = arrWeek[newDate.getDay()];
      return weekday;
    }
  }
};
</script>

<style lang='css'>
.calendar {
  background: url(http://pw989qog6.bkt.clouddn.com/bg_03.jpg);
  margin-top: 0;
  align-items: center;
  position: relative;
  height: 940px;
}
.calendar-contain {
  align-items: center;
  height: 100%;
  display: flex;
  margin: 0, auto;
}
.wrapper {
  height: 700px;
  width: 1140px;
}
.crow {
  height: 110px;
  /* background: #F9F06F; */
}
.row-left {
  height: 110px;
  width: 50px;
  float: left;
  background: rgba(10, 10, 10, 0.3);
  position: relative;
  /* border-bottom: 1px solid #eee; */
}
.row-left::before {
  content: "";
  position: absolute;
  left: 5px;
  top: 100px;
  height: 1px;
  width: 40px;
  border-bottom: 1px solid #eee;
}
.row-date {
  color: white;
  height: 48px;
  display: block;
  position: relative;
  margin: 5px;
}
.row-date p {
  font-size: 15px;
  color: #f0f0f0;
}
.row-date-red {
  height: 48px;
  display: block;
  position: relative;
  margin: 5px;
}
.row-date-red p {
  font-size: 15px;
  color: #c6001c;
}
.row-week {
  color: white;
  height: 48px;
  display: block;
  position: relative;
  margin: 5px;
}
.row-week p {
  font-size: 12px;
  color: #f0f0f0;
}
.row-week-red {
  height: 48px;
  display: block;
  position: relative;
  margin: 5px;
}
.row-week-red p {
  font-size: 12px;
  color: #c6001c;
}
.row-right {
  height: 110px;
  width: 1050px;
  float: right;
}
.row-content {
  height: 104px;
  width: 105px;
  border: 1px solid #eee;
  border-radius: 4px;
  -webkit-box-shadow: 0 3px 12px #000000;
  box-shadow: 0 3px 12px #000000;
  margin: -4px 15px;
  float: left;
}
.row-content:hover {
  background-color: #d3d3d3;
}
.row-content span {
  position: relative;
    left: 0px;
    top: -72px;
  font-size: 14px;
  display: block;
  color: #000000;
  /* max-height: 50px; */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: pre-wrap;
  text-overflow: ellipsis;
  line-height: 2
}
.row-content p {
    display: block;
    position: relative;
    left: -1px;
    top: 108px;
    font-size: 13px;
    line-height: 8;
}
.el-popover{
  max-width:600px;
  max-height:800px;
  overflow: auto
}
.Calendar-targets{
  color: red
}
.el-button{
  padding:0px
}
.el-popover__title{
  font-size: 20px
}
</style>