<script setup>
    import "../assets/skin.css"
    import "../assets/button.css"
    import Link from "../assets/social/link.svg"
    import { ref } from "vue"

    const props = defineProps
    ({ 
        link: {type: String, required: false, default: "/"},
        skin: {type: String, required: false, default: "platinum"}
    })

    const handle = ref("url")
    const handleSrc = ref(Link)
    let socials = ['discord','facebook','forms','github','instagram','linkedin','reddit','steam','tiktok','twitch','twitter','youtube']

    function searchSocialHandle(newURL){
        let matches = newURL.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i)
        let clearDomain = matches && matches[1]

        // Find social handle match
        if(clearDomain){
            let toks = clearDomain.split('.')
            for (let candidate of toks){
                let match = socials.find(s => s == candidate)
                if(match)
                    return match
            }
        } return null
    }

    // Derive social handle from link
    let matched = searchSocialHandle(props.link)
    if(matched){
        handle.value = matched
        handleSrc.value = Link.replace("link",handle.value)
    }

    // Fetch SVG element to render on component
    ;(async ()=>{
        const res = await fetch(handleSrc.value)
        const src = await res.text()
        handleSrc.value = src
    })()
</script>

<template>
    <a v-html="handleSrc" id="social" :href=props.link :class=props.skin></a>
</template>