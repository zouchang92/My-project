<template>
  <div>
    <section class="editors-form">
      <div class="innerpage-decor"></div>
      <div>
        <h2 class="title text-center">
          发布
          <span>事件</span>
        </h2>
        <div class="card">
          <form class="theme-form" @submit.prevent="eventSubmit">
            <div class="form-group mt-2">
              <h6 class="mt-0 mb-3">请输入主标题 :</h6>
              <div class="form-row">
                <div class="col-12">
                  <input type="text" class="form-control" v-model="eventData.eventTitle" required />
                </div>
              </div>
              <h6>主事件开始日期 :</h6>
              <div class="form-row">
                <div class="col-12">
                  <input
                    type="date"
                    class="form-control text-center"
                    v-model="eventData.startDate"
                    required
                  />
                </div>
              </div>
              <h6>评级 :</h6>
              <div class="form-row">
                <div class="col-12">
                  <star-rating v-model="eventData.rating" v-bind:star-size="30"></star-rating>
                </div>
              </div>

              <!-- <h6>显示日期 :</h6>
              <div class="form-row">
                <div class="col-12">
                  <input type="text" class="form-control" placeholder="例: '6月中旬', '年底'" v-model="eventData.strDate">
                </div>
              </div>-->
            </div>

            <div
              class="form-group rounded p-4 bg-light"
              v-for="(item, index) in eventData.detail"
              :key="index"
            >
              <label class="col-form-label pt-0">子事件{{ index+1 }}</label>
              <i class="iconfont icon-guanbi" style="float:right;" @click="closeDetail(index)"></i>
              <div class="form-row">
                <h6>更新日期 :</h6>
                <div class="col-12">
                  <input type="date" class="form-control text-center" v-model="item.update_date" />
                </div>
              </div>
              <div class="form-row">
                <h6>事件内容 :</h6>
                <div class="col-12">
                  <textarea
                    name
                    id
                    cols="30"
                    rows="10"
                    class="form-control"
                    v-model="item.content"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="col-12">
                  <h6>标的 :</h6>
                </div>
                <div class="col-12">
                  <input
                    type="text"
                    class="form-control"
                    v-model="eventData.detail[index].stock"
                    @focus="focus(index)"
                    @blur="blur(index)"
                    @input="input(index)"
                  />
                </div>
                <!-- <div class="col-4">
                  <b-button class="btn btn-custom theme-color">ok</b-button>
                </div> -->
                <dl class="suggest" v-if="eventData.detail[index].isFocus">
                  <dd v-for="(itm, idx) in eventData.detail[index].suggestList" :key="idx" @click="clickRes(itm, index)" >{{ itm | formatStock }}</dd>
                </dl>
                <div class="mt-4 ml-2">
                  <b-badge variant="secondary" v-for="(titm, tidx) in eventData.detail[index].targets" :key="tidx">{{ titm | formatStock }}</b-badge>
                </div>
              </div>
              <div class="form-row">
                <!-- <button class="btn btn-custom theme-color ml-4 mt-4" type="button" @click="detailConfirm()">保存并新增一条</button> -->
              </div>
            </div>
            <b-button class="btn btn-custom theme-color" @click="addDetail()">新增子事件</b-button>
            <b-button type="submit" class="btn btn-custom theme-color ml-5">提交</b-button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import StarRating from "vue-star-rating";
