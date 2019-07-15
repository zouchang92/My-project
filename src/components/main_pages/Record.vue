<template >
  <!-- Record Start -->
  <section id="record" class="about">
    <div class="about-decor"></div>
    <div class="container">
      <div class="row">
        <div class="record-time">
          <div class="record-date" v-for="(item,i) in list" :key="i">
            <div class="record-cicle">
              <b-button v-b-toggle="'record'+item.id" :id="item.fid">
                <p>{{item.data}}</p>
              </b-button>
              <div class="record-title-top">
                <div class="record-top-line"></div>
              </div>
            </div>
          </div>
          <div class="record-arrow">
            <i class="iconfont icon-icon-test record-right"></i>
            <i class="iconfont icon-icon-test-copy record-left"></i>
          </div>
          <div v-for="(item,i) in option" :key="i">
            <b-collapse :id="'record'+item.id" accordion="my-accordion">
            <div class="record-title">
              <div style="float:left">
                <i class="iconfont icon-iconfont15 record-top"></i>
                <span class="record-time-a">{{item.time}}</span>
                <div class="record-line"></div>
                <div class="record-cicle-a"></div>
                <div class="record-content left" id="popover-3">
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
                    and basic HTML support.Embedding content using slots affords you greatercontrol.
                    and basic HTML support.
                    Embedding content using slots affords you greatercontrol.
                    and basic HTML support.
                    Embedding content using slots affords you greatercontrol.
                    and basic HTML support.
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
    </div>
  </section>
  <!-- Record End -->
</template>
<script>
export default {
  name: "record",
  data () {
    return {
      list:[{id:1,data:7},{id:2,data:8},{id:3,data:9},{id:4,data:1},{id:5,data:2},{id:6,data:7}],
      option:[
        {id:1,time:8},{id:2,time:9},{id:3,time:10},{id:4,time:11},{id:5,time:12},{id:6,time:13},{id:7,time:14},{id:8,time:15}
      ]
    }
  }
};
</script>
<style scoped>
#record {
  background: url(../../assets/images/background/1351562913172_.pic_hd.jpg);
}
.record-time {
  height: 800px;
}
.record-date {
  /* border: 1px solid #212222;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  text-align: center; */
  position: relative;
  display: inline;
  margin-left: 160px;
}
.record-date p {
  position: absolute;
  top: 10px;
  left: 5px;
  color: #fff;
}
.record-line {
  width: 1px;
  height: 38px;
  border: 1px solid #bbb;
  position: absolute;
  top: 72px;
  left: 184px;
}
.record-cicle {
  width: 50px;
  height: 50px;
  /* border: 1px solid #212222; */
  position: absolute;
  left: 0px;
  top: 37px;
  border-radius: 50%;
  background-color: #ccc;
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
  position: relative;
}
.record-time-a {
  position: absolute;
  top: 146px;
  left: 142px;
  color: #aaa;
  font-size: 11px;
  font-weight: 100;
  display: block
}
.record-cicle-a {
  width: 10px;
  height: 10px;
  border: 2px solid #212222;
  position: absolute;
  left: 180px;
  top: 150px;
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
  color: white;
  border-radius: 10px;
  font-family: sans-serif;
  left: 212px;
  top: 109px;
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
  margin-left: 14px;
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
  top: 105px;
  left: 178px;
}
.btn {
  background: #c19b73;
}
.record-arrow {
  position: relative;
}
.record-right {
  position: absolute;
  top: 28px;
  left: 1115px;
  opacity: 0.2;
}
.record-left {
  position: absolute;
  top: 28px;
  left: 61px;
  opacity: 0.2;
}
.record-right:hover,.record-left:hover{
  opacity:1;
}
.record-date:nth-child(2n+1) .record-cicle .btn{
  background:#ccc
}
.record-top-line{
    position: absolute;
    top: -64px;
    left: 24px;
}
</style>
