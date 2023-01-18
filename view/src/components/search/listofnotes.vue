<template>
    <div class="container">
        <div class="item" v-for="item in items" @click="renderfile(item)">
           > {{item}}
        </div>
    </div>
</template>

<script>
export default{
    props: ["items"],
    emits: ["renderfile"],
    methods:{
        renderfile(item){
            this.$emit("renderfile", item)
        }
    }
}
</script>

<style scoped>
.item {
  font-size: 18px;
  margin: 12px 6px;
}
</style>