<template>
  <!-- Feature Section start -->
  <section id="timeline" class="timeline">
    <div class="feature-decor"></div>
    <div class="container">
      <div class="row">
        <!-- 横向事件轴 -->
        <div class="timeline-date">
          <b-button class="timeline-time" v-b-toggle.collapse-1-inner v-for="(n,i) in 7" :key="i">
            <span class="timeline-day">7月1日</span>
          </b-button>
          <!-- 事件轴内容 -->
          <b-collapse id="collapse-1-inner" accordion="my-accordion">
            <div class="timeline-content">
              <div class="timeline-content-date" v-for="(item,i) in list" :key="i">
                <div class="timeline-content-time">{{item.agg_date}}</div>
                <div class="timeline-content-details" v-for="(n,a) in 8" :key="a">
                  <span class="timeline-content-title">标题</span>
                  <p class="timeline-content-event">内容</p>
                  <p class="content-time">16:00</p>
                </div>
                <b-pagination
                  v-model="currentPage"
                  :total-rows="rows"
                  :per-page="perPage"
                  aria-controls="my-table"
                ></b-pagination>
              </div>
            </div>
          </b-collapse>
        </div>
        <div class="timeline-arrow">
          <i class="iconfont icon-iconfont2-left-copy timeline-right"></i>
          <i class="iconfont icon-iconfont2-right timeline-left"></i>
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
            { title: "admin", content: "内容内容内容111" },
            { title: "admin", content: "内容内容内容222" },
            { title: "admin", content: "内容内容内容333" }
          ]
        }
      ]
    };
  }
  // computed: {
  //   rows() {
  //     return this.items.length;
  //   }
  // }
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
.timeline-right {
  position: relative;
  top: -593px;
  left: -46px;
}
.timeline-left {
  position: relative;
  top: -593px;
  right: -1120px;
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
.timeline-content-date:nth-child(2n + 1) .timeline-content-datails {
  background: #000;
}
</style>

