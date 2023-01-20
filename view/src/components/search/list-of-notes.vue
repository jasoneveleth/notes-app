<template>
    <div class="container">
        <div class="item" v-for="item in noteslist.filter(myfilter)" :key="item" @click="$emit('renderfile', item)">
           {{item}}
        </div>
    </div>
</template>

<script>
function matches(needle, haystack) {
    let needle_index = 0
    for (let i = 0; i < haystack.length && needle_index < needle.length; i++) {
        if (haystack[i] == needle[needle_index]) {
            needle_index += 1
        }
    }
    return needle_index == needle.length
}

export default{
    props: {
        noteslist: Object,
        query: String,
    },
    emits: ["renderfile"],
    methods: {
        myfilter(ele) {
            return matches(this.query, ele)
        }
    }
}
</script>

<style scoped>
.container{
    padding-top:5px;
    padding-bottom: 5px;
    display: grid;
    grid-gap:5px;
    grid-template-columns: 100%;
}
.item {
  padding: 5px;
  font-size: 18px;
  height: max-content;
  background: whitesmoke;
  border: 1px solid rgba(0,0,0,.4);
}
</style>