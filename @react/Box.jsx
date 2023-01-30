import "../assets/skin.css"
import "../assets/container.css"
import { useState, useEffect } from "react"

export default function Box({
      skin = "platinum",
      width = "max-content",
      height = "max-content",
      margin = "1.5em",
      padding = "1em",
      row = false,
      children
    }){

  const [rowClass, setRowClass] = useState("")
  useEffect(() => {
    if(row) { setRowClass("boxRowLayout") }
  }, [])

  return ( 
    <div id="box" className={`${skin} ${rowClass}`} style={{height: height, width: width, margin: margin, padding: padding}} >
      {children}
    </div>
  )
}