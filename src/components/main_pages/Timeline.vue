<template>
  <!-- Feature Section start -->
  <section id="timeline" class="timeline">
    <div class="feature-decor"></div>
    <div class="container">
      <div class="row">
        <!-- 横向事件轴 -->
        <div class="timeline-date">
          <div class="timeline-arrow">
            <i class="iconfont icon-icon-test-copy timeline-right" @click="prePage()"></i>
            <i class="iconfont icon-icon-test timeline-left" @click="nextPage()"></i>
          </div>
          <ul>
            <li>
              <b-button
                class="timeline-time"
                v-for="(item,index) in buttons"
                :key="index"
                @click="btnClick(item,index)"
                :id="`btn-${index}`"
                :pressed.sync="item.state"
              >
                <span ref="btn" class="timeline-day">{{ item.date }}</span>
              </b-button>
              <!-- 事件轴内容 -->
              <div v-if="buttons[clicked].state" class="timeline-content">
                <ul class="timeline-content-date">
                  <div class="timeline-content-time">{{ list.agg_date }}</div>
                  <li>
                    <div
                      class="timeline-content-details"
                      v-for="(itm,idx) in list.event_list"
                      :key="idx"
                      :id="`timeline-${idx}`"
                    >
                      <span class="timeline-content-title">{{itm.event_title}}</span>
                      <p class="timeline-content-event">今天</p>
                      <p class="content-time">
                        <i class="iconfont icon-iconfontyoujiantou-copy"></i>
                      </p>
                      <b-popover
                        style="max-width:600px"
                        :target="`timeline-${idx}`"
                        placement="rightbottom"
                        triggers="click blur"
                      >
                        <template slot="title">{{ itm.event_title }}</template>
                        <div v-for="(ait,aix) in itm.detail" :key="aix">
                          <h3>{{ ait.event_title}}</h3>
                          <p>{{ ait.content}}</p>
                          <h4 style="color:red">标的:</h4>
                          <p style="font-size:14px;color:#ccc">{{ ait.targets }}</p>
                        </div>
                      </b-popover>
                    </div>
                    <!-- 上下翻页 -->
                    <div class="timeline-arr">
                      <span class="top-arrow" @click="TopArrow">上一页</span>
                      <span class="buttom-arrow" @click="ButtomArrow">下一页</span>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <!-- Feature Section End -->
