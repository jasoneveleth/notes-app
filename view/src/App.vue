<template>
    <search v-if="screen_num==1" v-on:screen_change="(newnum) => screen_num = newnum" v-on:renderfile="(item) => currentfile=item"/>
    <render v-if="screen_num==2" v-on:screen_change="(newnum) => screen_num = newnum" :currentfile="currentfile"/>
    <append v-if="screen_num==3" v-on:screen_change="(newnum) => screen_num = newnum" :filename="currentfile"/>
</template>

<script>
import search from "./components/search/index.vue"
import render from "./components/render/index.vue"
import append from "./components/append/index.vue"

export default{
  components: {search,render,append},
  data(){
    return {
      screen_num : 1,
      currentfile: ""
    }
  },
}
</script>

<style>
*{
  box-sizing: inherit;
}

html, body{
  margin: 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}
#app{
  padding: 16px;
  margin: 0;
  height: 100%;
  width: 100%;
}
</style>