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
    <div v-if="focus" class="toggle" @click="onClick" :style="{backgroundColor: checked ? 'var(--blue)' : 'white'}">
        <svg v-if="checked" class="check-mark-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="6.83594 -74.6582 78.85746 78.80859"> <!-- top-left-corner-x top-left-corner-y width height -->
            <g>
                <path class="check-mark-circle" fill="#9FA2A9" d="M46.2402 4.15039C67.7734 4.15039 85.6934-13.7207 85.6934-35.2539C85.6934-56.7871 67.7246-74.6582 46.1914-74.6582C24.707-74.6582 6.83594-56.7871 6.83594-35.2539C6.83594-13.7207 24.7559 4.15039 46.2402 4.15039Z"/>
                <path fill="#FFFFFF" d="M41.9434-16.4551C40.4297-16.4551 39.209-17.041 38.0371-18.6035L28.9551-29.9805C28.2715-30.8105 27.9297-31.7871 27.9297-32.7637C27.9297-34.7656 29.3945-36.377 31.4453-36.377C32.666-36.377 33.6426-35.9863 34.7168-34.5215L41.748-25.1465L57.3242-50.3418C58.1055-51.709 59.2285-52.3926 60.4004-52.3926C62.3535-52.3926 64.1113-51.123 64.1113-49.0234C64.1113-48.0469 63.5742-47.0215 62.9883-46.1426L45.6055-18.6035C44.6777-17.1387 43.4082-16.4551 41.9434-16.4551Z"/>
                <!-- <circle cx="46.2402" cy="4.15039" r="1"/> -->
                <!-- <circle cx="85.6934" cy="-35.2539" r="1"/> -->
                <!-- <circle cx="46.1914" cy="-74.6582" r="1"/> -->
                <!-- <circle cx="6.83594 " cy="-35.2539" r="1"/> -->
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
    },
    methods: {
        onClick() {
            this.checked = !this.checked
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
    color: #000;
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