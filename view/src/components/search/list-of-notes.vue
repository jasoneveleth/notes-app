<template>
    <div class="container">
        <div class="item" v-for="item in items" :key="item" @click="$emit('renderfile', item)">
           {{item}}
        </div>
    </div>
</template>

<script>
export default{
    props: {
        items: Object
    },
    emits: ["renderfile"],
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