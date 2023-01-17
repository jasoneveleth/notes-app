<template>
  <search/>
  <render/>
  <append/>
</template>

<script>
import search from "./components/search.vue"
import render from "./components/render.vue"
import append from "./components/append.vue"

export default{

  
  components: {search,render,append},
  data(){
    return {
      variable : "goober"
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