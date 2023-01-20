<template>
    <search v-if="screen_num != 2 && screen_num != 3" v-on:screen_change="set_screen_num" v-on:renderfile="set_filename" v-on:newtext="handle_input"/>
    <render v-if="screen_num == 2" v-on:screen_change="set_screen_num"/>
    <append v-if="screen_num == 3" v-on:screen_change="set_screen_num"/>
</template>

<script>
import search from "./components/search/index.vue"
import render from "./components/render/index.vue"
import append from "./components/append/index.vue"

export default{
  components: {search,render,append},
  data() {
    return {
      screen_num: 1,
      current_file: "",
      current_search: "",
    }
  },
  methods: {
    set_screen_num(screen_num) {
      console.log(`setting screen num: ${screen_num}`)
      this.screen_num = screen_num
      return this.$cookies.set('screen_num', screen_num)
    },
    set_filename(item) {
      console.log(`setting filename: ${item}`)

      return this.$cookies.set('current_filename', item)
    },
    handle_input(input) {
      console.log(input)
      this.current_search = input;
    },
  },
  mounted() {
    this.screen_num = this.$cookies.get('screen_num')
    this.current_file = this.$cookies.get('current_filename')
  }
}
</script>

<style>
:root {
  --background-grey: #E6E8EB;
  --text-grey: #9FA2A9;
  --blue: #639AF8;
}
*{
  box-sizing: inherit;
}
html, body{
  margin: 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  font-family: Helvetica, sans-serif;
}
#app{
  padding: 5px 15px;
  margin: 0;
  height: 100%;
  width: 100%;
}
</style>