<template>
  <div class="container">
    <div class="text">
        <svg class="search-icon">
            <use href="@/assets/magnifying-glass.svg#img"/>
        </svg>
        <input @input="$emit('newtext', mytext)" ref="input" class="search-input" type="text" v-model="mytext" :placeholder="default_text">
    </div>
    <div v-if="focus" class="toggle" @click="toggleclik" :style="toggle_color">
        <svg v-if="checked" class="check-mark-svg">
            <use href="@/assets/check-mark.svg#img"/>
        </svg>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        default_text: String,
        focus: Boolean,
    },
    data() {
        return {
            checked: false,
            mytext: "",
        }
    },
    emits: ["newtext"],
    methods: {
        toggleclik() {
            console.log("cliockjjfdksljfdsl!!")
            this.checked = !this.checked
        }
    },
    mounted(){
        if(this.focus){
            this.$refs.input.focus()
        }
    },
    computed: {
        toggle_color() {
            return {backgroundColor: this.checked ? 'var(--blue)' : 'white'}
        }
    }
}
</script>

<style scoped>
* {
    --height: 35px;
    --padding: 30px;
    --icon-size: 18px;
    --font-size: 16px;
    --toggle-width: 33px;
    --toggle-border-width: 2px;
    --gap: 15px;
}
.container {
    display: flex;
    justify-content: space-between;
    gap: var(--gap);
}
.text {
    box-sizing: border-box;
    display: inline-block;
    height: var(--height);
    flex-grow: 1;
}
.search-icon {
    margin: calc((var(--height) - var(--icon-size)) / 2) calc((var(--padding) - var(--icon-size))/2);
    position: absolute;
    stroke: var(--text-grey);
    height: var(--icon-size);
    width: var(--icon-size);
}
.search-input {
    outline: none;
    border: 1px transparent;
    border-radius: var(--border-radius);
    background-color: var(--background-grey);
    color: var(--black);
    height: var(--height);
    padding: 8px 12px;
    width: 100%;
    padding-left: var(--padding);
    font-size: var(--font-size);
}
.search-input::placeholder {
    color: var(--text-grey);
}
.full {
    background-color: var(--blue);
}
.check-mark-svg {
    width: 100%;
    height: 100%;
    fill: var(--blue)
}
.toggle {
    border: var(--toggle-border-width);
    border-style: solid;
    border-color: var(--blue);
    border-radius: calc(var(--toggle-width)/2);
    height: var(--toggle-width);
    width: var(--toggle-width);
    display: inline-block;
    margin: calc((var(--height) - var(--toggle-width))/2) 0;
}
</style>