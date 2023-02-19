<template>

  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">Navbar</span>
    </div>
  </nav>
  <div class="container">
    <h5>Vue js 를 이용한 블로그입니다</h5>
    <p>여러가지를 시도할 생각입니다</p>
    <List :blog="blog" />
  </div>

</template>

<script>

import List from "@/components/List.vue";
import blog from "@/assets/blog";

export default {
  name: 'App',
  data() {
    return{
      blog : blog
    }
  },
  components: {List}
}
</script>

<style>
.container {
  margin: 0 auto;
  text-align: center;
}
</style>
