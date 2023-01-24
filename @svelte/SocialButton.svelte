<script>
    import "../assets/skin.css"
    import "../assets/button.css"
    import { onMount } from 'svelte'
    import Link from "../assets/social/link.svg"

    export let link = "/"
    export let skin = "platinum"
    let handle = "url"
    let handleSrc = Link
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
    let matched = searchSocialHandle(link)
    if(matched){
        handle = matched
        handleSrc = Link.replace("link",handle)
    }

    // Fetch SVG element to render on component
    onMount(() => {
        const req = new XMLHttpRequest()
        req.onreadystatechange=function(){
            if (req.readyState==4 && req.status==200){ 
                handleSrc = this.responseText
            }
        }
        req.open("GET", handleSrc, true)
        req.send()
    })
</script>

<a id="social" href={link} class="{skin}">
    {@html handleSrc}
</a>