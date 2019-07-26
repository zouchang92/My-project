<template>
  <!-- Feature Section start -->
  <section id="timeline" class="timeline">
    <div class="feature-decor"></div>
    <div class="container">
      <div class="row">
        <!-- 横向事件轴 -->
        <div class="timeline-date">
          <div class="timeline-arrow">
            <i class="iconfont icon-iconfont2-left-copy timeline-right" @click="prePage()"></i>
            <i class="iconfont icon-iconfont2-right timeline-left" @click="nextPage()"></i>
          </div>
          <b-button
            class="timeline-time"
            @click="click(item.pub_date)"
            v-for="(item,index) in chats"
            :key="index"
            :id="item.pub_date"
            ref="id"
          >
            <span class="timeline-day">{{ item.pub_date}}</span>
          </b-button>
          <!-- 事件轴内容 -->
          <transition name="slide-fade">
            <div v-if="isShow" class="timeline-content">
              <ul class="timeline-content-date">
                <li>
                  <div class="timeline-content-time">{{message}}</div>
                  <div class="timeline-content-details" v-for="(itm,idx) in dailyChats" :key="idx">
                    <span class="timeline-content-title">{{ itm.nickname }}</span>
                    <p class="timeline-content-event">{{ itm.content }}</p>
                    <p class="content-time">{{ itm.timestamp | formatClock }}</p>
                  </div>
                  <!-- 上下翻页 -->
                  <div class="timeline-arr">
                    <span class="top-arrow" @click="TopArrow">上一页</span>
                    <span class="buttom-arrow" @click="ButtomArrow">下一页</span>
                  </div>
                </li>
              </ul>
            </div>
          </transition>
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
      start_date: 0,
      end_date: 6,
      isShow: false,
      skip: 0,
      chats: [],
      curDate: formatDate(new Date(), "yyyy-MM-dd"),
      dailyChats: [],
      noMoreData: false,
      message:'',
    };
  },
  created() {
    this.renderIdeas();
    this.loadIdeas()
  },
  methods: {
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
          console.log(this.dailyChats);
        });
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
          console.log(this.chats);
        });
    },
    TopArrow() {
      this.noMoreData = false;
      if (this.skip != 0) {
        this.skip -= 8;
        this.loadIdeas(this.curDate);
      }else{
        alert('没有内容了')
      }
    },
    ButtomArrow() {
      if (this.noMoreData == false) {
        this.skip += 8;
        this.loadIdeas(this.curDate);
      }else{
        alert('没有内容了')
      }
    },
    click(date) {
      this.isShow = !this.isShow;
      this.noMoreData = false;
      this.skip = 0;
      this.loadIdeas(date);
      
    },
    // 右箭头翻页
    nextPage() {
      let startDate = this.startDate;
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
  top: 3px;
  left: -30px;
}
.timeline-left {
  position: absolute;
  top: 3px;
  left: 1135px;
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
  margin: 0px 17px;
}
.content-time {
  position: relative;
  top: -55px;
  left: 214px;
  font-size: 13px;
  color: #ccc;
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
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
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
</style>

