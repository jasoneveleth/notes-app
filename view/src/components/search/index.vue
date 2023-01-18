<template>
  <div class="foo">search screen</div>
  <searchbar/>
  <searchtypetoggle/>
  <listofnotes/> <!-- TODO: emits event to go to render -->
</template>

<script>
import searchbar        from "./searchbar.vue"
import searchtypetoggle from "./searchtypetoggle.vue"
import listofnotes      from "./listofnotes.vue"

export default{
  components: {searchbar,searchtypetoggle,listofnotes},
  data(){
    return {
      view: 1,
    }
  }
}
</script>