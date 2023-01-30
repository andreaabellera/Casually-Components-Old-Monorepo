import "../assets/skin.css"
import "../assets/button.css"

export default function Button({ 
    text = "Button",
    link = "/",
    shape = "hex",
    skin = "platinum"
  }){

  return ( 
    <a href={link} id={shape} className={"btnOuter " + skin}>

      {/* shape: wedge */}
      {shape === "wedge" && <div className="btnInner">{text}</div>}
      
      {/* shape: hex (fallback) */}
      {shape === "hex" && 
        <span className="pt">
          <div></div><div></div>
        </span>
      }
      {shape === "hex" && 
        <div className="btnInner">
          <div><div className="fill">{text}</div></div>
        </div>
      }
      {shape === "hex" && 
        <span className="pt">
          <div></div><div></div>
        </span>
      }

    </a>
  )
}