<template>
  <b-navbar   type="light" class="navbar-light theme-nav fixed-top" toggleable="lg" fixed="top"  v-b-scrollspy:nav-scroller>
    <div class="container">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand class="navbar-brand" :href='"/tovo"'><img :src='"../assets/images/logo.png"' alt="logo"></b-navbar-brand>
    <b-collapse class="default-nav"  is-nav id="nav_collapse">
      <b-navbar-nav class="navbar-nav ml-auto" id="mymenu">
          <b-nav-item href="#home">Home</b-nav-item>
          <b-nav-item href="#about">about</b-nav-item>
          <b-nav-item href="#feature">feature</b-nav-item>
          <b-nav-item href="#screenshot">screenshot</b-nav-item>
          <b-nav-item href="#team">team</b-nav-item>

          <b-nav-item-dropdown right-alignment text="blog" class="nav-link">
		    <b-dropdown-item class="nav-link" target="_blank" :href='"#blog"'>Blog</b-dropdown-item>
		    <b-dropdown-item class="nav-link" target="_blank" :href='"/tovo/blog-list"'>Blog list</b-dropdown-item>
            <b-dropdown-item class="nav-link" target="_blank" :href='"/tovo/blog-details"'>Blog details</b-dropdown-item>
            <b-dropdown-item class="nav-link" target="_blank" :href='"/tovo/blog-leftside"'>Left sidebar</b-dropdown-item>
            <b-dropdown-item class="nav-link" target="_blank" :href='"/tovo/blog-rightside"'>Right sidebar</b-dropdown-item>
            <b-dropdown-item class="nav-link" target="_blank" :href='"/tovo/blog-left-sidebar"'>Details left sidebar</b-dropdown-item>
            <b-dropdown-item class="nav-link" target="_blank" :href='"/tovo/blog-right-sidebar"'>Details right sidebar</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item href="#price">price</b-nav-item>
          <b-nav-item href="#contact">contact us</b-nav-item>

          <b-nav-item-dropdown right-alignment href="#Other_page" text="Other page" class="nav-link ">
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
   name:'Navbar'
  }
</script>
