<script setup>
    import "../assets/skin.css"
    import "../assets/button.css"
    import Link from "../assets/social/link.svg"
    import Github from "../assets/social/github.svg"
    import Instagram from "../assets/social/instagram.svg"
    import LinkedIn from "../assets/social/linkedin.svg"
    import Youtube from "../assets/social/youtube.svg"

    const props = defineProps({ 
        handle: {type: String, required: false, default: ""},
        link: {type: String, required: false, default: "/"},
        skin: {type: String, required: false, default: "platinum"}
    })
</script>

<template>
    <a id="social" :href=props.link :class=props.skin>
        <img v-if="handle === 'github'" :src="Github" :alt=props.handle>
        <img v-else-if="handle === 'instagram'" :src="Instagram" :alt=props.handle>
        <img v-else-if="handle === 'linkedin'" :src="LinkedIn" :alt=props.handle>
        <img v-else-if="handle === 'youtube'" :src="Youtube" :alt=props.handle>
        <!-- handle: link icon (fallback) -->
        <img v-else :src="Link" :alt=props.handle>
    </a>
</template>