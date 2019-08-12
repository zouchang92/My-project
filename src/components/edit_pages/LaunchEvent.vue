<template>
  <div>
    <section class="editors-form">
      <div class="innerpage-decor">
      </div>
      <div>
        <h2 class="title text-center">发布<span>事件</span></h2>
        <div class="card">
          <form class="theme-form" @submit.prevent="eventSubmit">
            <div class="form-group mt-2">
              <h6 class="mt-0 mb-3">请输入主标题 :</h6>
              <div class="form-row">
                <div class="col-12">
                  <input type="text" class="form-control" v-model="eventData.eventTitle" required>
                </div>
              </div>
              <h6>主事件开始日期 :</h6>
              <div class="form-row">
                <div class="col-12">
                  <input type="date" class="form-control text-center" v-model="eventData.startDate" required>
                </div>
              </div>
              <!-- <h6>显示日期 :</h6>
              <div class="form-row">
                <div class="col-12">
                  <input type="text" class="form-control" placeholder="例: '6月中旬', '年底'" v-model="eventData.strDate">
                </div>
              </div> -->
            </div>

           
            

            <div class="form-group rounded p-4 bg-light" v-for="(item, index) in eventData.detail" :key="index">
              <label class="col-form-label pt-0">子事件{{ index+1 }}</label>
              <i class="iconfont icon-guanbi" style="float:right;" @click="closeDetail(index)"></i>
              <div class="form-row">
                <h6>更新日期 :</h6>
                <div class="col-12">
                  <input type="date" class="form-control text-center" v-model="item.update_date" >
                </div>
              </div>
              <div class="form-row">
                <h6>事件内容 :</h6>
                <div class="col-12">
                  <textarea name="" id="" cols="30" rows="10" class="form-control" v-model="item.content" />
                </div>
              </div>
              <div class="form-row">
                <h6>标的 :</h6>
                <div class="col-12">
                  <input type="text" class="form-control" v-model="item.targets">
                </div>
              </div>
              <div class="form-row">
                <!-- <button class="btn btn-custom theme-color ml-4 mt-4" type="button" @click="detailConfirm()">保存并新增一条</button> -->
              </div>
            </div>
             <b-button class="btn btn-custom theme-color" @click="addDetail()">
              新增子事件
            </b-button>
            <!-- <div class="form-button text-center">
              <button type="submit" class="btn btn-custom theme-color">提交</button>
            </div> -->
            <b-button type="submit" class="btn btn-custom theme-color ml-5">
              提交
            </b-button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
export default {
  name: "LaunchEvent",
  components: {},
  data: () => ({
    eventData: {
      eventTitle: "",
      startDate: "",
      // endDate: '',
      strDate: "",
      detail: [
        {
          detail_id: 1,
          update_date: "",
          content: "",
          targets: ""
        }
      ]
    },
    eventDetail: {
      detail_id: 1,
      update_date: "",
      content: "",
      targets: ""
    }
  }),
  methods: {
    closeDetail(index) {
      let arr = this.eventData.detail
      this.eventData.detail = arr.slice(0, index).concat(arr.slice(index+1, arr.length))
    },
    addDetail() {
      this.eventData.detail.push({
        detail_id: 1,
        update_date: "",
        content: "",
        targets: ""
      });
    },
    detailConfirm() {
      this.eventData.detail.push(this.eventDetail);
      let detailId = this.eventDetail.detailId + 1;
      this.eventDetail = {
        detailId: detailId,
        updateDate: "",
        content: "",
        targets: ""
      };
      window.alert("ok.");
    },
    eventSubmit() {
      let url = this.$host + "/calendar/";
      let username = "admin";
      let postData = {
        author: "admin",
        event_title: this.eventData.eventTitle,
        start_date: this.eventData.startDate,
        detail: this.eventData.detail
      };
      this.$ajax
        .post(url, postData, {
          responseType: "json"
        })
        .then(response => {
          window.alert("发布成功");
          window.location.reload();
        })
        .catch(error => {
          if (error.response.status == 400) {
            console.log(error.response.data);
          } else {
            console.log(error.response.status);
          }
        });
    }
  }
};
</script>


<style lang="css">
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
