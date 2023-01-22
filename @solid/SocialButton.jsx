import "../assets/skin.css"
import "../assets/button.css"
import Link from "../assets/social/link.svg"
import { mergeProps, createSignal } from "solid-js"

export default function Button(props) {
    const merged = mergeProps({ 
        link: "/",
        skin: "platinum"
    }, props)

    const [handle, setHandle] = createSignal("url")
    const [handleSrc, setHandleSrc] = createSignal(Link)
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
    let matched = searchSocialHandle(merged.link)
    if(matched){
        setHandle(matched)
        setHandleSrc(Link.replace("link",handle()))
    }
  
    return ( 
        <a id="social" href={merged.link} class={merged.skin}>
            <img src={handleSrc()} alt={"External link to " + handle()} />
        </a>
    )
}