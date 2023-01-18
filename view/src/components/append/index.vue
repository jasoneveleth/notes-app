<template>
  <div class="foo">append screen</div>
  <textarea>sample</textarea> <!-- TODO: needs to store this in a cookies when leaving -->
  <button @click="display_render">back to render screen</button>
  <button>append</button> <!-- TODO: needs to emit an event -->
</template>

<script>
export default{
  emits: ["screen_change"],
  methods: {
    display_render() {
        this.$emit("screen_change", 2)
    }
  }
}
</script>

<style scoped>
.foo{
    color: red;
}
</style>