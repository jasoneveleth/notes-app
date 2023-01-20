<template>
  <searchbar :default_text="this.$cookies.get('current_filename')" @click="$emit('screen_change', 1)"/>
  <div class="rendered-markdown">
    <div v-html="text"></div>
  </div>
  <plus @click="$emit('screen_change', 3)"/>
</template>

<script>
import { marked } from 'marked'
import DOMPurify from 'dompurify'
import plus from "./plus-button.vue"
import searchbar from "../search/search-bar.vue"

export default{
  components: {plus,searchbar},
  emits: ["screen_change"],
  data() {
    return {
      text: "",
    }
  },
  async mounted() {
      const res = await fetch(`${this.$host}/api/contents?filename=${this.$cookies.get("current_filename")}`)
      const contents = await res.text()
      this.text = DOMPurify.sanitize(marked(contents))
    }
}
</script>

<style scoped>
.foo{
    display: inline-block;
    margin-left: 10px;
    color: blue;
}
.rendered-markdown >>> img {
  max-height: 500px;
  max-width: 300px;
}
</style>