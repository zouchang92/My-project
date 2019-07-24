<template>
  <!-- Feature Section start -->
  <section id="timeline" class="timeline">
    <div class="feature-decor"></div>
    <div class="container">
      <div class="row">
        <!-- 横向事件轴 -->
        <div class="timeline-date">
          <div class="timeline-arrow">
            <i class="iconfont icon-iconfont2-left-copy timeline-right"></i>
            <i class="iconfont icon-iconfont2-right timeline-left"></i>
          </div>
          <b-button class="timeline-time" v-b-toggle.collapse-1-inner v-for="(n,i) in 9" :key="i" v-if="i >= start_date && i <= end_date">
            <span class="timeline-day">7月1日</span>
          </b-button>
          <!-- 事件轴内容 -->
          <b-collapse id="collapse-1-inner" accordion="my-accordion">
            <div class="timeline-content">
              <ul class="timeline-content-date">
                <li v-for="(item,i) in list" :key="i" >
                  <div class="timeline-content-time">{{item.agg_date}}</div>
                  <div class="timeline-content-details" v-for="(itm,a) in item.chart_list" :key="a" v-if="a >= start && a <= end">
                    <span class="timeline-content-title">{{itm.title}}</span>
                    <p class="timeline-content-event">{{itm.content}}</p>
                    <p class="content-time">{{itm.time}}</p>
                  </div>
                  <!-- 上下翻页 -->
                  <div class="timeline-arr">
                    <span class="top-arrow" @click="TopArrow">上一页</span>
                    <span class="buttom-arrow" @click="ButtomArrow">下一页</span>
                  </div>
                </li>
              </ul>
            </div>
          </b-collapse>
        </div>
      </div>
    </div>
  </section>
  <!-- Feature Section End -->
</template>
<script>
export default {
  name: "timeline",
  perPage: 3,
  currentPage: 1,
  data() {
    return {
      list: [
        {
          agg_date: "2019-07-01",
          chart_list: [
            { title: "admin", content: "内容内容内容111", time: "16:00" },
            { title: "admin", content: "内容内容内容222", time: "16:20" },
            { title: "admin", content: "内容内容内容333", time: "16:40" },
            { title: "admin", content: "内容内容内容333", time: "16:41" },
            { title: "admin", content: "内容内容内容333", time: "16:44" },
            { title: "admin", content: "内容内容内容333", time: "16:45" },
            { title: "admin", content: "内容内容内容333", time: "16:46" },
            { title: "admin", content: "内容内容内容333", time: "16:48" },
            { title: "admin", content: "内容内容内容333", time: "16:49" },
            { title: "admin", content: "内容内容内容333", time: "16:51" },
            { title: "admin", content: "内容内容内容333", time: "16:53" }
          ]
        }
      ],
      start: 0,
      end: 9,
      start_date:0,
      end_date:6
    };
  },
  methods: {
    TopArrow: function() {
      console.log(666);
    },
    ButtomArrow: function() {
      var all = this.chart_list.length;
      console.log(all)
      if (this.end == all) {
        return;
      } else if (this.end + 5 >= all) {
        this.start = all - 5;
        this.end = all;
      } else {
        this.start += 5;
        this.end += 5;
      }
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
  height: 600px;
  position: relative;
  top: 96px;
  left: 43px;
  background: #fff;
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
.timeline-content-date{
  padding:0px
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
</style>

