<template>
    <div class="container">
        <div class="item" v-for="item in items" :key="item" @click="$emit('renderfile', item)">
           > {{item}}
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
.item {
  font-size: 18px;
  margin: 12px 6px;
}
</style>