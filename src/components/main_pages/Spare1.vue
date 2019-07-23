<template>
  <div>
    <!-- Price Section start-->
    <section id="price" class="spare1">
      <div class="container">
        <div class="row">
          <div class="col-sm-12"></div>
          <div id="app">
            <div class="arrows">
              <span class="left-arrow arrow" @click="leftArrow"><<</span>
              <span class="right-arrow arrow" @click="rightArrow">>></span>
            </div>
            <div class="outer">
              <ul class="inner">
                <li
                  v-for="(value, index) in menu1"
                  class="item"
                  v-bind:key="value"
                  v-if="index >= start && index <= end"
                >{{value.key}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Price Section End -->
  </div>
</template>
<script>
export default {
  name: "Spare1",
  data() {
    return {
    menu1: [
      {
        index: 0,
        key: "1.Individual call",
        type: "text"
      },
      {
        index: 1,
        key: "2.Acknowledgement call",
        type: "text"
      },
      {
        index: 2,
        key: "3.Distress call",
        type: "text"
      },
      {
        index: 3,
        key: "4.Distress relay call",
        type: "text"
      },
      {
        index: 4,
        key: "5.Auto/semi-auto call",
        type: "text"
      },
      {
        index: 5,
        key: "6.All ships call",
        type: "text"
      },
      {
        index: 6,
        key: "7.Group call",
        type: "text"
      },
      {
        index: 7,
        key: "8.Area call",
        type: "text"
      },
      {
        index: 8,
        key: "9.Position request",
        type: "text"
      },
      {
        index: 9,
        key: "10.Polling call",
        type: "text"
      },
      {
        index: 10,
        key: "11.Test call",
        type: "text"
      }
    ],
    start: 0,
    end: 2
    }
  },
  computed: {
    reverseMsg: function() {
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  },
  methods: {
    leftArrow: function() {
      var all = this.menu1.length;
      if (this.start == 0) {
        return;
      } else if (this.start - 3 < 0) {
        this.start = 0;
        this.end = 2;
      } else {
        this.start -= 3;
        this.end -= 3;
      }
    },
    rightArrow: function() {
      var all = this.menu1.length;
      if (this.end == all) {
        return;
      } else if (this.end + 3 >= all) {
        this.start = all - 3;
        this.end = all;
      } else {
        this.start += 3;
        this.end += 3;
      }
    }
  }
};
</script>

<style lang="css">
.spare1 {
  background: url(../../assets/images/background/bg_05.jpg);
  margin-top: 0;
  align-items: center;
  position: relative;
  height: 940px;
}
*,
a,
input {
  margin: 0;
  font-size: 16px;
}
ul,
li {
  list-style: none;
  padding: 0;
}
.arrows {
  text-align: center;
}
.arrow {
  display: inline-block;
  width: 40px;
  line-height: 40px;
  background-color: #e0e0e0;
}
.outer {
  height: 120px;
  overflow: hidden;
  background-color: gray;
}
.item {
  height: 40px;
  line-height: 40px;
  padding-left: 20px;
  box-sizing: border-box;
  border-bottom: solid 1px #fff;
}
</style>
