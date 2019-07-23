<template >
  <!-- Record Start -->
  <section id="record" class="about">
    <div class="about-decor"></div>
    <div class="container">
      <div class="row">
        <div class="record-time">
          <div class="record-date" v-for="(item, index) in chats" :key="index">
            <div class="record-cicle">
              <b-button v-b-toggle="`recordpop-${index}`" :id="item.pub_date">
                <p class="record-date-time">{{ item.pub_date | formatPubDate }}</p>
              </b-button>
              <!-- 置顶区 -->
              <div class="record-title-top">
                <div class="record-top-content">
                  <p style="margin:0px:color:#000">标题</p>
                  <span>内容内容</span>
                </div>
              </div>
              <!-- <div class="pules"></div> -->

              <!-- 聊天框下拉 -->
              <b-collapse :id="`recordpop-${index}`" accordion="my-accordion">
                <div class="record-title" v-for="(itm, idx) in item.idea_list" :key="idx">
                  <span class="record-time-a">{{ itm.timestamp | formatClock }}</span>
                  <div class="record-cicle-a"></div>
                  <div class="record-content left" :id="`recordpop-${index}-${idx}`">
                    <img class="admin-img" src="../../assets/images/background/avatar_01.jpg" alt />
                    <p>{{ itm.nickname }}</p>
                    <p>{{ itm.content }}</p>
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
                  <div class="record-text">
                    <div class="record-text-header"></div>
                  </div>
                </div>
              </b-collapse>
            </div>
          </div>
          <div class="record-arrow">
            <i class="iconfont icon-icon-test record-right" @click="nextPage()"></i>
            <i class="iconfont icon-icon-test-copy record-left" @click="prePage()"></i>
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
      chats: []
    };
  },
  created() {
    this.renderIdeas();
    this.pollData();
  },
  mounted() {
  },
  beforeDestroy() {
    clearInterval(this.polling);
  },
  computed: {
  },
  methods: {
    pollData() {
      this.polling = setInterval(() => {
        this.renderIdeas();
      }, 5000);
    },
    renderIdeas() {
      let startDate = this.startDate;
      if (!startDate) {
        // 初次加载没有startDate, 加载当前日期及前七天
        startDate = new Date();
        console.log("第一次加载页面");
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
    nextPage() {
      let startDate = this.startDate;
      startDate.setDate(startDate.getDate() - 7);
      this.startDate = startDate;
      this.renderIdeas();
    },
    prePage() {
      let startDate = this.startDate;
      startDate.setDate(startDate.getDate() + 7);
      this.startDate = startDate;
      this.renderIdeas();
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
}
.record-time {
  height: 940px;
}
.record-date {
  /* border: 1px solid #212222;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  text-align: center; */
  position: relative;
  display: inline;
  margin-left: 167px;
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
.record-cicle {
  width: 50px;
  height: 50px;
  /* border: 1px solid #212222; */
  position: absolute;
  left: -151px;
  top: 37px;
  border-radius: 50%;
  background-color: #ccc;
  -webkit-box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.5);
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.5);
}
.record-cicle::after,
.record-cicle::before {
  content: "";
  position: absolute;
}
.record-cicle::before {
  width: 80px;
  height: 2px;
  background: #c19b73;
  left: 55px;
  top: 24px;
}
.record-cicle::after {
  width: 52px;
  height: 2px;
  background: #c19b73;
  left: -57px;
  top: 24px;
}
.record-title {
  height: 76px;
}
.record-time-a {
  top: 3px;
  left: -32px;
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
  left: 20px;
  top: -10px;
  border-radius: 50%;
  -webkit-box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.5);
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.5);
}
.record-cicle-a::after,
.record-cicle-a::before {
  content: "";
  position: absolute;
}
.record-cicle-a::after {
  width: 2px;
  height: 25px;
  border: 1px solid #bbb;
  left: 2px;
  top: -27px;
}
.record-cicle-a::before {
  width: 2px;
  height: 41px;
  border: 1px solid #bbb;
  left: 2px;
  top: 8px;
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
  top: -61px;
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
  color: #000;
  margin-left: 66px;
}
.record-content record-popover {
  width: 520px !important;
}
.record-cicle button {
  border-radius: 50%;
  width: 50px;
  height: 50px;
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
  top: 28px;
  left: 1154px;
  opacity: 0.2;
}
.record-left {
  position: absolute;
  top: 28px;
  left: -68px;
  opacity: 0.2;
}
.record-right:hover,
.record-left:hover {
  opacity: 1;
}
.record-date:nth-child(2n + 1) .record-cicle .btn {
  background: #ccc;
}
.record-title-top {
  position: relative;
  opacity: 0.5;
  margin: 20px auto;
  width: 117px;
  height: 70px;
  border-radius: 10px;
  font-family: sans-serif;
  left: 47px;
  top: -134px;
  -webkit-box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.5);
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.5);
}
.record-title-top::after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
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
/* @keyframes warn {
   0% {
    transform: scale(0);
    opacity: 0;
  }

  25% {
    transform: scale(0);
    opacity: 0.1;
  }

  50% {
    transform: scale(0.1);
    opacity: 0.3;
  } 

  75% {
    transform: scale(0.5);
    opacity: 0.5;
  }

  100% {
    transform: scale(1);
    opacity: 0;
  }
}
.pules {
  position: absolute;
  width: 70px;
  height: 70px;
  left: -10px;
  top: -10px;
  border: 10px solid #fff;
  border-radius: 50%;
  z-index: 1;
  opacity: 0;
  -webkit-animation: warn 3s ease-out;
  -moz-animation: warn 3s ease-out;
  animation: warn 3s ease-out;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
} */
</style>
