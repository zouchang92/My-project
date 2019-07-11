<template>
  <div>
    <section class="editors-form">
      <div class="innerpage-decor">
        <!-- <div class="innerpage-circle1"><img :src='"../../assets/images/Testimonial2.png"' alt=""></div>
        <div class="innerpage-circle2"><img :src='"../../assets/images/Testimonial1.png"' alt=""></div> -->
      </div>
      <div>
        <h2 class="title text-center">发布<span>事件</span></h2>
        <div class="card">
          <form class="theme-form">
            <div class="form-group mt-2">
              <h6 class="mt-0 mb-3">请输入标题 :</h6>
              <div class="form-row">
                <div class="col-12">
                  <input type="text" class="form-control" >
                </div>
                <!-- <div class="col-12 mt-4">
                  <button type="submit" class="btn btn-custom btn-block theme-color">Send</button>
                </div> -->
              </div>
              <h6>开始日期 :</h6>
              <div class="form-row">
                <div class="col-12">
                  <input type="date" class="form-control text-center">
                </div>
              </div>
              <h6>结束日期 :</h6>
              <div class="form-row">
                <div class="col-12">
                  <input type="date" class="form-control text-center">
                </div>
              </div>
              <h6>显示日期 :</h6>
              <div class="form-row">
                <div class="col-12">
                  <input type="text" class="form-control" placeholder="例: '6月中旬', '年底'">
                </div>
              </div>
            </div>
            <div class="form-group rounded p-4 bg-light">
              <!-- <h5>新增事件内容</h5> -->
              <label class="col-form-label pt-0">更新事件内容</label>
              <div class="form-row">
                <h6>更新日期 :</h6>
                <div class="col-12">
                  <input type="date" class="form-control text-center">
                </div>
              </div>
              <div class="form-row">
                <h6>事件内容 :</h6>
                <div class="col-12">
                  <textarea name="" id="" cols="30" rows="10" class="form-control"></textarea>
                </div>
              </div>
              <div class="form-row">
                <h6>标的 :</h6>
                <div class="col-12">
                  <input type="text" class="form-control">
                </div>
              </div>
              <div class="form-row">
                <button class="btn btn-custom theme-color mt-4">保存</button>
                <button class="btn btn-custom theme-color ml-4 mt-4">保存并新增一条</button>
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
export default {
  name: 'LaunchEvent',
  components: {

  },
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
