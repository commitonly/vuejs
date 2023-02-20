<template>

  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">Navbar</span>
    </div>
  </nav>


  <router-view :blog="blog"></router-view>
  <router-view :Home="home"></router-view>

</template>

<script>
import blog from "@/assets/blog";
import home from "@/components/Home.vue";

export default {
  name: 'App',
  data() {
    return{
      blog : blog,
      home : home,
    }
  },
  components: {
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  text-align: center;
}
</style>
