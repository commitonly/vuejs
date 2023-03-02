<template>
  <div class="post">
    <div class="post-header">
      <div class="profile"></div>
      <span class="profile-name">{{ DataList.name }}</span>
<!--      <span class="profile-name"><slot></slot></span>-->
    </div>
    <div class="post-body" :style="{backgroundImage : `url(${DataList.postImage})`}"></div>
    <div class="post-content">
      <p>{{DataList.likes}} Likes</p>
      <p><strong>{{ DataList.name }}</strong> {{DataList.content}}</p>
      <p class="date">{{ DataList.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
   DataList : Object,
  },
}
</script>

<style scoped>
.post {
  width: 100%;
}
.profile {
  background-image: url("https://placeimg.com/100/100/arch");
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  background-image: url("https://placeimg.com/640/480/animals");
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
}
</style>