import _ from "lodash";
export default {
  name: "LaunchEvent",
  components: {
    StarRating
  },
  data: () => ({
    isSuggest: true,
    isFocus: false,
    stock: "",
    eventData: {
      eventTitle: "",
      startDate: "",
      rating: 0,
      strDate: "",
      detail: [
        {
          update_date: "",
          content: "",
          targets: [],
          isFocus: false,
          suggestList: [],
          stock: '',
        }
      ]
    },
    rating: 0
  }),
  methods: {
    focus: function(index) {
      this.eventData.detail[index].isFocus = true;
    },
    blur: function(index) {
      let self = this;
      setTimeout(function() {
        self.eventData.detail[index].isFocus = false;
      }, 200);
    },
    input: _.debounce(async function(index) {
      let self = this;
      let url = this.$host + "/api/stock-search/";
      this.$ajax
        .get(url, {
          params: {
            stock: self.eventData.detail[index].stock
          }
        })
        .then(res => {
          self.eventData.detail[index].suggestList = res.data.data;
        });
    }, 1000),
    clickRes(itm, index) {
      this.eventData.detail[index].targets.push(itm)
    },

    closeDetail(index) {
      let arr = this.eventData.detail;
      this.eventData.detail = arr
        .slice(0, index)
        .concat(arr.slice(index + 1, arr.length));
    },
    addDetail() {
      this.eventData.detail.push({
        update_date: "",
        content: "",
        targets: ""
      });
    },
    eventSubmit() {
      let url = this.$host + "/api/event/";
      let username = "admin";
      let postData = {
        author: "admin",
        event_title: this.eventData.eventTitle,
        start_date: this.eventData.startDate,
        detail: this.eventData.detail,
        rating: this.eventData.rating
      };
      this.$ajax
        .post(url, postData, {
          responseType: "json"
        })
        .then(response => {
          window.alert("发布成功");
          // window.location.reload();
        })
        .catch(error => {
          if (error.response.status == 400) {
            console.log(error.response.data);
          } else {
            console.log(error.response.status);
          }
        });
    }
  },
  filters: {
    formatStock (stock) {
      if (!stock) {
        return ""
      } else {
        let str = stock.stock_name + stock.stock_code
        return str
      }
    }
  } 
};
</script>


<style lang="css">
.suggest {
  /* position: absolute; */
  margin-top: 5px;
  margin-left: 5px;
  background: #fff;
  padding: 10px;
  font-size: 12px;
  width: 500px;
  box-sizing: border-box;
  border: 1px solid #e5e5e5;
  border-top: none;
  z-index: 999;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.suggest dd {
  /* display: inline-block; */
  color: #666;
  margin-right: 10px;
  margin-bottom: 3px;
  margin-top: 5px;
  cursor: pointer;
}
.suggest dd:hover {
  background: #f8f8f8;
  color: #31bbac;
}
.editors-form {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fafafa;
  /* background-image: url(../assets/images/auth-bg.jpg); */
  background-repeat: no-repeat;
  background-size: cover;
}
.editors-form .or-saparator {
  position: relative;
  padding: 10px 0;
  text-align: center;
}
.editors-form .or-saparator:before {
  position: absolute;
  top: 50%;
  left: 0;
  height: 1px;
  margin-top: 1px;
  width: 100%;
  content: "";
  background: rgba(40, 56, 76, 0.1);
  z-index: 1;
}
.editors-form .or-saparator span {
  position: relative;
  display: inline-block;
  text-transform: uppercase;
  font-size: 0.81em;
  padding: 0 8px;
  background: #fff;
  color: #868686;
  z-index: 2;
}
.editors-form .card {
  border: 0;
  padding: 30px 50px 50px;
  width: 650px;
  margin: 0 auto;
  border-top: 3px solid #c19b73;
  border-radius: 0;
}
.editors-form .title {
  margin-bottom: 20px;
}
.editors-form p {
  width: 70%;
  margin: 0 auto 30px;
}
.editors-form .theme-form {
  margin-top: 0;
}
.editors-form .theme-form .form-control {
  box-shadow: 0 0 5px 0 rgba(170, 170, 170, 0.35);
}

.btn-custom.theme-color {
  background-image: linear-gradient(
    to right,
    #c19b73,
    #f0f0f0,
    #c19b73,
    #c19b73
  );
}
.btn-custom.theme-color:hover {
  background-position: 100% 0;
}
</style>
