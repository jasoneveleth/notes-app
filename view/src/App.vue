<template>
    <search v-if="view==1" v-on:screen_change="(newnum) => view = newnum" v-on:renderfile="(item) => currentfile=item"/>
    <render v-if="view==2" v-on:screen_change="(newnum) => view = newnum" :currentfile="currentfile"/>
    <append v-if="view==3" v-on:screen_change="(newnum) => view = newnum" :filename="currentfile"/>
</template>

<script>
import search from "./components/search/index.vue"
import render from "./components/render/index.vue"
import append from "./components/append/index.vue"

export default{
  components: {search,render,append},
  data(){
    return {
      view : 1, // TODO: this should be in a cookie
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
  /* background: blue; */
}
#app{
  padding: 16px;
  margin: 0;
  height: 100%;
  width: 100%;
}
</style>