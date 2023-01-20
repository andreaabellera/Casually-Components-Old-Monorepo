import "../assets/skin.css"
import "../assets/button.css"
import Link from "../assets/social/link.svg"
import Github from "../assets/social/github.svg"
import Instagram from "../assets/social/instagram.svg"
import LinkedIn from "../assets/social/linkedin.svg"
import Youtube from "../assets/social/youtube.svg"
import { mergeProps, Switch, Match } from "solid-js"

export default function Button(props) {
    const merged = mergeProps({ 
        handle: "",
        link: "/",
        skin: "platinum"
    }, props)
  
    return ( 
        <a id="social" href={merged.link} class={merged.skin}>
            <Switch fallback={<img src={Link} alt={merged.handle} />}>

                <Match when={merged.handle === "github"}>
                    <img src={Github} alt={merged.handle} />
                </Match>

                <Match when={merged.handle === "instagram"}>
                    <img src={Instagram} alt={merged.handle} />
                </Match>
                
                <Match when={merged.handle === "linkedin"}>
                    <img src={LinkedIn} alt={merged.handle} />
                </Match>
                
                <Match when={merged.handle === "youtube"}>
                    <img src={Youtube} alt={merged.handle} />
                </Match>

            </Switch>
        </a>
    )
}