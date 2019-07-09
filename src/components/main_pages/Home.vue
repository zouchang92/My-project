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
   <section id="home" class="homepage">
     <div class="container">
       <div class="row">
         <div class="col-md-5">
           <div class="home-contain">
             <div>
               <img :src='"../../assets/images/logoimage.png"' alt="caption-img" class="caption-img">
               <h4>Landing page for</h4>
               <h1>P<span class="f-bold">L</span>U<span class="f-bold">S</span>
                 <span class="f-bold f-color">app</span>
               </h1>
               <p>Enhance your business ideas with Powerful, Responsive, Elegant TOVO Theme.</p>
             </div>
           </div>
         </div>
       </div>
     </div>
   </section>
    <!--Home Section End -->

    <!-- Record Start  -->
    <Record/>
    <!-- Record End -->

    <!-- Timeline Section start -->
    <Timeline/>
    <!-- Timeline Section End -->

    <!-- Calendar Section Start -->
    <Calendar/>
    <!-- Calendar Section End -->

    <!-- Team Section Start -->
    <!-- <Team/> -->
    <Alert/>
    <!-- team Section End -->

    <!-- Price Section start-->
    <Price/>
    <!-- Price Section End -->

    <!-- Contact Section start -->
    <Contact_us/>
    <!-- Contact Section End -->

    <!--Subscribe section start-->
    <!-- <Subscribe/> -->
    <!--Subscribe section Ends-->

    <!--Map Section Start-->
    <!-- <Map/> -->
    <!--Map Section Ends-->

    <!-- Footer Section start -->
    <Footer/>
    <!-- Footer Section End -->

    <js/>

 </div>
</template>
<script>
export default {
  name: 'HomePage',
  beforeCreate: function () {
    document.body.className = ''
  }
}
</script>
<!--remove comment below line to set color -->
<style lang="css">
  @import '../../assets/css/color/color-4.css';
</style>
