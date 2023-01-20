<template>
    <div class="container">
        <div class="item" v-for="item in process_list(noteslist)" :key="item">
           <div class="begin">
                <svg class="note-symbol-svg">
                    <use href="@/assets/note-symbol.svg#img"/>
                </svg>
           </div>
           <div class="filename" @click="$emit('renderfile', item.filename)">{{ item.vis }}</div>
           <div class="end">
                <svg v-if="!checked" @click="checked = !checked" class="favorite-svg star-outline">
                    <use href="@/assets/star-outline.svg#img"/>
                </svg>
                <svg v-if="checked" @click="checked = !checked" class="favorite-svg star-fill">
                    <use href="@/assets/star-fill.svg#img"/>
                </svg>
           </div>
        </div>
    </div>
</template>

<script>
function matches(needle, haystack) {
    let needle_index = 0
    for (let i = 0; i < haystack.length && needle_index < needle.length; i++) {
        if (haystack[i] == needle[needle_index]) {
            needle_index += 1
        }
    }
    return needle_index == needle.length
}

export default{
    props: {
        noteslist: Object,
        query: String,
    },
    data() {
        return {
            checked: false,
        }
    },
    emits: ["renderfile"],
    methods: {
        process_list(list) {
            return list.map((item) => {item['vis'] = item.filename.slice(0, -3); return item})
                       .filter((item) => matches(this.query, item.vis))
        }
    }
}
</script>

<style scoped>
* {
    --star-symbol-width: 20px;
    --note-symbol-width: 10px;
}
.container{
    padding-top: 15px;
    padding-bottom: 15px;
    display: grid;
}
.item {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}
.filename {
  flex-grow: 1;
  font-size: 16px;
  height: 100%;
  display: flex;
  align-items: center;
}
.end {
    width: 30px;
    height: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
}
.favorite-svg {
    height: var(--star-symbol-width);
    width: var(--star-symbol-width);
}
.star-outline {
    fill: var(--icon-grey);
}
.star-fill {
    fill: var(--yellow);
}
.begin {
    width: 15px;
}
.note-symbol-path {
    fill: var(--icon-grey);
}
.note-symbol-svg {
    margin: auto 0;
    height: var(--note-symbol-width);
    width: var(--note-symbol-width);
}
</style>