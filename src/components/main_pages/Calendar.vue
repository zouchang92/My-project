<template>
    <!-- Screenshots Section Start -->
    <section id="calendar" class="calendar padding-top-bottom">
      <div class="container">
        <div class="row">
          <div class="calendar-contain">
            <div class="wrapper" ref="wrapper">
              <ul class="content">
                <li v-for="(item, index) in calData" :key="index">
                  <div class="crow">
                    <div class="row-left">
                      <div class="row-date">{{ item.date }}</div>
                    </div>
                    <div class="row-right">
                      <div class="row-content" v-for="(itm, idx) in item.event_list" :key="idx">{{ itm.title }}</div>
                    </div>
                  </div>
                </li>
              </ul>

            </div>

          </div>
          
        </div>
      </div>
    </section>
    <!-- Screenshots Section End -->
</template>
<script>
import BScroll from 'better-scroll'

export default {
  name:'Calendar',
  components: {
    },

  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {})
    })
  },

  data() {
    return {
      calData: [
        {date: '2019-09-07', event_list: [{title: '标题标题标题', event_date: '2019-07-07'}, {title: '标题标题标题', event_date: '2019-07-07'}, {title: '标题标题标题', event_date: '2019-07-07'}]},
        {date: '2019-09-07', event_list: [{title: '标题标题标题', event_date: '2019-07-07'}, {title: '标题标题标题', event_date: '2019-07-07'}, {title: '标题标题标题', event_date: '2019-07-07'}]},
        {date: '2019-09-07', event_list: [{title: '标题标题标题', event_date: '2019-07-07'}, {title: '标题标题标题', event_date: '2019-07-07'}, {title: '标题标题标题', event_date: '2019-07-07'}]},
        {date: '2019-09-07', event_list: [{title: '标题标题标题', event_date: '2019-07-07'}, {title: '标题标题标题', event_date: '2019-07-07'}, {title: '标题标题标题', event_date: '2019-07-07'}]},
        {date: '2019-09-07', event_list: [{title: '标题标题标题', event_date: '2019-07-07'}, {title: '标题标题标题', event_date: '2019-07-07'}, {title: '标题标题标题', event_date: '2019-07-07'}]},
        {date: '2019-09-07', event_list: [{title: '标题标题标题', event_date: '2019-07-07'}, {title: '标题标题标题', event_date: '2019-07-07'}, {title: '标题标题标题', event_date: '2019-07-07'}]},
        {date: '2019-09-07', event_list: [{title: '标题标题标题', event_date: '2019-07-07'}, {title: '标题标题标题', event_date: '2019-07-07'}, {title: '标题标题标题', event_date: '2019-07-07'}]},
        {date: '2019-09-07', event_list: [{title: '标题标题标题', event_date: '2019-07-07'}, {title: '标题标题标题', event_date: '2019-07-07'}, {title: '标题标题标题', event_date: '2019-07-07'}]},
        {date: '2019-09-07', event_list: [{title: '标题标题标题', event_date: '2019-07-07'}, {title: '标题标题标题', event_date: '2019-07-07'}, {title: '标题标题标题', event_date: '2019-07-07'}]},
        {date: '2019-09-07', event_list: [{title: '标题标题标题', event_date: '2019-07-07'}, {title: '标题标题标题', event_date: '2019-07-07'}, {title: '标题标题标题', event_date: '2019-07-07'}]},
        {date: '2019-09-07', event_list: [{title: '标题标题标题', event_date: '2019-07-07'}, {title: '标题标题标题', event_date: '2019-07-07'}, {title: '标题标题标题', event_date: '2019-07-07'}]},
      ]
    }
  },

  methods: {
  }
}


</script>

<style lang='css'>
.wrapper {
  height: 600px;
  width: 1140px;
}
.crow {
  height: 110px;
  background: #F9F06F;
}
.row-left {
  height: 110px;
  width: 50px;
  float: left;
  background: rgba(10, 10, 10, 0.3);
}
.row-date {
  color: white;
  display: block;
  position: relative;
  margin: 5px 
}
.row-right{
  height: 110px;
  width: 1050px;
  float: right;
}
.row-content {
  height: 90px;
  width: 120px;
  border: 1px solid #eee;
  border-radius: 4px;
  box-shadow: 0 3px 12px #000000;
  margin: 10px 15px;
  float: left;
}

</style>