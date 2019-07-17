<template >
  <!-- Record Start -->
  <section id="record" class="about">
    <div class="about-decor"></div>
    <div class="container">
      <div class="row">
        <div class="record-time">
          <div class="record-date" v-for="(item, index) in chats" :key="index">
            <div class="record-cicle">
              <b-button v-b-toggle="'record'+item.agg_date" :id="item.agg_date">
                <p>{{ item.agg_date | formatDate}}</p>
              </b-button>
              <div class="record-title-top">
                <div class="record-top-content">
                  <p style="color:#000">标题</p>
                </div>
              </div>
              <div class="pules"></div>

          <div v-for="(itm, idx) in item.chats_list" :key="idx">
            <b-collapse :id="'record'+item.agg_date" accordion="my-accordion">
              <div class="record-title">
                <div style="float:left">
                  <i class="iconfont icon-iconfont15 record-top"></i>
                  <span class="record-time-a">8:00</span>
                  <div class="record-line"></div>
                  <div class="record-cicle-a"></div>
                  <div class="record-content left" id="popover-3">
                    <img class="admin-img" src="../../assets/images/background/admin.jpeg" alt />
                    <p>标题</p>
                    <p>内容</p>
                    <b-popover
                      class="record-popover"
                      target="popover-3"
                      triggers="click"
                      placement="rightbottom"
                    >
                      <template slot="title">标题</template>
                      Embedding content using slots affords you greatercontrol.
                    </b-popover>
                  </div>
                </div>
                <div class="record-text">
                  <div class="record-text-header"></div>
                </div>
              </div>
            </b-collapse>
          </div>
            </div>
          </div>
          <div class="record-arrow">
            <i class="iconfont icon-icon-test record-right"></i>
            <i class="iconfont icon-icon-test-copy record-left"></i>
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
      chats: [
        {'agg_date': '2019-7-17', 'chats_list': [{'author': 'admin', 'content': '内容内容内容111'}, {'author': 'admin', 'content': '内容内容内容222'}, {'author': 'admin', 'content': '内容内容内容333'},]},
        {'agg_date': '2019-7-18', 'chats_list': [{'author': 'admin', 'content': '内容内容内容111'}, {'author': 'admin', 'content': '内容内容内容222'}, {'author': 'admin', 'content': '内容内容内容333'},]},
        {'agg_date': '2019-7-19', 'chats_list': [{'author': 'admin', 'content': '内容内容内容111'}, {'author': 'admin', 'content': '内容内容内容222'}, {'author': 'admin', 'content': '内容内容内容333'},]},
        {'agg_date': '2019-7-20', 'chats_list': [{'author': 'admin', 'content': '内容内容内容111'}, {'author': 'admin', 'content': '内容内容内容222'}, {'author': 'admin', 'content': '内容内容内容333'},]},
        {'agg_date': '2019-7-21', 'chats_list': [{'author': 'admin', 'content': '内容内容内容111'}, {'author': 'admin', 'content': '内容内容内容222'}, {'author': 'admin', 'content': '内容内容内容333'},]},
        {'agg_date': '2019-7-22', 'chats_list': [{'author': 'admin', 'content': '内容内容内容111'}, {'author': 'admin', 'content': '内容内容内容222'}, {'author': 'admin', 'content': '内容内容内容333'},]},
        {'agg_date': '2019-7-23', 'chats_list': [{'author': 'admin', 'content': '内容内容内容111'}, {'author': 'admin', 'content': '内容内容内容222'}, {'author': 'admin', 'content': '内容内容内容333'},]},
      ],
      list: [
        { id: 1, data: 7 },
        { id: 2, data: 8 },
        { id: 3, data: 9 },
        { id: 4, data: 1 },
        { id: 5, data: 2 },
        { id: 6, data: 7 }
      ],
      option: [
        { id: 1, time: 8 },
        { id: 2, time: 9 },
        { id: 3, time: 10 },
        { id: 4, time: 11 },
        { id: 5, time: 12 },
        { id: 6, time: 13 },
        { id: 7, time: 14 },
        { id: 8, time: 15 }
      ]
    };
  },
    filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "MM/dd");
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
.record-date p {
  position: absolute;
  top: 10px;
  left: 5px;
  color: #fff;
}
.record-line {
  width: 1px;
  height: 64px;
  border: 1px solid #bbb;
  position: absolute;
top: 59px;
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
/* .record-title {
  position: relative;
} */
.record-time-a {
  position: absolute;
    top: 159px;
    left: -11px;
  color: #aaa;
  font-size: 11px;
  font-weight: 100;
  display: block;
}
.record-cicle-a {
  width: 10px;
  height: 10px;
  border: 2px solid #212222;
  position: absolute;
  left: 20px;
  top: 162px;
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
  height: 20px;
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
  top: -14px;
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
  height: 42px;
  border-radius: 10px;
  font-family: sans-serif;
  left: 47px;
  top: -108px;
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
