<template >
  <!-- Record Start -->
  <section id="record" class="about">
    <div class="about-decor"></div>
    <div class="container">
      <div class="row">
        <div class="record-time">
          <!-- 左右箭头 -->
          <div class="record-arrow">
            <i class="iconfont icon-icon-test record-right" @click="nextPage()"></i>
            <i class="iconfont icon-icon-test-copy record-left" @click="prePage()"></i>
          </div>

          <!-- 第一天 -->
          <div class="rc-box">
            <!-- 置顶区 -->
            <div class="record-title-top">
              <div class="record-top-content">
                <p class="top-title" style="margin:0px:color:#000">{{ chats[0] | formatAuthor }}</p>
                <span class="top-content">{{ chats[0] | formatContent }}</span>
              </div>
            </div>
            <!-- 日期按钮 -->
            <b-button class="record-cicle" @click="click1()"><span class="record-cicle-time">{{ weekArr[0] | formatPubDate }}</span></b-button>
            <div class="record-cross-line"></div>
            <transition name="el-zoom-in-top">
              <div v-show="show1">
                <!-- 上下箭头 -->
                <div class="icon-arrow">
                  <i class="iconfont icon-iconfont15 record-top-arrow" @click="loadPrev()"></i>
                  <i
                    class="iconfont icon-iconfont15-button record-buttom-arrow"
                    @click="loadNext()"
                  ></i>
                </div>
                <!-- 聊天框 -->
                <div class="record-title" v-for="(itm, idx) in dailyChats" :key="idx">
                  <span class="record-time-a">{{ itm.timestamp | formatClock }}</span>
                  <div class="record-cicle-a"></div>
                  <div class="record-content left" :id="`recordpop-1-${idx}`">
                    <img class="admin-img" src="../../assets/images/background/avatar_01.jpg" alt />
                    <p class="record-nickname">{{ itm.nickname }}</p>
                    <p class="record-nickname-content">{{ itm.content }}</p>
                  </div>
                  <div class="record-timeline"></div>
                  <b-popover
                    class="record-popover"
                    :target="`recordpop-1-${idx}`"
                    triggers="click"
                    placement="rightbottom"
                  >
                    <template slot="title">{{ itm.nickname }}</template>
                    {{ itm.content }}
                  </b-popover>
                </div>
              </div>
            </transition>
          </div>

          <!-- 第二天 -->
          <div class="rc-box">
            <!-- 置顶区 -->
            <div class="record-title-top">
              <div class="record-top-content">
                <p class="top-title" style="margin:0px:color:#000">{{ chats[1] | formatAuthor }}</p>
                <span class="top-content">{{ chats[1] | formatContent }}</span>
              </div>
            </div>
            <!-- 日期按钮 -->
            <b-button class="record-cicle" @click="click2()"><span class='record-cicle-time'>{{ weekArr[1] | formatPubDate }}</span></b-button>
            <div class="record-cross-line"></div>
            <transition name="el-zoom-in-top">
              <div v-show="show2">
                <!-- 上下箭头 -->
                <div class="icon-arrow">
                  <i class="iconfont icon-iconfont15 record-top-arrow" @click="loadPrev()"></i>
                  <i
                    class="iconfont icon-iconfont15-button record-buttom-arrow"
                    @click="loadNext()"
                  ></i>
                </div>
                <!-- 聊天框 -->
                <div class="record-title" v-for="(itm, idx) in dailyChats" :key="idx">
                  <span class="record-time-a">{{ itm.timestamp | formatClock }}</span>
                  <div class="record-cicle-a"></div>
                  <div class="record-content left" :id="`recordpop-2-${idx}`">
                    <img class="admin-img" src="../../assets/images/background/avatar_01.jpg" alt />
                    <p class="record-nickname">{{ itm.nickname }}</p>
                    <p class="record-nickname-content">{{ itm.content }}</p>
                  </div>
                  <div class="record-timeline"></div>
                  <b-popover
                    class="record-popover"
                    :target="`recordpop-2-${idx}`"
                    triggers="click"
                    placement="rightbottom"
                  >
                    <template slot="title">{{ itm.nickname }}</template>
                    {{ itm.content }}
                  </b-popover>
                </div>
              </div>
            </transition>
          </div>

          <!-- 第三天 -->
          <div class="rc-box">
            <!-- 置顶区 -->
            <div class="record-title-top">
              <div class="record-top-content">
                <p class="top-title" style="margin:0px:color:#000">{{ chats[2] | formatAuthor }}</p>
                <span class="top-content">{{ chats[2] | formatContent }}</span>
              </div>
            </div>
            <!-- 日期按钮 -->
            <b-button class="record-cicle" @click="click3()"><span class='record-cicle-time'>{{ weekArr[2] | formatPubDate }}</span></b-button>
            <div class="record-cross-line"></div>
            <transition name="el-zoom-in-top">
              <div v-show="show3">
                <!-- 上下箭头 -->
                <div class="icon-arrow">
                  <i class="iconfont icon-iconfont15 record-top-arrow" @click="loadPrev()"></i>
                  <i
                    class="iconfont icon-iconfont15-button record-buttom-arrow"
                    @click="loadNext()"
                  ></i>
                </div>
                <!-- 聊天框 -->
                <div class="record-title" v-for="(itm, idx) in dailyChats" :key="idx">
                  <span class="record-time-a">{{ itm.timestamp | formatClock }}</span>
                  <div class="record-cicle-a"></div>
                  <div class="record-content left" :id="`recordpop-3-${idx}`">
                    <img class="admin-img" src="../../assets/images/background/avatar_01.jpg" alt />
                    <p class="record-nickname">{{ itm.nickname }}</p>
                    <p class="record-nickname-content">{{ itm.content }}</p>
                  </div>
                  <div class="record-timeline"></div>
                  <b-popover
                    class="record-popover"
                    :target="`recordpop-3-${idx}`"
                    triggers="click"
                    placement="rightbottom"
                  >
                    <template slot="title">{{ itm.nickname }}</template>
                    {{ itm.content }}
                  </b-popover>
                </div>
              </div>
            </transition>
          </div>

          <!-- 第四天 -->
          <div class="rc-box">
            <!-- 置顶区 -->
            <div class="record-title-top">
              <div class="record-top-content">
                <p class="top-title" style="margin:0px:color:#000">{{ chats[3] | formatAuthor }}</p>
                <span class="top-content">{{ chats[3] | formatContent }}</span>
              </div>
            </div>
            <!-- 日期按钮 -->
            <b-button class="record-cicle" @click="click4()"><span class='record-cicle-time'>{{ weekArr[3] | formatPubDate }}</span></b-button>
            <div class="record-cross-line"></div>
            <transition name="el-zoom-in-top">
              <div v-show="show4">
                <!-- 上下箭头 -->
                <div class="icon-arrow">
                  <i class="iconfont icon-iconfont15 record-top-arrow" @click="loadPrev()"></i>
                  <i
                    class="iconfont icon-iconfont15-button record-buttom-arrow"
                    @click="loadNext()"
                  ></i>
                </div>
                <!-- 聊天框 -->
                <div class="record-title" v-for="(itm, idx) in dailyChats" :key="idx">
                  <span class="record-time-a">{{ itm.timestamp | formatClock }}</span>
                  <div class="record-cicle-a"></div>
                  <div class="record-content left" :id="`recordpop-4-${idx}`">
                    <img class="admin-img" src="../../assets/images/background/avatar_01.jpg" alt />
                    <p class="record-nickname">{{ itm.nickname }}</p>
                    <p class="record-nickname-content">{{ itm.content }}</p>
                  </div>
                  <div class="record-timeline"></div>
                  <b-popover
                    class="record-popover"
                    :target="`recordpop-4-${idx}`"
                    triggers="click"
                    placement="rightbottom"
                  >
                    <template slot="title">{{ itm.nickname }}</template>
                    {{ itm.content }}
                  </b-popover>
                </div>
              </div>
            </transition>
          </div>

          <!-- 第五天 -->
          <div class="rc-box">
            <!-- 置顶区 -->
            <div class="record-title-top">
              <div class="record-top-content">
                <p class="top-title" style="margin:0px:color:#000">{{ chats[4] | formatAuthor }}</p>
                <span class="top-content">{{ chats[4] | formatContent }}</span>
              </div>
            </div>
            <!-- 日期按钮 -->
            <b-button class="record-cicle" @click="click5()"><span class='record-cicle-time'>{{ weekArr[4] | formatPubDate }}</span></b-button>
            <div class="record-cross-line"></div>
            <transition name="el-zoom-in-top">
              <div v-show="show5">
                <!-- 上下箭头 -->
                <div class="icon-arrow">
                  <i class="iconfont icon-iconfont15 record-top-arrow" @click="loadPrev()"></i>
                  <i
                    class="iconfont icon-iconfont15-button record-buttom-arrow"
                    @click="loadNext()"
                  ></i>
                </div>
                <!-- 聊天框 -->
                <div class="record-title" v-for="(itm, idx) in dailyChats" :key="idx">
                  <span class="record-time-a">{{ itm.timestamp | formatClock }}</span>
                  <div class="record-cicle-a"></div>
                  <div class="record-content left" :id="`recordpop-5-${idx}`">
                    <img class="admin-img" src="../../assets/images/background/avatar_01.jpg" alt />
                    <p class="record-nickname">{{ itm.nickname }}</p>
                    <p class="record-nickname-content">{{ itm.content }}</p>
                  </div>
                  <div class="record-timeline"></div>
                  <b-popover
                    class="record-popover"
                    :target="`recordpop-5-${idx}`"
                    triggers="click"
                    placement="rightbottom"
                  >
                    <template slot="title">{{ itm.nickname }}</template>
                    {{ itm.content }}
                  </b-popover>
                </div>
              </div>
            </transition>
          </div>

          <!-- 第六天 -->
          <div class="rc-box">
            <!-- 置顶区 -->
            <div class="record-title-top">
              <div class="record-top-content">
                <p class="top-title" style="margin:0px:color:#000">{{ chats[5] | formatAuthor }}</p>
                <span class="top-content">{{ chats[5] | formatContent }}</span>
              </div>
            </div>
            <!-- 日期按钮 -->
            <b-button class="record-cicle" @click="click6()"><span class='record-cicle-time'>{{ weekArr[5] | formatPubDate }}</span></b-button>
            <div class="record-cross-line"></div>
            <transition name="el-zoom-in-top">
              <div v-show="show6">
                <!-- 上下箭头 -->
                <div class="icon-arrow">
                  <i class="iconfont icon-iconfont15 record-top-arrow" @click="loadPrev()"></i>
                  <i
                    class="iconfont icon-iconfont15-button record-buttom-arrow"
                    @click="loadNext()"
                  ></i>
                </div>
                <!-- 聊天框 -->
                <div class="record-title" v-for="(itm, idx) in dailyChats" :key="idx">
                  <span class="record-time-a">{{ itm.timestamp | formatClock }}</span>
                  <div class="record-cicle-a"></div>
                  <div class="record-content left" :id="`recordpop-6-${idx}`">
                    <img class="admin-img" src="../../assets/images/background/avatar_01.jpg" alt />
                    <p class="record-nickname">{{ itm.nickname }}</p>
                    <p class="record-nickname-content">{{ itm.content }}</p>
                  </div>
                  <div class="record-timeline"></div>
                  <b-popover
                    class="record-popover"
                    :target="`recordpop-6-${idx}`"
                    triggers="click"
                    placement="rightbottom"
                  >
                    <template slot="title">{{ itm.nickname }}</template>
                    {{ itm.content }}
                  </b-popover>
                </div>
              </div>
            </transition>
          </div>

          <!-- 第七天 -->
          <div class="rc-box">
            <!-- 置顶区 -->
            <div class="record-title-top">
              <div class="record-top-content">
                <p class="top-title" style="margin:0px:color:#000">{{ chats[6] | formatAuthor }}</p>
                <span class="top-content">{{ chats[6] | formatContent }}</span>
              </div>
            </div>
            <!-- 日期按钮 -->
            <b-button class="record-cicle" @click="click7()"><span class='record-cicle-time'>{{ weekArr[6] | formatPubDate }}</span></b-button>
            <div class="record-cross-line"></div>
            <transition name="el-zoom-in-top">
              <div v-show="show7">
                <!-- 上下箭头 -->
                <div class="icon-arrow">
                  <i class="iconfont icon-iconfont15 record-top-arrow" @click="loadPrev()"></i>
                  <i
                    class="iconfont icon-iconfont15-button record-buttom-arrow"
                    @click="loadNext()"
                  ></i>
                </div>
                <!-- 聊天框 -->
                <div class="record-title" v-for="(itm, idx) in dailyChats" :key="idx">
                  <span class="record-time-a">{{ itm.timestamp | formatClock }}</span>
                  <div class="record-cicle-a"></div>
                  <div class="record-content left" :id="`recordpop-7-${idx}`">
                    <img class="admin-img" src="../../assets/images/background/avatar_01.jpg" alt />
                    <p class="record-nickname">{{ itm.nickname }}</p>
                    <p class="record-nickname-content">{{ itm.content }}</p>
                  </div>
                  <div class="record-timeline"></div>
                  <b-popover
                    class="record-popover"
                    :target="`recordpop-7-${idx}`"
                    triggers="click"
                    placement="rightbottom"
                  >
                    <template slot="title">{{ itm.nickname }}</template>
                    {{ itm.content }}
                  </b-popover>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Record End -->
