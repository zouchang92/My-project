<template>
    <!-- Screenshots Section Start -->
    <section id="calendar" class="calendar padding-top-bottom">
      <div class="container">
        <div class="row">
          <timeflow/>
        </div>
      </div>
    </section>
    <!-- Screenshots Section End -->
</template>
<script>
import carousel from 'v-owl-carousel'
import timeflow from '../../plugins/Timeflow.vue'
export default {
  name:'Calendar',
  components: {
      'carousel': carousel,
      'timeflow': timeflow,
    },
}
</script>
