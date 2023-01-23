<script setup>
    import "../assets/skin.css"
    import "../assets/container.css"
    import { ref } from "vue"

    const props = defineProps
    ({ 
        skin: {type: String, required: false, default: "platinum"},
        link: {type: String, required: false, default: null},
        image: {type: String, required: false, default: null},
        imagePosition: {type: String, required: false, default: "left"},
        width: {type: String, required: false, default: "max-content"},
        height: {type: String, required: false, default: "max-content"},
        margin: {type: String, required: false, default: "1.5em"}
    })

    const posClass = ref("")
    if(props.image && props.imagePosition=="top") { posClass.value = "imgOnTop" }
    else if(props.image && props.imagePosition=="right") { posClass.value = "imgOnRight" }
    else if(props.image && props.imagePosition=="bottom") { posClass.value = "imgOnBottom" }
    else if(props.image && props.imagePosition=="left"){ posClass.value = "imgOnLeft" }
</script>

<template>
    <a v-if="link" :href="link" id="card" :class="`${props.skin} ${posClass}`" :style="`height:${props.height};width:${props.width};margin:${props.margin};`" >
        <div v-if="image && (imagePosition=='left' || imagePosition=='top')" class="cardThumb" :style="`background-image:url(${image});`"></div>
        <div class="cardInner"><slot /></div>
        <div v-if="image && (imagePosition=='right' || imagePosition=='bottom')" class="cardThumb" :style="`background-image:url(${image});`"></div>
    </a>
    <div v-else id="card" :class="`${props.skin} ${posClass}`" :style="`height:${props.height};width:${props.width};margin:${props.margin};`" >
        <div v-if="image && (imagePosition=='left' || imagePosition=='top')" class="cardThumb" :style="`background-image:url(${image});`"></div>
        <div class="cardInner"><slot /></div>
        <div v-if="image && (imagePosition=='right' || imagePosition=='bottom')" class="cardThumb" :style="`background-image:url(${image});`"></div>
    </div>
</template>