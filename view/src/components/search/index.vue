<template>
    <searchbar/>
    <searchtypetoggle/>
    <listofnotes/>
</template>

<script>
import searchbar        from "./searchbar.vue"
import searchtypetoggle from "./searchtypetoggle.vue"
import listofnotes      from "./listofnotes.vue"

export default{
  components: {searchbar,searchtypetoggle,listofnotes},
  data(){
    return {
      variable : "goober"
    }
  }
}
</script>