</template>
<script>
import { isString } from "util";
import { formatDate } from "@/common/date.js";
export default {
  name: "timeline",
  data() {
    return {
      start: 0,
      end: 9,
      start_date: "",
      end_date: "",
      isShow: false,
      skip: 0,
      curDate: formatDate(new Date(), "yyyy-MM-dd"),
      noMoreData: false,
      message: "",
      list: "",
      chats: "",
      btnState: [false, false, false, false, false, false, false],
      clicked: 0,
      buttons: []
    };
  },
  created() {
    this.getEvryDay();
  },
  mounted() {},
  methods: {
    // 加载指定日期的内容
    loadEvents(date) {
      let url = this.$host + "/timeline-detail/";
      this.$ajax
        .get(url, {
          params: {
            start_date: date
          }
        })
        .then(res => {
          this.list = res.data.data;
          if (res.data.data.length != 8) {
            this.noMoreData = true;
          }
          // console.log(this.list);
        });
    },

    TopArrow() {
      this.noMoreData = false;
      if (this.skip != 0) {
        this.skip -= 8;
        this.loadIdeas(this.curDate);
      } else {
        alert("没有内容了");
      }
    },
    ButtomArrow() {
      if (this.noMoreData == false) {
        this.skip += 8;
        this.list(this.curDate);
      } else {
        alert("没有内容了");
      }
    },
<<<<<<< HEAD
=======
    click(date) {
      this.noMoreData = false;
      this.skip = 0;
      this.loadIdeas(date);
    },
>>>>>>> 98103c284ab210471ae6c773ec7e72d92e0d8a72

    // 日期按钮点击方法
    btnClick(item, index) {
      this.clicked = index;
      for (var i = 0; i < 7; i++) {
        // console.log(i);
        if (i != index) {
          this.buttons[i].state = false;
        }
      }
      this.isShow = !this.isShow;
      console.log(item.date);
      let date = item.date;
      this.loadEvents(date);
    },
    // 右箭头翻页
    nextPage() {
      let days = document.getElementById("btn-1");
      let da = days.firstElementChild.innerHTML;
      // console.log(da)
      let startDate = new Date(da);
      startDate.setDate(startDate.getDate() - 6);
      let Date2 = new Date(startDate.getTime() - 24 * 60 * 60 * 1000);
      let Date3 = new Date(startDate.getTime() - 48 * 60 * 60 * 1000);
      let Date4 = new Date(startDate.getTime() - 72 * 60 * 60 * 1000);
      let Date5 = new Date(startDate.getTime() - 96 * 60 * 60 * 1000);
      let Date6 = new Date(startDate.getTime() - 120 * 60 * 60 * 1000);
      let Date7 = new Date(startDate.getTime() - 144 * 60 * 60 * 1000);
      let a = formatDate(startDate, "yyyy-MM-dd");
      let b = formatDate(Date2, "yyyy-MM-dd");
      let c = formatDate(Date3, "yyyy-MM-dd");
      let d = formatDate(Date4, "yyyy-MM-dd");
      let e = formatDate(Date5, "yyyy-MM-dd");
      let f = formatDate(Date6, "yyyy-MM-dd");
      let g = formatDate(Date7, "yyyy-MM-dd");
      // console.log(a,b,c,d,e,f,g)
      this.buttons = [
        { date: a, state: false },
        { date: b, state: false },
        { date: c, state: false },
        { date: d, state: false },
        { date: e, state: false },
        { date: f, state: false },
        { date: g, state: false }
      ];
    },
    // 左箭头翻页
    prePage() {
      let days = document.getElementById("btn-6");
      let da = days.firstElementChild.innerHTML;
      // console.log(da)
      let startDate = new Date(da);
      startDate.setDate(startDate.getDate() + 7);
      let Date2 = new Date(startDate.getTime() + 24 * 60 * 60 * 1000);
      let Date3 = new Date(startDate.getTime() + 48 * 60 * 60 * 1000);
      let Date4 = new Date(startDate.getTime() + 72 * 60 * 60 * 1000);
      let Date5 = new Date(startDate.getTime() + 96 * 60 * 60 * 1000);
      let Date6 = new Date(startDate.getTime() + 120 * 60 * 60 * 1000);
      let Date7 = new Date(startDate.getTime() + 144 * 60 * 60 * 1000);
      let a = formatDate(startDate, "yyyy-MM-dd");
      let b = formatDate(Date2, "yyyy-MM-dd");
      let c = formatDate(Date3, "yyyy-MM-dd");
      let d = formatDate(Date4, "yyyy-MM-dd");
      let e = formatDate(Date5, "yyyy-MM-dd");
      let f = formatDate(Date6, "yyyy-MM-dd");
      let g = formatDate(Date7, "yyyy-MM-dd");
      // console.log(a,b,c,d,e,f,g)
      this.buttons = [
        { date: g, state: false },
        { date: f, state: false },
        { date: e, state: false },
        { date: d, state: false },
        { date: c, state: false },
        { date: b, state: false },
        { date: a, state: false }
      ];
    },
    getEvryDay() {
      //当天
      let Date1 = new Date();
      //前一天
      let Date2 = new Date(Date1.getTime() - 24 * 60 * 60 * 1000);
      //前两天
      let Date3 = new Date(Date1.getTime() - 48 * 60 * 60 * 1000);
      //前三天
      let Date4 = new Date(Date1.getTime() - 72 * 60 * 60 * 1000);
      //前四天
      let Date5 = new Date(Date1.getTime() - 96 * 60 * 60 * 1000);
      //前五天
      let Date6 = new Date(Date1.getTime() - 120 * 60 * 60 * 1000);
      //前六天
      let Date7 = new Date(Date1.getTime() - 144 * 60 * 60 * 1000);
      let a = formatDate(Date1, "yyyy-MM-dd");
      let b = formatDate(Date2, "yyyy-MM-dd");
      let c = formatDate(Date3, "yyyy-MM-dd");
      let d = formatDate(Date4, "yyyy-MM-dd");
      let e = formatDate(Date5, "yyyy-MM-dd");
      let f = formatDate(Date6, "yyyy-MM-dd");
      let g = formatDate(Date7, "yyyy-MM-dd");
      this.buttons = [
        { date: a, state: false },
        { date: b, state: false },
        { date: c, state: false },
        { date: d, state: false },
        { date: e, state: false },
        { date: f, state: false },
        { date: g, state: false }
      ];
    }
  },
  filters: {
    formatPubDate(time) {
      var date = new Date(time);
      return formatDate(date, "MM/dd");
    },
    formatClock(timestamp) {
      var date = new Date(timestamp);
      return formatDate(date, "hh:mm");
    }
  }
};
</script>

<style lang='css'>
.timeline {
  background: url(../../assets/images/background/bg_01.jpg);
  margin-top: 0;
  align-items: center;
  position: relative;
  height: 940px;
}
.timeline-time {
  width: 148px;
  height: 34px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-decoration: none;
  float: left;
  margin-left: 10px;
  transform: skew(38deg, 0deg);
}
.timeline-date .active {
  color: red !important;
}

.timeline-day {
  z-index: 1;
  transform: skewX(-38deg);
}
/* .timeline-arrow {
  position: relative;
} */
.timeline-arrow {
  position: relative;
}
.timeline-right {
  position: absolute;
  top: 6px;
  left: -52px;
  opacity: 0.3;
}
.timeline-left {
  position: absolute;
  top: 3px;
  left: 1135px;
  opacity: 0.3;
}
.timeline-right:hover,
.timeline-left:hover {
  opacity: 1;
}
.timeline-content {
  width: 294px;
  height: 703px;
  position: relative;
  top: 96px;
  left: 43px;
  background: azure;
}
.timeline-content-time {
  position: relative;
  top: -19px;
  left: 35px;
}
.timeline-content-time::after {
  content: "";
  width: 276px;
  height: 2px;
  background: #ccc;
  position: absolute;
  top: 65px;
  left: -27px;
}
.timeline-content-details {
  height: 61px;
}
.content-time {
  position: relative;
  top: -55px;
  left: 244px;
  font-size: 13px;
}
.content-time .iconfont {
  font-size: 24px;
}
.timeline-content-date {
  padding: 0px;
}
.timeline-content-date:nth-child(2n + 1) .timeline-content-datails {
  background: #000;
}
.timeline-date .btn {
  background: #ccc;
}
.timeline-arr {
  text-align: center;
  color: #ccc;
}
.timeline-arr span {
  margin: 0px 54px 0px 47px;
}

.timeline-accordion {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  transform: translateX(10px);
  opacity: 0;
}
.buttom-arrow:hover,
.top-arrow:hover {
  color: #000;
}
.timeline-content-event {
  width: 200px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.timeline-content-title,
.timeline-content-event {
  margin-left: 20px;
}

.popover-header {
  margin-top: 0px !important;
}
.popover {
  max-width: 600px !important;
}
</style>

