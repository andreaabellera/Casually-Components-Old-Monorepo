import "../assets/skin.css"
import "../assets/container.css"
import { mergeProps, createSignal } from "solid-js"

export default function Box(props) {
  const merged = mergeProps({ 
    skin: "platinum",
    width: "max-content",
    height: "max-content",
    margin: "1.5em",
    padding: "1em",
    row: false
  }, props)

  const [rowClass, setRowClass] = createSignal("")
  if(merged.row) { setRowClass("boxRowLayout") }

  return ( 
    <div id="box" class={`${merged.skin} ${rowClass()}`} style={`height:${merged.height};width:${merged.width};margin:${merged.margin};padding:${merged.padding};`} >
        {props.children}
    </div>
  )
}