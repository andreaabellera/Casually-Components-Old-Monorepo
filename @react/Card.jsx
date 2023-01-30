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
  useEffect(() => {
    if(image && imagePosition=="top") { setPosClass("imgOnTop") }
    else if(image && imagePosition=="right") { setPosClass("imgOnRight") }
    else if(image && imagePosition=="bottom") { setPosClass("imgOnBottom") }
    else if(image && imagePosition=="left"){ setPosClass("imgOnLeft") }
  }, [])

  return ( 
    <>
    {link && 
        <a href={link} id="card" className={`${skin} ${posClass}`} style={{height: height, width: width, margin: margin}}>
            {image && (imagePosition=="left" || imagePosition=="top") && 
                <div className="cardThumb" style={{backgroundImage: `url(${image})`}} ></div>
            }
            <div className="cardInner">{children}</div>
            {image && (imagePosition=="right" || imagePosition=="bottom") &&
                <div className="cardThumb" style={{backgroundImage: `url(${image})`}}></div>
            }
        </a>
    }
    {!link && 
        <div id="card" className={`${skin} ${posClass}`} style={{height: height, width: width, margin: margin}}>
            {image && (imagePosition=="left" || imagePosition=="top") &&
                <div className="cardThumb" style={{backgroundImage: `url(${image})`}}></div>
            }
            <div className="cardInner">{children}</div>
            {image && (imagePosition=="right" || imagePosition=="bottom") &&
                <div className="cardThumb" style={{backgroundImage: `url(${image})`}}></div>
            }
        </div>
    }
    </>
  )
}