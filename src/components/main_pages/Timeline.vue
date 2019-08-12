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

          <!-- 第一天 -->
          <div class="tl-container">
            <b-button @click="click1()">{{ weekArr[0] | formatTS }}</b-button>
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
          <!-- 第二天 -->
          <div class="tl-container">
            <b-button @click="click2">{{ weekArr[1] | formatTS }}</b-button>
            <transition name="el-zoom-in-top">
              <div class="tl-box" v-show="show2">
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
            <b-button>{{ weekArr[2] | formatTS }}</b-button>
          </div>
          <div class="tl-container">
            <b-button>{{ weekArr[3] | formatTS }}</b-button>
          </div>
          <div class="tl-container">
            <b-button>{{ weekArr[4] | formatTS }}</b-button>
          </div>
          <div class="tl-container">
            <b-button>{{ weekArr[5] | formatTS }}</b-button>
          </div>
          <div class="tl-container">
            <b-button>{{ weekArr[6] | formatTS }}</b-button>
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
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false,
      dateOne: "",
      weekArr: []
    };
  },
  created() {
    this.getWeek(new Date().valueOf());
  },
  mounted() {},
  methods: {
    // 生成一周的日期列表
    getWeek(date) {
      let day1 = date;
      this.dateOne = day1;
      this.weekArr.push(day1.valueOf());
      let dayMid = new Date(day1);
      let day2 = dayMid.setDate(dayMid.getDate() + 1);
      this.weekArr.push(day2);
      let day3 = dayMid.setDate(dayMid.getDate() + 1);
      this.weekArr.push(day3);
      let day4 = dayMid.setDate(dayMid.getDate() + 1);
      this.weekArr.push(day4);
      let day5 = dayMid.setDate(dayMid.getDate() + 1);
      this.weekArr.push(day5);
      let day6 = dayMid.setDate(dayMid.getDate() + 1);
      this.weekArr.push(day6);
      let day7 = dayMid.setDate(dayMid.getDate() + 1);
      this.weekArr.push(day7);
      console.log(this.weekArr);
      console.log(this.dateOne);
    },

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
    // 右箭头翻页
    nextPage() {
      this.weekArr = [];
      let dayMid = new Date(this.dateOne);
      let day1 = dayMid.setDate(dayMid.getDate() + 7);
      this.getWeek(day1);
      this.show1 = this.show2 = this.show3 = this.show4 = this.show5 = this.show6 = this.show7 = false;
    },
    // 左箭头翻页
    prePage() {
      this.weekArr = [];
      let dayMid = new Date(this.dateOne);
      let day1 = dayMid.setDate(dayMid.getDate() - 7);
      this.getWeek(day1);
      this.show1 = this.show2 = this.show3 = this.show4 = this.show5 = this.show6 = this.show7 = false;
    },
    // 日期按钮点击
    click1() {
      this.show1 = !this.show1;
      this.show2 = this.show3 = this.show4 = this.show5 = this.show6 = this.show7 = false;
    },
    click2() {
      this.show2 = !this.show2;
      this.show1 = this.show3 = this.show4 = this.show5 = this.show6 = this.show7 = false;
    }
  },
  filters: {
    formatTS(timestamp) {
      let date = new Date(timestamp);
      return formatDate(date, "yyyy-MM-dd");
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

