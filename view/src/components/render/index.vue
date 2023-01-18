<template>
  <button @click="search">back to search</button>
  <div class="foo">title: {{currentfile}}</div> 
  <div v-html="render_file(currentfile)"></div>
  <button @click="append">{{ $cookies.get("appenddata") === null ? "+" : "**" }}</button>
</template>

<script>
import { marked } from 'marked'

export default{
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
    },
    append() {
        this.$emit("screen_change", 3)
    },
    search() {
        this.$emit("screen_change", 1)
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