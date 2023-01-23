<script setup>
    import "../assets/skin.css"
    import "../assets/container.css"
    import { ref } from "vue"

    const props = defineProps
    ({ 
        skin: {type: String, required: false, default: "platinum"},
        width: {type: String, required: false, default: "max-content"},
        height: {type: String, required: false, default: "max-content"},
        margin: {type: String, required: false, default: "1.5em"},
        padding: {type: String, required: false, default: "1em"},
        row: {type: Boolean, required: false, default: false}
    })

    const rowClass = ref("")
    if(props.row) { rowClass.value = "boxRowLayout" }
</script>

<template>
    <div id="box" :class="`${props.skin} ${rowClass}`" :style="`height:${props.height};width:${props.width};margin:${props.margin};padding:${props.padding};`" >
        <slot />
    </div>
</template>