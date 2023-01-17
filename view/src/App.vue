<template>
  <div @click="view=(view+1)%3">goober</div>
  <search v-if="view==1"/>
  <render v-if="view==2"/>
  <append v-if="view==3"/>
</template>

<script>
import search from "./components/search/index.vue"
import render from "./components/render/index.vue"
import append from "./components/append/index.vue"

export default{
  components: {search,render,append},
  data(){
    return {
      view : 3
    }
  },
  methods:{
    foo(){
      console.log("poo")
    }
  }
}
</script>

<style>
html, body{
  margin:0;
  height: 100%;
  width: 100%;
  /* background: blue; */
}
</style>