<template>
  <div class="container">
    <div class="text">
        <svg role="img" class="search-icon" viewBox="0 0 22 22">
            <g transform="translate(2.000000, 2.000000)" stroke="#9FA2A9" stroke-width="1.8" fill="none">
                <circle cx="7" cy="7" r="7"></circle>
                <path d="M12,13 L17,18" stroke-linecap="square"></path>
            </g>
        </svg>
        <input ref="input" class="search-input" type="text" :placeholder="default_text">
    </div>
    <div class="toggle" @click="onClick" :style="{backgroundColor: content_flag ? 'white' : 'var(--blue)'}">
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
            content_flag: false,
        }
    },
    mounted(){
        if(this.focus){
            this.$refs.input.focus()
        }
    },
    methods: {
        onClick() {
            console.log("HERE click")
            this.content_flag = !this.content_flag
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
}
.container {
    display: flex;
    justify-content: space-between;
}
.text {
    box-sizing: border-box;
    display: inline-block;
    height: var(--height);
}
.search-icon {
    margin: calc((var(--height) - var(--icon-size)) / 2) calc((var(--padding) - var(--icon-size))/2);
    position: absolute;
    height: var(--icon-size);
    width: var(--icon-size);
}
.search-input {
    outline: none;
}
.search-input {
    border: 1px transparent;
    border-radius: 6px;
    background-color: var(--background-grey);
    color: var(--text-grey);
    height: var(--height);
    width: 300px;
    padding: 8px 12px;
    padding-left: 30px;
    font-size: var(--font-size);
}
.search-input::placeholder {
    color: var(--text-grey);
}
.full {
    background-color: var(--blue);
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