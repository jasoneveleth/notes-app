<template>
  <searchbar focus="true" :default_text="'Search'" v-on:newtext="oninput"/>
  <listofnotes :query="query" :noteslist="items" v-on:renderfile="render"/>
</template>

<script>
import searchbar from "./search-bar.vue"
import listofnotes from "./list-of-notes.vue"

export default{
  components: {searchbar,listofnotes},
  emits: ["renderfile","screen_change"],
  data(){
    return {
      view: 1,
      items: [],
      query: "",
    }
  },
  methods:{
    render(item){
      this.$emit("renderfile",item)
      this.$emit("screen_change", 2)
    },
    oninput(input) {
      this.query = input
    }
  },
  async mounted() {
      const res = await fetch(`${this.$host}/api/list`)
      const {files: files} = await res.json()
      this.items = files
    }
}
</script>