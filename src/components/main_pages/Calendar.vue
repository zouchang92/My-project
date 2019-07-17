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
                    <div class="row-date">{{ item.agg_date }}</div>
                  </div>
                  <div class="row-right">
                    <div
                      class="row-content"
                      v-for="(itm, idx) in item.event_list"
                      :key="idx"
                      :id="`popover-${index}-${idx}`"
                    >
                      {{ itm.event_title }}
                      <p>{{ itm.str_date }}</p>
                      <b-popover :target="`popover-${index}-${idx}`" triggers="hover focus">
                        <template slot="title">{{ itm.event_title }}</template>
                        <h5>事件更新</h5>
                        <div v-for="(ditm, didx) in itm.detail" :key="didx">
                          <p>{{ ditm.content }}</p>
                          <strong>{{ ditm.update_date }}</strong>
                        </div>
                      </b-popover>
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

export default {
  name: "Calendar",
  components: {},
  created() {
    const that = this;
    this.loadData();
  },

  mounted() {},

  data() {
    return {
      calData: [],
      now: new Date(),
      pulldownMsg: "下拉刷新",
      pullupMsg: "加载更多",
      alertHook: "none",
      startDate: new Date()
    };
  },

  methods: {
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
      console.log(date);
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
      let endDate = new Date(startDate.valueOf());
      endDate.setDate(endDate.getDate() + 7);
      let end = this.timeFormat(endDate);
      let start = this.timeFormat(startDate);
      console.log(start, end);
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
          console.log(res.data);
          this.calData = this.calData.concat(res.data.data);
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
    }
  }
};
</script>

<style lang='css'>
.calendar {
  background: url(../../assets/images/background/bg_3.jpg);
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
  display: block;
  position: relative;
  margin: 5px;
}
.row-right {
  height: 110px;
  width: 1050px;
  float: right;
}
.row-content {
  height: 90px;
  width: 120px;
  border: 1px solid #eee;
  border-radius: 4px;
  box-shadow: 0 3px 12px #000000;
  margin: 10px 15px;
  float: left;
  background: #f0efe8;
}
</style>