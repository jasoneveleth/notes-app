<template>
    <div class="only">{{ $cookies.get("appenddata") === null ? "+" : "·" }}</div>
</template>

<script>
export default{
}
</script>

<style scoped>
.only {
    border: 2px transparent;
    background-color: var(--blue);
    color: white;
    border-radius: 50%;
    position: fixed;
    bottom: 30px;
    right: 30px;
    font-size: 50px;
    font-family: monospace;
    height: 60px;
    width: 60px;
    line-height: 60px;
    text-align: center;
}
</style>