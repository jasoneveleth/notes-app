<template>
  <searchbar :default_text="'Search'"/>
  <listofnotes :items="items" v-on:renderfile="render"/>
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
      const res = await fetch(`${this.$api}/list`)
      const {names: filenames} = await res.json()
      this.items = filenames
    }
}
</script>