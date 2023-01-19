<template>
  <div class="container">
  <button @click="$emit('screen_change', 2)">back to render screen</button>
    <textarea @input="savetocookie" placeholder="Text">{{$cookies.get("appenddata")}}</textarea>
  <button @click="send_append()">append</button>
</div>
</template>

<script>
export default{
  props: ["filename"],
  emits: ["screen_change"],
  methods: {
    savetocookie(event){
      const element = event.target
      const value   = element.value
      $cookies.set("appenddata", value)
      console.log("cookie:", $cookies.get("appenddata"))
    },
    send_append() {
      const encoded_content = encodeURI("\n" + $cookies.get("appenddata"))
      const encoded_filename = encodeURI(this.filename)
      fetch(`${this.$api}/append?filename=${encoded_filename}&contents=${encoded_content}`)
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