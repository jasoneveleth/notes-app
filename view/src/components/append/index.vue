<template>
  <button @click="display_render">back to render screen</button>
  <textarea @input="savetocookie">{{$cookies.get("appenddata")}}</textarea>
  <button>append</button> <!-- TODO: needs to emit an event -->
</template>

<script>
export default{
  emits: ["screen_change"],
  methods: {
    display_render() {
        this.$emit("screen_change", 2)
    },
    savetocookie(event){
      const element = event.target
      const value   = element.value
      $cookies.set("appenddata", value)
      console.log("test:",$cookies.get("appenddata"))
    }
  }
}
</script>

<style scoped>
.foo{
    color: red;
}
button {
  display: block;
  font-family: monospace;
}
</style>