import "../assets/skin.css"
import "../assets/button.css"
import { mergeProps, Switch, Match } from "solid-js"

export default function Button(props) {
  const merged = mergeProps({ 
    text: "Button",
    link: "/",
    shape: "hex",
    skin: "platinum"
  }, props)

  return ( 
    <a href={merged.link} id={merged.shape} class={"btnOuter " + merged.skin}>
    
      <Switch>
        
        {/* shape: wedge */}
        <Match when={merged.shape === "wedge"}>
          <div class="btnInner">{merged.text}</div>
        </Match>

        {/* shape: hex (fallback) */}
        <Match when={merged.shape === "hex"}>
          <span class="pt">
            <div></div><div></div>
          </span>
          
          <div class="btnInner">
            <div><div class="fill">{merged.text}</div></div>
          </div>
          
          <span class="pt">
            <div></div><div></div>
          </span>
        </Match>

      </Switch>
  </a>
  )
}