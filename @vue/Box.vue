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

    const bottomAdjust = parseInt(props.height.replace("px",""))-5
    const rightAdjust = parseInt(props.width.replace("px",""))-5
</script>

<template>
    <div v-if="props.skin == 'epoxy'" :class="`scene ${props.skin}`" :style="`height:${props.height};width:${props.width};margin:${props.margin};`">
      <div class="cube">
        <div id="box" :class="`front ${rowClass}`" :style="`height:${props.height};width:${props.width};`" >
            <slot />
        </div>
        <div class="back" :style="`height:${props.height};width:${props.width};`"></div>
        <div class="top" :style="`width:${props.width};`"></div>
        <div class="bottom" :style="`width:${props.width};transform: rotateX(-90deg) translateZ(${bottomAdjust}px);`"></div>
        <div class="left" :style="`height:${props.height};`"></div>
        <div class="right" :style="`height:${props.height};transform: rotateY(90deg) translateZ(${rightAdjust}px);`"></div>
      </div>
    </div>
    <div v-else id="box" :class="`${props.skin} ${rowClass}`" :style="`height:${props.height};width:${props.width};margin:${props.margin};padding:${props.padding};`" >
        <slot />
    </div>
</template>