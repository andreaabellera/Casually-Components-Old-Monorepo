<script>
    import "../assets/skin.css"
    import "../assets/button.css"
    import Link from "../assets/social/link.svg"
    /*import { readdirSync } from "fs"
    import * as path from "path"*/

    export let link = "/"
    export let skin = "platinum"
    let handle = "url"
    let handleSrc = Link
    let socials = ['facebook','forms','github','instagram','reddit','steam','tiktok','twitch','twitter','youtube']

    // Resolve path: __dirname to resolve
    /*let socialDir = path.join(__dirname, '..', 'assets', 'social')

    // Get list of social handles with available icons
    let socials = []
    readdirSync(socialDir).forEach(file => {
        let fn = file.substring(0,file.length-4)  // Pop off .svg extension and push to list
        socials.push(fn) 
    })*/

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