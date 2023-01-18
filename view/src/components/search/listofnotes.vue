<template>
    <div class="container">
        <div v-for="item in items" @click="renderfile(item)">
            • {{item}}
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