<template>
  <!-- Feature Section start -->
  <section id="timeline" class="timeline">
    <div class="feature-decor"></div>
    <div class="container">
      <div class="row">
        <!-- 横向事件轴 -->
        <div class="timeline-date">
          <div class="timeline-time" v-for="(n,i) in 7" :key="i">
            <span class="timeline-day">7月1日</span>
          </div>
          
          <div class="timeline-arrow">
            <i class="iconfont icon-iconfont2-left-copy timeline-right"></i>
            <i class="iconfont icon-iconfont2-right timeline-left"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Feature Section End -->
</template>
<script>
export default {
  name: "timeline"
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
  color: #FFF;
  text-decoration: none;
  float: left;
  margin-left: 10px;
}
.timeline-time::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border:1px solid #c19b73;
  border-radius: 10%;
  transform: skewX(54deg);
  background:rgb(215, 31, 42)
}
/* .timeline-date .timeline-time:nth-child(2n){
  transform: skewX(35deg)
} */
.timeline-day{
  z-index: 1;
}
.timeline-arrow{
  position: relative;
}
.timeline-right{
    position: absolute;
    top: 0px;
    left: -46px;
}
.timeline-left{
  position: absolute;
    top: 0px;
    right: -61px;
}
</style>

