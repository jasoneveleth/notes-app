<template>
  <div @click="view=Math.max(view-1, 1)" class="dummy">back</div>
  <div @click="view=Math.min(view+1, 3)" class="dummy">forward</div>
  <search v-if="view==1" v-on:screen_change="(newnum) => view = newnum"/>
  <render v-if="view==2" v-on:screen_change="(newnum) => view = newnum"/>
  <append v-if="view==3" v-on:screen_change="(newnum) => view = newnum"/>
</template>

<script>
import search from "./components/search/index.vue"
import render from "./components/render/index.vue"
import append from "./components/append/index.vue"

export default{
  components: {search,render,append},
  data(){
    return {
      view : 1
    }
  },
  methods:{
    // foo(){
    //   console.log("poo")
    // }
  }
}
</script>

<style>
html, body{
  margin: 10px;
  height: 100%;
  width: 100%;
  /* background: blue; */
}
.dummy {
  display: inline-block;
  padding: 10px;
}
</style>