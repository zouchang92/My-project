<template>
  <div>
    <section class="editors-form">
      <div>
        <h2 class="title text-center">发表<span>观点</span></h2>
        <div class="card">
          <form class="theme-form" @submit.prevent="ideaSubmit">
            <div class="form-group mt-2">
              <h6 class="mt-0 mb-3">选择用户</h6>
              <div class="form-row">
                <div class="col-12">
                  <b-form-select v-model="selected">
                    <option :value="user" v-for="(user, index) in userOptions" :key="index">{{ user.nickname }}</option>
                  </b-form-select>
                </div>
              </div>
            </div>
            <div class="form-group mt-2">
              <h6 class="mt-0 mb-3">输入时间</h6>
              <div class="form-row">
                <div class="col-12">
                  <b-form-input type="datetime-local" v-model="time" required></b-form-input>
                </div>
              </div>
            </div>
            <div class="form-group mt-2">
              <h6 class="mt-0 mb-3">请输入内容 :</h6>
              <div class="form-row">
                <div class="col-12">
                  <textarea name="" id="" cols="30" rows="10" class="form-control" v-model="ideaContent" required/>
                </div>
              </div>
            </div>
            <div class="form-button text-center">
              <button type="submit" class="btn btn-custom theme-color">提交</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>


</template>


<script>
import { formatDate } from "@/common/date.js";
export default {
  name: 'LaunchIdea',
  components: {

  },
  data: () => ({
    selected: {'username': 'admin', 'nickname': '管理员'},
    userOptions: [
      {'username': 'admin', 'nickname': '管理员'},
      {'username': 'chenbin', 'nickname': '理事长'},
      {'username': 'yang', 'nickname': '副理事长'},
      {'username': 'wuquan', 'nickname': '秘书长'},
    ],
    ideaContent: '',
    time: '',
  }),
  methods: {
    ideaSubmit () {
      let url = this.$host + '/idea/'
      let nickname = this.selected.nickname
      let username = this.selected.username
      let pub_date = formatDate(new Date(this.time), 'yyyy-MM-dd')
      console.log(pub_date)
      let timestamp = Date.parse(new Date(this.time))
      let postData = {
        username: username,
        nickname: nickname,
        content: this.ideaContent,
        pub_date: pub_date,
        timestamp: timestamp
      }
      console.log(postData)
      this.$ajax.post(url, postData, {
        responseType: 'json'
      }).then(response => {
        window.alert('发布成功')
        console.log(response)
        // window.location.reload()
      }).catch(error => {
        if (error.response.status == 400) {
          console.log(error.response.data)
        } else {
          console.log(error.response.status)
        }
      })
    }
  }
  
}
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
  background-size: cover; }
  .editors-form .or-saparator {
    position: relative;
    padding: 10px 0;
    text-align: center; }
    .editors-form .or-saparator:before {
      position: absolute;
      top: 50%;
      left: 0;
      height: 1px;
      margin-top: 1px;
      width: 100%;
      content: '';
      background: rgba(40, 56, 76, 0.1);
      z-index: 1; }
    .editors-form .or-saparator span {
      position: relative;
      display: inline-block;
      text-transform: uppercase;
      font-size: 0.81em;
      padding: 0 8px;
      background: #fff;
      color: #868686;
      z-index: 2; }
  .editors-form .card {
    border: 0;
    padding: 30px 50px 50px;
    width: 650px;
    margin: 0 auto;
    border-top: 3px solid #C19B73;
    border-radius: 0; }
  .editors-form .title {
    margin-bottom: 20px; }
  .editors-form p {
    width: 70%;
    margin: 0 auto 30px; }
  .editors-form .theme-form {
    margin-top: 0; }
    .editors-form .theme-form .form-control {
      box-shadow: 0 0 5px 0 rgba(170, 170, 170, 0.35); }

.btn-custom.theme-color {
  background-image: linear-gradient(to right, #C19B73, #f0f0f0, #C19B73, #C19B73); }
  .btn-custom.theme-color:hover {
    background-position: 100% 0; }
</style>
