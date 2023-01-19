<template>
  <searchbar :default_text="currentfile" @click="$emit('screen_change', 1)"/>
  <div v-html="text"></div>
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
  async mounted() {
      const res = await fetch(`${this.$api}/contents?filename=${this.currentfile}`)
      const contents = await res.text()
      this.text = marked(contents)
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