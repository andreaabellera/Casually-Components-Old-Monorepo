import "../assets/skin.css"
import "../assets/container.css"
import { mergeProps, createSignal, Switch, Match, Show } from "solid-js"

export default function Card(props) {
  const merged = mergeProps({ 
    skin: "platinum",
    link: null,
    image: null,
    imagePosition: "left",
    width: "max-content",
    height: "max-content",
    margin: "1.5em"
  }, props)

  const [posClass, setPosClass] = createSignal("")
  if(merged.image && merged.imagePosition=="top") { setPosClass("imgOnTop") }
  else if(merged.image && merged.imagePosition=="right") { setPosClass("imgOnRight") }
  else if(merged.image && merged.imagePosition=="bottom") { setPosClass("imgOnBottom") }
  else if(merged.image && merged.imagePosition=="left"){ setPosClass("imgOnLeft") }

  return ( 
    <Switch>
        <Match when={merged.link}>
            <a href={merged.link} id="card" class={`${merged.skin} ${posClass()}`} style={`height:${merged.height};width:${merged.width};margin:${merged.margin};`}>
                <Show when={merged.image && (merged.imagePosition=="left" || merged.imagePosition=="top")}>
                    <div class="cardThumb" style={`background-image:url(${merged.image});`}></div>
                </Show>
                <div class="cardInner">{props.children}</div>
                <Show when={merged.image && (merged.imagePosition=="right" || merged.imagePosition=="bottom")}>
                    <div class="cardThumb" style={`background-image:url(${merged.image});`}></div>
                </Show>
            </a>
        </Match>
        <Match when={!merged.link}>
            <div id="card" class={`${merged.skin} ${posClass()}`} style={`height:${merged.height};width:${merged.width};margin:${merged.margin};`}>
                <Show when={merged.image && (merged.imagePosition=="left" || merged.imagePosition=="top")}>
                    <div class="cardThumb" style={`background-image:url(${merged.image});`}></div>
                </Show>
                <div class="cardInner">{props.children}</div>
                <Show when={merged.image && (merged.imagePosition=="right" || merged.imagePosition=="bottom")}>
                    <div class="cardThumb" style={`background-image:url(${merged.image});`}></div>
                </Show>
            </div>
        </Match>
    </Switch>
  )
}