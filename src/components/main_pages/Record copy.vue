<template >
  <!-- Record Start -->
  <section id="record" class="about">
    <div class="about-decor"></div>
    <div class="container">
      <div class="row">
        <div class="record-time">
          <ul class="record-date">
            <!-- 头部日期 -->
            <li class="record-cicle" v-for="(item, index) in chats" :key="index">
              <b-button
                v-b-toggle="`recordpop-${index}`"
                :id="item.pub_date"
                @click="btnClick(item.pub_date)"
              >
                <p>{{ item.pub_date | formatPubDate }}</p>
              </b-button>
              <!-- 直线 -->
              <div class="record-cross-line"></div>
              <!-- 聊天下拉框 -->
              <b-collapse :id="`recordpop-${index}`" accordion="my-accordion">
                <!-- 上下箭头 -->
                <div class="icon-arrow">
                  <i class="iconfont icon-iconfont15 record-top-arrow" @click="loadPrev()"></i>
                  <i
                    class="iconfont icon-iconfont15-button record-buttom-arrow"
                    @click="loadNext()"
                  ></i>
                </div>
                <div class="record-title" v-for="(itm, idx) in dailyChats" :key="idx">
                  <span class="record-time-a">{{ itm.timestamp | formatClock }}</span>
                  <div class="record-cicle-a"></div>
                  <div class="record-content left" :id="`recordpop-${index}-${idx}`">
                    <img class="admin-img" src="../../assets/images/background/avatar_01.jpg" alt />
                    <p class="record-nickname">{{ itm.nickname }}</p>
                    <p class="record-nickname-content">{{ itm.content }}</p>
                    <b-popover
                      class="record-popover"
                      :target="`recordpop-${index}-${idx}`"
                      triggers="hover focus"
                      placement="rightbottom"
                    >
                      <template slot="title">{{ itm.nickname }}</template>
                      {{ itm.content }}
                    </b-popover>
                  </div>
                </div>
                <div class="record-timeline"></div>
              </b-collapse>
            </li>
          </ul>
          <div class="record-arrow">
            <i class="iconfont icon-icon-test record-right" @click="nextPage()"></i>
            <i class="iconfont icon-icon-test-copy record-left" @click="prePage()"></i>
          </div>
          <!-- 置顶区 -->
          <div style="float:left" v-for="(n,i) in 7" :key="i">
            <div class="record-title-top">
              <div class="record-top-content">
                <p class="top-title" style="margin:0px:color:#000">标题标题标题标题标题标题</p>
                <span class="top-content">内容内容内容内容内容内容内容内容</span>
              </div>
            </div>
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
      dailyChats: [],
      curDate: formatDate(new Date(), "yyyy-MM-dd"),
      skip: 0,
      noMoreData: false,
      showCollapse: true
    };
  },
  created() {
    this.renderIdeas();
    this.pollData();
  },
  mounted() {},
  beforeDestroy() {
    clearInterval(this.polling);
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
          this.dailyChats = res.data.data;
          if (res.data.data.length != 8) {
            this.noMoreData = true;
          }
        });
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
      let startDate = this.startDate;
      if (!startDate) {
        // 初次加载没有startDate, 加载当前日期及前七天
        startDate = new Date();
      }

      let endDate = new Date(startDate);
      endDate.setDate(endDate.getDate() - 6);
      let start = formatDate(startDate, "yyyy-MM-dd");
      let end = formatDate(endDate, "yyyy-MM-dd");
      // 重新声明以便翻页时调用
      this.startDate = startDate;

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
        });
    },
    // 右箭头翻页
    nextPage() {
      let startDate = this.startDate;
      let as = formatDate(startDate,"yyyy-MM-dd")
      console.log(as)
      startDate.setDate(startDate.getDate() - 7);
      this.startDate = startDate;
      this.renderIdeas();
      this.dailyChats = [];
    },
    // 左箭头翻页
    prePage() {
      let startDate = this.startDate;
      startDate.setDate(startDate.getDate() + 7);
      this.startDate = startDate;
      this.renderIdeas();
      this.dailyChats = [];
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
<style scoped>
#record {
  background: url(../../assets/images/background/bg_02.jpg);
  height: 940px;
}
.record-date-time {
  position: absolute;
  top: 10px;
  left: 5px;
  color: #fff;
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
  top: -51px;
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
  width: 75px;
  height: 2px;
  background: #c19b73;
  left: -86px;
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
/* .record-cicle-a::after,
.record-cicle-a::before {
  content: "";
  position: absolute;
}
.record-cicle-a::after {
  width: 2px;
  height: 69px;
  border: 1px solid #bbb;
  left: 2px;
  top: -70px;
  border-style: dashed;
}
.record-cicle-a::before {
  width: 2px;
  height: 41px;
  border: 1px solid #bbb;
  left: 2px;
  top: 8px;
  border-style: dashed;
} */
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
  top: 80px;
  left: 1129px;
  opacity: 0.2;
}
.record-left {
  position: absolute;
  top: 80px;
  left: -68px;
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
  left: -17px;
  top: -77px;
  -webkit-box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.5);
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.5);
}

.record-date:nth-child(2n) .record-cicle .record-title-top {
  background: transparent;
  left: 47px;
  top: -21px;
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
.record-date .record-cicle {
  float: left;
  margin: 27px 106px 0px 0px;
  height: 50px;
  width: 50px;
  position: relative;
  left: 39px;
  top: 52px;
}

.record-cicle button {
  width: 58px;
  height: 55px;
  border-radius: 50%;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.5);
}
.record-cicle button p {
  position: relative;
  top: 7px;
  left: -5px;
  color: #fff;
}
.record-date li:nth-child(2n) button {
  background: #ccc;
}
.record-date .record-cicle::before {
  content: "";
  width: 20px;
  height: 3px;
  background: #000;
}
.top-title {
  display: block;
  height: 22px;
  position: relative;
  top: 0px;
  left: 7px;
  overflow: hidden;
  color:#000
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
  position: absolute;
  top: 31px;
  left: 28px;
  z-index: 0;
  border: 1px solid #ccc;
  border-style: dashed;
}
.collapse {
  position: relative;
}
.record-nickname{
  color:#000
}
.record-nickname-content {
  display: block;
  overflow: hidden;
  height: 22px;
}
</style>
