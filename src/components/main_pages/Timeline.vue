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

          <div class="tl-container">
            <b-button @click="show1 = !show1">111</b-button>

            <transition name="el-zoom-in-top">
              <div class="tl-box" v-show="show1">
                <b-card>date</b-card>
                <ul>
                  <li>
                    <p>title1</p>
                  </li>
                  <li>
                    <p>title1</p>
                  </li>
                  <li>
                    <p>title1</p>
                  </li>
                </ul>
              </div>
            </transition>
          </div>
          <div class="tl-container">
            <b-button>222</b-button>
          </div>
          <div class="tl-container">
            <b-button>333</b-button>
          </div>
          <div class="tl-container">
            <b-button>444</b-button>
          </div>
          <div class="tl-container">
            <b-button>555</b-button>
          </div>
          <div class="tl-container">
            <b-button>666</b-button>
          </div>
          <div class="tl-container">
            <b-button>777</b-button>
          </div>
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
      show1: false
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
.tl-container {
  height: 700px;
  width: 150px;
  background: yellow;
  margin: 0 5px;
  float: left;
  display: block;
}
.tl-box {
  margin-top: 15px;
  background: blue;
  width: 200px;
  z-index: 9999;
}
</style>

