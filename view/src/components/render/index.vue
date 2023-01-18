<template>
  <div class="foo">render screen</div>
  <button @click="append">+</button>
  <button @click="search">back to search</button>
  <!-- TODO: rendered markdown -->
</template>

<script>
export default{
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