</template>
<script>
import { formatDate } from "@/common/date.js";
export default {
  name: "record",
  data() {
    return {
      perPage: 3,
      currentPage: 1,
      polling: null,
      startDate: "",
      chats: [],
      dailyChats: [
        {
          timestamp: new Date().valueOf(),
          nickname: "admin",
          content: "当前日期没有内容"
        }
      ],
      curDate: formatDate(new Date(), "yyyy-MM-dd"),
      skip: 0,
      noMoreData: false,
      showCollapse: true,

      show1: true,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false,
      weekArr: [],
      dateOne: ""
    };
  },
  created() {
    this.getWeek(new Date().valueOf());
    this.renderIdeas();
    // this.pollData();
  },
  mounted() {},
  beforeDestroy() {
    // clearInterval(this.polling);
  },
  computed: {},
  methods: {
    pollData() {
      this.polling = setInterval(() => {
        this.loadIdeas(this.curDate);
      }, 5000);
    },
    // 加载指定日期的内容
    loadIdeas(date) {
      this.curDate = date;

      let url = this.$host + "/idea-detail/";
      this.$ajax
        .get(url, {
          params: {
            pub_date: date,
            skip: this.skip
          }
        })
        .then(res => {
          console.log(res.data.data);
          if (res.data.data.length == 0) {
            this.dailyChats = [
              {
                timestamp: new Date().valueOf(),
                nickname: "admin",
                content: "当前日期没有内容"
              }
            ];
          } else {
            this.dailyChats = res.data.data;
          }

          // if (res.data.data.length != 8) {
          //   this.noMoreData = true;
          // }
        });
    },
    // 生成一周的日期列表
    getWeek(date) {
      let day1 = date;
      this.dateOne = day1;
      this.weekArr.push(day1.valueOf());
      let dayMid = new Date(day1);
      let day2 = dayMid.setDate(dayMid.getDate() - 1);
      this.weekArr.push(day2);
      let day3 = dayMid.setDate(dayMid.getDate() - 1);
      this.weekArr.push(day3);
      let day4 = dayMid.setDate(dayMid.getDate() - 1);
      this.weekArr.push(day4);
      let day5 = dayMid.setDate(dayMid.getDate() - 1);
      this.weekArr.push(day5);
      let day6 = dayMid.setDate(dayMid.getDate() - 1);
      this.weekArr.push(day6);
      let day7 = dayMid.setDate(dayMid.getDate() - 1);
      this.weekArr.push(day7);
    },
    // 右箭头翻页
    nextPage() {
      this.weekArr = [];
      let dayMid = new Date(this.dateOne);
      let day1 = dayMid.setDate(dayMid.getDate() - 7);
      this.getWeek(day1);
      this.show1 = this.show2 = this.show3 = this.show4 = this.show5 = this.show6 = this.show7 = false;
      this.renderIdeas();
    },
    // 左箭头翻页
    prePage() {
      this.weekArr = [];
      let dayMid = new Date(this.dateOne);
      let day1 = dayMid.setDate(dayMid.getDate() + 7);
      this.getWeek(day1);
      this.show1 = this.show2 = this.show3 = this.show4 = this.show5 = this.show6 = this.show7 = false;
      this.renderIdeas();
    },
    // 日期按钮点击
    click1() {
      this.show1 = !this.show1;
      this.show2 = this.show3 = this.show4 = this.show5 = this.show6 = this.show7 = false;
      let date = formatDate(new Date(this.weekArr[0]), "yyyy-MM-dd");
      this.loadIdeas(date);
    },
    click2() {
      this.show2 = !this.show2;
      this.show1 = this.show3 = this.show4 = this.show5 = this.show6 = this.show7 = false;
      let date = formatDate(new Date(this.weekArr[1]), "yyyy-MM-dd");
      this.loadIdeas(date);
    },
    click3() {
      this.show3 = !this.show3;
      this.show1 = this.show2 = this.show4 = this.show5 = this.show6 = this.show7 = false;
      let date = formatDate(new Date(this.weekArr[2]), "yyyy-MM-dd");
      this.loadIdeas(date);
    },
    click4() {
      this.show4 = !this.show4;
      this.show1 = this.show2 = this.show3 = this.show5 = this.show6 = this.show7 = false;
      let date = formatDate(new Date(this.weekArr[3]), "yyyy-MM-dd");
      this.loadIdeas(date);
    },
    click5() {
      this.show5 = !this.show5;
      this.show1 = this.show2 = this.show3 = this.show4 = this.show6 = this.show7 = false;
      let date = formatDate(new Date(this.weekArr[4]), "yyyy-MM-dd");
      this.loadIdeas(date);
    },
    click6() {
      this.show6 = !this.show6;
      this.show1 = this.show2 = this.show3 = this.show4 = this.show5 = this.show7 = false;
      let date = formatDate(new Date(this.weekArr[5]), "yyyy-MM-dd");
      this.loadIdeas(date);
    },
    click7() {
      this.show7 = !this.show7;
      this.show1 = this.show2 = this.show3 = this.show4 = this.show5 = this.show6 = false;
      let date = formatDate(new Date(this.weekArr[6]), "yyyy-MM-dd");
      this.loadIdeas(date);
    },
    // 点击日期按钮
    btnClick(date) {
      this.showCollapse = !this.showCollapse;
      this.noMoreData = false;
      this.skip = 0;
      this.loadIdeas(date);
    },
    // 上箭头翻页
    loadPrev() {
      this.noMoreData = false;
      if (this.skip != 0) {
        this.skip -= 8;
        this.loadIdeas(this.curDate);
      }
    },

    // 下箭头翻页
    loadNext() {
      if (this.noMoreData == false) {
        this.skip += 8;
        this.loadIdeas(this.curDate);
      }
    },
    // 加载一周的内容
    renderIdeas() {
      let start = formatDate(new Date(this.weekArr[0]), "yyyy-MM-dd");
      let end = formatDate(new Date(this.weekArr[6]), "yyyy-MM-dd");
      // 发起请求, 渲染页面数据
      let url = this.$host + "/idea/";
      this.$ajax
        .get(url, {
          params: {
            start_date: start,
            end_date: end
          }
        })
        .then(res => {
          this.chats = res.data.data;
          console.log(this.chats);
        });
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
    },
    formatAuthor(data) {
      if (!data) {
        return "";
      } else if (data.idea_list.length == 0) {
        return "";
      } else {
        return data.idea_list[0].nickname;
      }
    },
    formatContent(data) {
      if (!data) {
        return "";
      } else if (data.idea_list.length == 0) {
        return "";
      } else {
        return data.idea_list[0].content;
      }
    }
  }
};
</script>
<style scoped>
#record {
  background: url(http://pw989qog6.bkt.clouddn.com/bg_02.jpg);
  height: 940px;
  min-width:1200px
}
.record-line {
  width: 1px;
  height: 64px;
  border: 1px solid #bbb;
  position: relative;
  top: -104px;
  left: 24px;
}
.record-cross-line {
    position: relative;
    left: 4px;
    top: -56px;
}
.record-cross-line::after,
.record-cross-line::before {
  content: "";
  position: absolute;
}
.record-cross-line::before {
  width: 90px;
  height: 2px;
  background: #c19b73;
  left: 58px;
  top: 24px;
}
.record-cross-line::after {
    width: 46px;
    height: 2px;
    background: #c19b73;
    left: -53px;
    top: 24px;
}
.record-title {
  height: 76px;
}
.record-time-a {
  top: 25px;
  left: -24px;
  color: #aaa;
  font-size: 11px;
  font-weight: 100;
  display: block;
  position: relative;
}
.record-cicle-a {
  width: 10px;
  height: 10px;
  border: 2px solid #ccc;
  position: relative;
  left: 24px;
  top: 12px;
  border-radius: 50%;
  -webkit-box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.5);
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.5);
}
.record-content {
  position: relative;
  background-color: #fff;
  margin: 20px auto;
  width: 246px;
  height: 53px;
  border-radius: 10px;
  font-family: sans-serif;
  left: 55px;
  top: -39px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.5);
}
.record-content::after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
}
.left:after {
  top: 50%;
  right: 100%;
  margin-top: -9px;
  border-top: 8px solid transparent;
  border-right: 20px solid #fff;
  border-bottom: 8px solid transparent;
}
.record-content p {
  margin: 0px;
  margin-left: 66px;
  font-size: 14px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.record-content record-popover {
  width: 520px !important;
}
.record-top {
  position: absolute;
  top: 119px;
  left: 17px;
}
.btn {
  background: #c19b73;
}
.record-arrow {
  position: relative;
}
.btn-secondary {
  color: #fff;
}
.record-right {
  position: absolute;
  top: 74px;
  left: 1116px;
  opacity: 0.2;
}
.record-left {
  position: absolute;
  top: 74px;
  left: -74px;
  opacity: 0.2;
}
.record-right:hover,
.record-left:hover {
  opacity: 1;
}
.record-title-top {
  position: relative;
  opacity: 0.5;
  width: 139px;
  height: 57px;
  margin-left: 17px;
  border-radius: 10px;
  font-family: sans-serif;
  left: -57px;
  top: -17px;
  -webkit-box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.5);
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.5);
}
.admin-img {
  width: 55px;
  height: 53px;
  border: 1px solid #000;
  border-radius: 50%;
  position: absolute;
  left: 7px;
  top: 0px;
}
.wrapper {
  height: 500px;
  width: 1140px;
}
.top-title {
  display: block;
  height: 22px;
  position: relative;
  top: 0px;
  left: 7px;
  overflow: hidden;
  color: #000;
}
.top-content {
  height: 22px;
  overflow: hidden;
  position: relative;
  top: -13px;
  left: 6px;
  display: block;
}
.record-top-arrow {
  position: relative;
  top: 10px;
  left: 21px;
  opacity: 0.5;
}
.record-top-arrow:hover,
.record-buttom-arrow:hover {
  opacity: 1;
}
.record-buttom-arrow {
  position: relative;
  top: 624px;
  left: 1px;
  opacity: 0.5;
}
.record-timeline {
    height: 596px;
    width: 1px;
    position: relative;
    top: -116px;
    left: 28px;
    z-index: 0;
    border: 1px solid #ccc;
    border-style: dashed;
}
.collapse {
  position: relative;
}
.record-nickname {
  color: #000;
}
.record-nickname-content {
  display: block;
  overflow: hidden;
  height: 22px;
}

.rc-box {
  float: left;
  width: 160px;
  z-index: 9999;
  height: 720px;
}
.record-cicle{
  height:60px;
  width:60px;
  border-radius: 50%
}
.record-cicle-time{
  position: relative;
  left: -5px
}
</style>
