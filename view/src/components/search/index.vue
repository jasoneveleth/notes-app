<template>
  <searchbar :default_text="'Search'"/>
  <listofnotes :items="items" v-on:renderfile="render"/>
  <!-- TODO: needs to read from directory (get the current filenames) -->
</template>

<script>
import searchbar from "./searchbar.vue"
import listofnotes from "./listofnotes.vue"

export default{
  components: {searchbar,listofnotes},
  emits: ["renderfile","screen_change"],
  data(){
    return {
      view: 1,
      items: ["goober", "~/notes/ideas.md", "long jhonson"]
    }
  },
  methods:{
    render(item){
      this.$emit("renderfile",item)
      this.$emit("screen_change", 2)
    }
  }
}
</script>