<template>
  <div class="container">
  <button class="btn" @click="$emit('screen_change', 2)">back to render screen</button>
    <textarea class="textarea" @input="savetocookie" placeholder="Text">{{text}}</textarea>
  <button class="btn" @click="on_append()">append</button>
</div>
</template>

<script>
export default{
  emits: ["screen_change"],
  data() {
    return {
      text: "",
    }
  },
  methods: {
    savetocookie(event){
      const value = event.target.value
      this.$cookies.set("appenddata", value)
      this.text = value
    },
    on_append() {
      const encoded_content = encodeURI(this.$cookies.get("appenddata"))
      const encoded_filename = encodeURI(this.$cookies.get("current_filename"))
      fetch(`/api/append?filename=${encoded_filename}&contents=${encoded_content}`)
      this.$cookies.set("appenddata", "")
    }
  }
}
</script>

<style scoped>
.foo{
    color: red;
}
.btn {
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
.textarea {
  border-color: #fff;
  width: 100%;
  height: 100%;
  resize: none;
  padding:5px;
}
</style>