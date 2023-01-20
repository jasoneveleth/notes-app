<template>
  <div class="container">
    <button class="btn append-btn" :style="append_style" @click="on_append()">append</button>
    <textarea class="maintext" v-model="text" @input="savetocookie" placeholder="Text"></textarea>
    <div class="btn back-btn" @click="$emit('screen_change', 2)">←</div>
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
    },
    on_append() {
      if (!this.$cookies.get("appenddata")) {
        return
      }
      const encoded_content = encodeURI(this.$cookies.get("appenddata"))
      const encoded_filename = encodeURI(this.$cookies.get("current_filename"))
      fetch(`${this.$host}/api/append?filename=${encoded_filename}&contents=${encoded_content}`)
      this.$cookies.set("appenddata", "")
      this.text = ""
    }
  },
  computed: {
    append_style() {
        return {
          backgroundColor: this.text ? 'var(--blue)' : 'var(--background-grey)', 
          color: this.text ? 'var(--white)' : 'var(--text-grey)'
        }
      },
  },
  created() {
    this.text = this.$cookies.get("appenddata")
  }
}
</script>

<style scoped>
.btn {
  display: block;
}
.append-btn {
  color: var(--white);
  padding: 0px;
  background-color: var(--blue);
  border: none;
  height: 35px;
  border-radius: var(--border-radius);
  font-size: 16px;
}
.back-btn {
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
.container{
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  height: 100%;
}
.maintext {
  border-color: #fff;
  width: 100%;
  height: 100%;
  resize: none;
  padding:5px;
  font-size: 16px;
  font-family: monospace;
}
</style>