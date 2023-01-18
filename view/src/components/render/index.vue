<template>
  <div class="foo">render screen</div>
  <button @click="search">back to search</button>
  <button @click="append">+</button>
  <div>title: {{ currentfile }}</div>   <!-- TODO: needs to render the file -->
</template>

<script>
export default{
  props: ["currentfile"],
  emits: ["screen_change"],
  methods: {
    append() {
        this.$emit("screen_change", 3)
    },
    search() {
        this.$emit("screen_change", 1)
    }
  }
}
</script>

<style scoped>
.foo{
    color: blue;
}
</style>