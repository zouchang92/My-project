<template>
  <div id="main_div">
    <!-- Preloader -->
    <div class="loader-wrapper">
      <div class="loader"></div>
    </div>
    <!-- Preloader end -->

    <!-- Nav Start -->
    <Header />
    <!-- <Navbar /> -->
    <!-- Nav end-->

    <!-- Home Section start-->
    <section id="home" class="myhome">
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <div class="home-contain">
              <div>
                <h4>Landing page for</h4>
                <h1>
                  P
                  <span class="f-bold">L</span>U
                  <span class="f-bold">S</span>+
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Home Section End -->

    <!-- Timeline Section start -->
    <Timeline />
    <!-- Timeline Section End -->

    <!-- Calendar Section Start -->
    <Calendar />
    <!-- Calendar Section End -->

    <!-- Record Start  -->
    <Record />
    <!-- Record End -->

    <!-- Alert Section Start -->
    <Alert />
    <!-- Alert Section End -->

    <!-- Spare1 Section start-->
    <!-- <Spare1 /> -->
    <!-- Spare1 Section End -->

    <!-- Spare2 Section start-->
    <!-- <Spare2 /> -->
    <!-- Spare2 Section End -->

    <!-- Price Section start-->
    <!-- <Price/> -->
    <!-- Price Section End -->

    <!-- Contact Section start -->
    <!-- <Contact_us/> -->
    <!-- Contact Section End -->

    <!--Subscribe section start-->
    <!-- <Subscribe/> -->
    <!--Subscribe section Ends-->

    <!--Map Section Start-->
    <!-- <Map/> -->
    <!--Map Section Ends-->

    <!-- Footer Section start -->
    <Footer />
    <!-- Footer Section End -->

    <js />
  </div>
</template>
<script>
export default {
  name: "HomePage",
  beforeCreate: function() {
    document.body.className = "";
  }
};
</script>
<!--remove comment below line to set color -->
<style lang="css">
@import "../../assets/css/color/color-4.css";

.myhome {
  background: url(../../assets/images/background/bg_08.jpeg) no-repeat;
  background-size: 100%;
  margin-top: 0;
  align-items: center;
  position: relative;
  height: 940px;
}
</style>
