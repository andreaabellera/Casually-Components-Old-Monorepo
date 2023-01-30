import "../assets/skin.css"
import "../assets/button.css"
import Link from "../assets/social/link.svg"
import { useState, useEffect, useRef } from "react"

export default function SocialButton({
        link = "/",
        skin = "platinum"
    }){

    const handleSrcRef = useRef(Link)
    const handleRef = useRef("url")
    const [handleSrc, setHandleSrc] = useState(Link)
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

    useEffect(() => {
        // Derive social handle from link
        let matched = searchSocialHandle(link)
        if(matched){
            handleRef.current = matched
            handleSrcRef.current = Link.replace("link",matched)
        }

        // Fetch SVG element to render on component
        ;(async ()=>{
            const res = await fetch(handleSrcRef.current)
            const src = await res.text()
            setHandleSrc(src)
        })()
    }, [])
  
    return ( 
        <a id="social" href={link} className={skin} dangerouslySetInnerHTML={{__html: handleSrc}}></a>
    )
}