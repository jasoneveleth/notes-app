<template>
  <div class="container">
  <button @click="display_render">back to render screen</button>
    <textarea @input="savetocookie" placeholder="Text">{{$cookies.get("appenddata")}}</textarea>
  <button>append</button> <!-- TODO: needs to emit an event -->
</div>
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
.container{
  display: grid;
  grid-template-rows: 20px auto 20px ;
  grid-gap: 5px;
  width: 100%;
  height: 100%;
}
textarea {
  border-color: #fff;
  width: 100%;
  height: 100%;
  resize: none;
  padding:5px;
}
</style>