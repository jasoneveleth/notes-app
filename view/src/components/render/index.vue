<template>
  <searchbar :default_text="currentfile" @click="$emit('screen_change', 1)"/>
  <div v-html="render_file(currentfile)"></div>
  <plus @click="$emit('screen_change', 3)"/>
</template>

<script>
import { marked } from 'marked'
import plus from "./plus.vue"
import searchbar from "../search/searchbar.vue"

export default{
  components: {plus,searchbar},
  props: ["currentfile"],
  emits: ["screen_change"],
  data() {
    return {
      text: "",
    }
  },
  methods: {
    render_file(filename) {
      return marked(`# ${filename}\n\nthis is a file\n- with\n- multiple\n- bullets`)
    }
  }
}
</script>

<style scoped>
.foo{
    display: inline-block;
    margin-left: 10px;
    color: blue;
}
button {
  font-family: monospace;
}
</style>