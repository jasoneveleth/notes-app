<template>
  <searchbar focus="true" :default_text="'Search'"/>
  <listofnotes :items="items" v-on:renderfile="render"/>
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
    }
  },
  methods:{
    render(item){
      this.$emit("renderfile",item)
      this.$emit("screen_change", 2)
    },
  },
  async mounted() {
      const res = await fetch(`/api/list`)
      const {names: filenames} = await res.json()
      this.items = filenames
    }
}
</script>