<template>
  <b-navbar   type="light" class="navbar-light theme-nav fixed-top" toggleable="lg" fixed="top"  v-b-scrollspy:nav-scroller>
    <div class="container">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand class="navbar-brand" :href='"/tovo"'>PLUS+</b-navbar-brand>
    <b-collapse class="default-nav"  is-nav id="nav_collapse">
      <b-navbar-nav class="navbar-nav ml-auto" id="mymenu">
          <b-nav-item href="#home">首页</b-nav-item>
          <b-nav-item href="#record">每日记录</b-nav-item>
          <b-nav-item href="#timeline">事件轴</b-nav-item>
          <b-nav-item href="#calendar">事件日历</b-nav-item>
          <b-nav-item href="#alert">备用1</b-nav-item>
          <b-nav-item href="#price">备用2</b-nav-item>
          <b-nav-item href="#contact">备用3</b-nav-item>

          <b-nav-item-dropdown right-alignment href="#Other_page" text="其他页面" class="nav-link ">
            <b-dropdown-item class="nav-link" target="_blank" :href='"/editors/launch-event"'>发布事件</b-dropdown-item>
            <b-dropdown-item class="nav-link" target="_blank" :href='"/tovo/sign-in"'>sign in</b-dropdown-item>
            <b-dropdown-item class="nav-link" target="_blank" :href='"/tovo/sign-up"' >sign up</b-dropdown-item>
            <b-dropdown-item class="nav-link" target="_blank" :href='"/tovo/forget-Password"' >Forget Password</b-dropdown-item>
            <b-dropdown-item class="nav-link" target="_blank" :href='"/tovo/thank-you"' >Thank you</b-dropdown-item>
            <b-dropdown-item class="nav-link" target="_blank" :href='"/tovo/review"' >Review</b-dropdown-item>
            <b-dropdown-item class="nav-link" target="_blank" :href='"/tovo/404"' >404</b-dropdown-item>
            <b-dropdown-item class="nav-link" target="_blank" :href='"/tovo/faq"' >FAQ</b-dropdown-item>
            <b-dropdown-item class="nav-link" target="_blank" :href='"/tovo/download"' >Download</b-dropdown-item>
		      	<b-dropdown-item class="nav-link" target="_blank" :href='"/tovo/coming-soon"' >coming soon</b-dropdown-item>
          </b-nav-item-dropdown>

      </b-navbar-nav>
    </b-collapse>
    </div>
  </b-navbar>
</template>
<script>
  export default {
   name:'Header'
  }
</script>
