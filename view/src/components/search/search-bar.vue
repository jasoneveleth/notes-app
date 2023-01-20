<template>
  <div class="container">
    <div class="text">
        <svg role="img" class="search-icon" viewBox="0 0 22 22">
            <g transform="translate(2.000000, 2.000000)" stroke-width="1.8" fill="none">
                <circle cx="7" cy="7" r="7"></circle>
                <path d="M12,13 L17,18" stroke-linecap="square"></path>
            </g>
        </svg>
        <input v-model="mytext" @input="$emit('newtext', mytext)" ref="input" class="search-input" type="text" :placeholder="default_text">
    </div>
    <div v-if="focus" class="toggle" @click="checked = !checked" :style="{backgroundColor: checked ? 'var(--blue)' : 'white'}">
        <svg v-if="checked" class="check-mark-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 99.6094 99.6582">
            <g>
                <path class="check-mark-circle" d="M49.8047 99.6094C77.0508 99.6094 99.6094 77.002 99.6094 49.8047C99.6094 22.5586 77.002 0 49.7559 0C22.5586 0 0 22.5586 0 49.8047C0 77.002 22.6074 99.6094 49.8047 99.6094Z"/>
                <path fill="#FFFFFF" d="M44.3359 73.6816C42.6758 73.6816 41.3086 72.998 40.0391 71.2891L27.7832 56.25C27.0508 55.2734 26.6113 54.1992 26.6113 53.0762C26.6113 50.8789 28.3203 49.0723 30.5176 49.0723C31.9336 49.0723 33.0078 49.5117 34.2285 51.123L44.1406 63.916L64.9902 30.4199C65.918 28.9551 67.1875 28.1738 68.457 28.1738C70.6055 28.1738 72.6074 29.6387 72.6074 31.9336C72.6074 33.0078 71.9727 34.1309 71.3867 35.1562L48.4375 71.2891C47.4121 72.9004 45.9961 73.6816 44.3359 73.6816Z"/>
            </g>
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
        }
    },
    emits: ["newtext"],
    mounted(){
        if(this.focus){
            this.$refs.input.focus()
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
    --gap: 10px;
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
    border-radius: 6px;
    background-color: var(--background-grey);
    color: var(--black);
    height: var(--height);
    padding: 8px 12px;
    width: 100%;
    padding-left: 30px;
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
}
.check-mark-circle {
    fill: var(--blue);
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