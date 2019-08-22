<template>
  <!-- Feature Section start -->
  <section id="timeline" class="timeline">
    <div class="wrap-mask">
      <div class="feature-decor"></div>
      <div class="container">
        <div class="row">
          <!-- 横向事件轴 -->
          <div class="timeline-date">
            <div class="timeline-arrow">
              <i class="iconfont icon-icon-test-copy timeline-right" @click="prePage()" ></i>
              <i class="iconfont icon-icon-test timeline-left" @click="nextPage()"></i>
            </div>

            <!-- 第一天 -->
            <div class="tl-container">
              <b-button class="timeline-time" @click="click1()">
                <span class="timeline-day">{{ weekArr[0] | formatTS }}</span>
              </b-button>
              <transition name="el-zoom-in-top">
                <div class="tl-box" v-show="show1">
                  <p class="timeline-card">{{ dataList.agg_date }}</p>
                  <ul class="tl-ul">
                    <li
                      class="timeline-content-details"
                      v-for="(item, index) in dataList.event_list"
                      :key="index"
                    >
                      <p class="timeline-content-event" :id="`li-1-${index}`">{{ item.event_title }}</p>
                      <b-popover
                        :target="`li-1-${index}`"
                        :title="item.event_title"
                        triggers="click blur"
                        placement="right"
                      >
                        <div v-for="(itm, idx) in item.detail" :key="idx">
                          <h4>{{ itm.update_date }}</h4>
                          <span class='timeline-span'>{{ itm.content }}</span>
                          <p class='timeline-p'>{{ itm.targets }}</p>
                        </div>
                      </b-popover>
                    </li>
                    <!-- 上下翻页 -->
                    <div class="timeline-arr">
                      <span class="top-arrow" @click="TopArrow">上一页</span>
                      <span class="buttom-arrow" @click="ButtomArrow">下一页</span>
                    </div>
                  </ul>
                </div>
              </transition>
            </div>
            <!-- 第二天 -->
            <div class="tl-container">
              <b-button class="timeline-time" @click="click2">
                <span class="timeline-day">{{ weekArr[1] | formatTS }}</span>
              </b-button>
              <transition name="el-zoom-in-top">
                <div class="tl-box" v-show="show2">
                  <p class="timeline-card">{{ dataList.agg_date }}</p>
                  <ul  class="tl-ul">
                    <li
                      class="timeline-content-details"
                      v-for="(item, index) in dataList.event_list"
                      :key="index"
                    >
                      <p class="timeline-content-event" :id="`li-2-${index}`">{{ item.event_title }}</p>
                      <b-popover
                        :target="`li-2-${index}`"
                        :title="item.event_title"
                        triggers="click"
                        placement="right"
                      >
                        <div v-for="(itm, idx) in item.detail" :Key="idx">
                          <h4>{{ itm.update_date }}</h4>
                          <span class='timeline-span'>{{ itm.content }}</span>
                          <p class='timeline-p'>{{ itm.targets }}</p>
                        </div>
                      </b-popover>
                    </li>
                    <!-- 上下翻页 -->
                    <div class="timeline-arr">
                      <span class="top-arrow" @click="TopArrow">上一页</span>
                      <span class="buttom-arrow" @click="ButtomArrow">下一页</span>
                    </div>
                  </ul>
                </div>
              </transition>
            </div>
            <!-- 第三天 -->
            <div class="tl-container">
              <b-button class="timeline-time" @click="click3">
                <span class="timeline-day">{{ weekArr[2] | formatTS }}</span>
              </b-button>
              <transition name="el-zoom-in-top">
                <div class="tl-box" v-show="show3">
                  <p class="timeline-card">{{ dataList.agg_date }}</p>
                  <ul class="tl-ul">
                    <li
                      class="timeline-content-details"
                      v-for="(item, index) in dataList.event_list"
                      :key="index"
                    >
                      <p class="timeline-content-event" :id="`li-3-${index}`">{{ item.event_title }}</p>
                      <b-popover
                        :target="`li-3-${index}`"
                        :title="item.event_title"
                        triggers="click"
                        placement="right"
                      >
                        <div v-for="(itm, idx) in item.detail" :key="idx">
                          <h4>{{ itm.update_date }}</h4>
                          <span  class='timeline-span'>{{ itm.content }}</span>
                          <p class='timeline-p'>{{ itm.targets }}</p>
                        </div>
                      </b-popover>
                    </li>
                    <!-- 上下翻页 -->
                    <div class="timeline-arr">
                      <span class="top-arrow" @click="TopArrow">上一页</span>
                      <span class="buttom-arrow" @click="ButtomArrow">下一页</span>
                    </div>
                  </ul>
                </div>
              </transition>
            </div>
            <!-- 第四天 -->
            <div class="tl-container">
              <b-button class="timeline-time" @click="click4">
                <span class="timeline-day">{{ weekArr[3] | formatTS }}</span>
              </b-button>
              <transition name="el-zoom-in-top">
                <div class="tl-box" v-show="show4">
                  <p class="timeline-card">{{ dataList.agg_date }}</p>
                  <ul class="tl-ul">
                    <li
                      class="timeline-content-details"
                      v-for="(item, index) in dataList.event_list"
                      :key="index"
                    >
                      <p class="timeline-content-event" :id="`li-4-${index}`">{{ item.event_title }}</p>
                      <b-popover
                        :target="`li-4-${index}`"
                        :title="item.event_title"
                        triggers="click"
                        placement="right"
                      >
                        <div v-for="(itm, idx) in item.detail" :key="idx">
                          <h4>{{ itm.update_date }}</h4>
                          <span class='timeline-span'>{{ itm.content }}</span>
                          <p class='timeline-p'>{{ itm.targets }}</p>
                        </div>
                      </b-popover>
                    </li>
                    <!-- 上下翻页 -->
                    <div class="timeline-arr">
                      <span class="top-arrow" @click="TopArrow">上一页</span>
                      <span class="buttom-arrow" @click="ButtomArrow">下一页</span>
                    </div>
                  </ul>
                </div>
              </transition>
            </div>
            <!-- 第五天 -->
            <div class="tl-container">
              <b-button class="timeline-time" @click="click5">
                <span class="timeline-day">{{ weekArr[4] | formatTS }}</span>
              </b-button>
              <transition name="el-zoom-in-top">
                <div class="tl-box" v-show="show5">
                  <p class="timeline-card">{{ dataList.agg_date }}</p>
                  <ul class="tl-ul">
                    <li
                      class="timeline-content-details"
                      v-for="(item, index) in dataList.event_list"
                      :key="index"
                    >
                      <p class="timeline-content-event" :id="`li-5-${index}`">{{ item.event_title }}</p>
                      <b-popover
                        class="timeline-popover"
                        :target="`li-5-${index}`"
                        :title="item.event_title"
                        triggers="click"
                        placement="right"
                      >
                        <div v-for="(itm, idx) in item.detail" :key="idx">
                          <h4>{{ itm.update_date }}</h4>
                          <span class='timeline-span'>{{ itm.content }}</span>
                          <p class='timeline-p'>{{ itm.targets }}</p>
                        </div>
                      </b-popover>
                    </li>
                  </ul>
                  <!-- 上下翻页 -->
                  <div class="timeline-arr">
                    <span class="top-arrow" @click="TopArrow">上一页</span>
                    <span class="buttom-arrow" @click="ButtomArrow">下一页</span>
                  </div>
                </div>
              </transition>
            </div>
            <!-- 第六天 -->
            <div class="tl-container">
              <b-button class="timeline-time" @click="click6">
                <span class="timeline-day">{{ weekArr[5] | formatTS }}</span>
              </b-button>
              <transition name="el-zoom-in-top">
                <div class="tl-box" v-show="show6">
                  <p class="timeline-card">{{ dataList.agg_date }}</p>
                  <ul class="tl-ul">
                    <li
                      class="timeline-content-details"
                      v-for="(item, index) in dataList.event_list"
                      :key="index"
                    >
                      <p class="timeline-content-event" :id="`li-6-${index}`">{{ item.event_title }}</p>
                      <b-popover
                        :target="`li-6-${index}`"
                        :title="item.event_title"
                        triggers="click"
                        boundary='window'
                        placement="right"
                      >
                        <div v-for="(itm, idx) in item.detail" :key="idx">
                          <h4>{{ itm.update_date }}</h4>
                          <span class='timeline-span'>{{ itm.content }}</span>
                          <p class='timeline-p'>{{ itm.targets }}</p>
                        </div>
                      </b-popover>
                    </li>
                    <!-- 上下翻页 -->
                    <div class="timeline-arr">
                      <span class="top-arrow" @click="TopArrow">上一页</span>
                      <span class="buttom-arrow" @click="ButtomArrow">下一页</span>
                    </div>
                  </ul>
                </div>
              </transition>
            </div>
            <!-- 第七天 -->
            <div class="tl-container">
              <b-button class="timeline-time" @click="click7">
                <span class="timeline-day">{{ weekArr[6] | formatTS }}</span>
              </b-button>
              <transition name="el-zoom-in-top">
                <div class="tl-box" v-show="show7">
                  <p class="timeline-card">{{ dataList.agg_date }}</p>
                  <ul class="tl-ul">
                    <li
                      class="timeline-content-details"
                      v-for="(item, index) in dataList.event_list"
                      :key="index"
                    >
                      <p class="timeline-content-event" :id="`li-7-${index}`">{{ item.event_title }}</p>
                      <b-popover
                        class="timeline-popover"
                        :target="`li-7-${index}`"
                        :title="item.event_title"
                        triggers="click"
                        placement="right"
                      >
                        <div v-for="(itm, idx) in item.detail" :key="idx">
                          <h4>{{ itm.update_date }}</h4>
                          <span class='timeline-span'>{{ itm.content }}</span>
                          <p class='timeline-p'>{{ itm.targets }}</p>
                        </div>
                      </b-popover>
                    </li>
                    <!-- 上下翻页 -->
                    <div class="timeline-arr">
                      <span class="top-arrow" @click="TopArrow">上一页</span>
                      <span class="buttom-arrow" @click="ButtomArrow">下一页</span>
                    </div>
                  </ul>
                </div>
              </transition>
            </div>
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
      weekArr: [],
      dataList: []
    };
  },
  created() {
    this.getWeek(new Date().valueOf());
    this.click1();
  },
  mounted() {
  },
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
    },

    // 加载指定日期的内容
    loadEvents(date) {
      let url = this.$host + "/api/timeline-detail/";
      this.$ajax
        .get(url, {
          params: {
            start_date: date
          }
        })
        .then(res => {
          this.dataList = res.data.data;
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
      let date = formatDate(new Date(this.weekArr[0]), "yyyy-MM-dd");
      this.loadEvents(date);
    },
    click2() {
      this.show2 = !this.show2;
      this.show1 = this.show3 = this.show4 = this.show5 = this.show6 = this.show7 = false;
      let date = formatDate(new Date(this.weekArr[1]), "yyyy-MM-dd");
      this.loadEvents(date);
    },
    click3() {
      this.show3 = !this.show3;
      this.show1 = this.show2 = this.show4 = this.show5 = this.show6 = this.show7 = false;
      let date = formatDate(new Date(this.weekArr[2]), "yyyy-MM-dd");
      this.loadEvents(date);
    },
    click4() {
      this.show4 = !this.show4;
      this.show1 = this.show2 = this.show3 = this.show5 = this.show6 = this.show7 = false;
      let date = formatDate(new Date(this.weekArr[3]), "yyyy-MM-dd");
      this.loadEvents(date);
    },
    click5() {
      this.show5 = !this.show5;
      this.show1 = this.show2 = this.show3 = this.show4 = this.show6 = this.show7 = false;
      let date = formatDate(new Date(this.weekArr[4]), "yyyy-MM-dd");
      this.loadEvents(date);
    },
    click6() {
      this.show6 = !this.show6;
      this.show1 = this.show2 = this.show3 = this.show4 = this.show5 = this.show7 = false;
      let date = formatDate(new Date(this.weekArr[5]), "yyyy-MM-dd");
      this.loadEvents(date);
    },
    click7() {
      this.show7 = !this.show7;
      this.show1 = this.show2 = this.show3 = this.show4 = this.show5 = this.show6 = false;
      let date = formatDate(new Date(this.weekArr[6]), "yyyy-MM-dd");
      this.loadEvents(date);
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
        this.loadIdeas(this.curDate);
      } else {
        alert("没有内容了");
      }
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
  background: url(http://pw989qog6.bkt.clouddn.com/bg_07.jpg) no-repeat;
  background-size: 100% 100%;
  margin-top: 0;
  align-items: center;
  position: relative;
  height: 940px;
}
.wrap-mask{
  background: rgba(10, 10, 10, 0.55);
  z-index: 999;
  height: 940px;
  margin-top: -100px;
}
.timeline-date {
  margin-top: 100px;
}
.timeline-time {
  width: 148px;
  height: 34px;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  transform: skew(40deg, 0deg);
  background: #ccc; 
}
.timeline-day {
  z-index: 9999;
  display: block;
  transform: skewX(-39deg);
  color: black;
}
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
  /* background: yellow; */
  margin: 0 5px;
  float: left;
  display: block;
}
.tl-box {
  margin-top: 15px;
  background-color:  rgba(10, 10, 10, 0.55);
  width: 250px;
  z-index: 9999;
  height: 720px;
}
.timeline-content-details {
    height: 34px;
    margin: 8px 17px;
    border-bottom: 1px solid #D5B489;
    overflow: hidden;
}
.timeline-content-details p {
  color: white;
}
.popover-header {
  margin-top: 0px;
}
.timeline-card {
  font-size: 15px;
  font-weight: bolder;
  padding: 1.25rem;
  color: white;
  border-bottom: 1px solid #D5B489;
}
.timeline-arr {
  text-align: center;
  color: #ccc;
  position: absolute;
  top: 827px;
}
.timeline-arr span {
  margin: 0 54px 0 32px;
}
.top-arrow:hover,
.buttom-arrow:hover {
  color:#D5B489;
}
.timeline-content-details p:hover{
  color:#D5B489
}
.tl-ul {
 padding-left: 0px;
}
.popover{
  max-width:600px;
  max-height:800px;
  overflow: auto
}
.timeline-span{
  word-wrap:break-word; 
  white-space:normal;
  width:auto;
  display:block;
  white-space:pre-wrap;
}
.timeline-p{
  color:red
}
</style>

