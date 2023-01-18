<template>
    <div class="container">
        <div v-for="item in items" @click="thisone(item)">
            • {{item}}
        </div>
    </div>
</template>

<script>
export default{
    props: ["items"],
    emits: ["renderfile"],
    methods:{
        thisone(item){
            this.$emit("renderfile", item)
        }
    }
}
</script>