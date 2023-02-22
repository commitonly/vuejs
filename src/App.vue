<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">Navbar</span>
    </div>
  </nav>


  <router-link to="/list">리스트페이지</router-link><br/>
  <router-link to="/">홈페이지</router-link><br/>
  <router-link to="/detail">상세페이지</router-link>
<!--  -->

<div class="mt-4"> <!-- 마진 탑 4 만큼 줘라는 약어 -->
  <router-view :blog="blog"></router-view>
</div>


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
