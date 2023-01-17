<template>
  <search/>
  <render/>
  <append/>
</template>

<script>
import search from "./components/search/index.vue"
import render from "./components/render/index.vue"
import append from "./components/append/index.vue"

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