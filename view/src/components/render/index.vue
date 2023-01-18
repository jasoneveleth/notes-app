<template>
  <button @click="$emit('screen_change', 1)">back to search</button>
  <div class="foo">title: {{currentfile}}</div>
  <div v-html="render_file(currentfile)"></div>
  <plus @click="$emit('screen_change', 3)"/>
</template>

<script>
import { marked } from 'marked'
import plus from "./plus.vue"

export default{
  components: {plus},
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