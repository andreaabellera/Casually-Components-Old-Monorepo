import "../assets/skin.css"
import "../assets/container.css"
import { useState, useEffect } from "react"

export default function Card({
        skin = "platinum",
        link = null,
        image = null,
        imagePosition = "left",
        width = "max-content",
        height = "max-content",
        margin = "1.5em",
        children
    }){

  const [posClass, setPosClass] = useState("")
  const [hoverClass, setHoverClass] = useState("")
  useEffect(() => {
    if(image && imagePosition=="top") { setPosClass("imgOnTop") }
    else if(image && imagePosition=="right") { setPosClass("imgOnRight") }
    else if(image && imagePosition=="bottom") { setPosClass("imgOnBottom") }
    else if(image && imagePosition=="left"){ setPosClass("imgOnLeft") }
    if(link) { setHoverClass("hoverable") }
  }, [])

  function generateRedirect(){
    if(link){
        var a = document.createElement("a")
        document.body.appendChild(a)
        a.href = link
        a.click()
        window.URL.revokeObjectURL(link)
    }
  }

  return ( 
    <div onClick={generateRedirect} id="card" className={`${skin} ${posClass} ${hoverClass}`} style={{height: height, width: width, margin: margin}} role="link" aria-label={`Clicking this card will redirect page to ${link}`}>
        {image && (imagePosition=="left" || imagePosition=="top") &&
            <div className="cardThumb" style={{backgroundImage: `url(${image})`}}></div>
        }
        <div className="cardInner">{children}</div>
        {image && (imagePosition=="right" || imagePosition=="bottom") &&
            <div className="cardThumb" style={{backgroundImage: `url(${image})`}}></div>
        }
    </div>
  )
}