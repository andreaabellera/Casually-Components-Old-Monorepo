<script>
    import "../assets/skin.css"
    import "../assets/button.css"
    import Link from "../assets/social/link.svg"

    export let link = "/"
    export let skin = "platinum"
    let handle = "url"
    let handleSrc = Link
    let socials = ['facebook','forms','github','instagram','reddit','steam','tiktok','twitch','twitter','youtube']

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

</script>

<a id="social" href={link} class="{skin}">
    <img src={handleSrc} alt="External link to {handle}">
</a>