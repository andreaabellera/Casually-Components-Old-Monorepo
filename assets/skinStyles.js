import { css } from "lit"

export const skinStyles = css`
@font-face { font-family: 'Jura'; src: url('./font/Jura-VariableFont_wght.ttf'); } 
@font-face { font-family: 'Inria Sans'; src: url('./font/InriaSans-Regular.ttf');}
@font-face { font-family: 'Eczar'; src: url('./font/Eczar-VariableFont_wght.ttf');}
@font-face { font-family: 'Awa Handwriting'; src: url('./font/AwaHandwriting-Regular.otf');}

:root{
	--navy: #1C1A92;
	--navygrad: linear-gradient(to bottom, #2f2f69, #3a3991, #2a2892, #1e1b92);
	--white: #FBFBFB;
	--whitegrad: linear-gradient(40deg, #F8F8F8, #F2F2F2, #F8F8F8);
	--quicksilver: linear-gradient(40deg, #F8F6EB, #F1F1EB, #EFF1EB, #EBEDF1, #F4F4F4);
	--smoothsilver: linear-gradient(40deg, #F4F4F4, #EFEFEF, #EBEFEB, #F1F2F2, #F3F3F3);
	--sharpsilver: linear-gradient(40deg, #EFF0F5, #E7E6E2, #EEEFEB, #E0E1E5, #F6F6F6);
	--black: #1E1E1E;
	--blackgrad: linear-gradient(40deg, #737171, #494949, #393E39, #303130, #282828);
	--gold: #DDCB2B;
	--goldgrad: linear-gradient(120deg, #DDCB2B, #FFF500, #ECB831, #DDCB2B, #FFF500);
	--steelblue: #265995;
	--lightsteelblue: #4D7DB5;
	--lavender: #C5C8E5;
	--sage: #B9C8DA;
	--valence: linear-gradient(to bottom, #EAF6F6 0%, #9EB4CD 60%, #B9C8DA 80%, #C5C8E5 100%);
	--brown: #5A4437;
	--pink: #FF0066;
	--magenta: #FF00FF;
    --subtleshadow: radial-gradient(ellipse at right, rgba(0,0,0,0.4) 0%, transparent 65%);
    --paper: blanchedalmond;
    --pen: #1E1E1E;
    --epoxy: linear-gradient(330deg,rgba(255, 172, 184, 0.7) 0%, rgba(253, 197, 205, 0.7) 33%, rgba(255, 172, 185, 0.8) 66%, rgba(251, 191, 200, 0.7) 100%);
    --epoxy-tint: rgba(255,255,255,0.7);
    --epoxy-shad: #ff4444;
}

html, body{
	margin: 0;
  	padding: 0;
  	height: 100vh;
  	width: 100vw;
	overflow-x: hidden;
	scroll-behavior: smooth;
	scrollbar-width: 0.5em;
	scrollbar-color: var(--navy) var(--white);
}

a{
	text-decoration: none;
}

.platinum{
    font-family: 'Jura';
}
.asphalt{
	font-family: 'Inria Sans';
}
.paper{
    font-family: 'Awa Handwriting';
}
.epoxy{
    font-family: 'Eczar';
}


/*============
    BUTTON
 ============*/

.platinum.btnOuter{
    font-size: 80%;
    font-weight: 800;
}

#wedge.platinum.btnOuter{
    background: var(--smoothsilver);
    color: var(--black);
    padding: 0.4em 1.2em 0.4em 1.2em;
    border: 4px solid var(--sage);
    box-shadow: 0 0 0 4px #D9D9D9;
}
#wedge.asphalt.btnOuter{
    background: var(--black);
    color: var(--white);
    padding: 0.2em 1.2em 0.2em 1.2em;
    border: 4px solid var(--gold);
    box-shadow: 0 0 0 4px var(--black);
}
#wedge.paper.btnOuter{
    background: var(--paper);
    color: var(--pen);
    padding: 0.2em 1.2em 0.2em 1.2em;
    box-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}
#wedge.epoxy.btnOuter{
    background: var(--epoxy);
    color: var(--epoxy-tint);
    border: 4px solid var(--epoxy-tint);
    box-shadow: 0 0 0 4px var(--epoxy-shad);
    text-shadow: -1px 2px var(--epoxy-shad);
    padding: 0.2em 1.2em 0.2em 1.2em;
    backdrop-filter: blur(3px);
}

#hex.platinum .btnInner{
    background: #D9D9D9;
    color: var(--black);
}
#hex.asphalt .btnInner{
    background: var(--black);
    color: var(--white);
}
#hex.paper .btnInner{
    background: var(--paper);
    color: var(--pen);
    box-shadow: 0 2px 4px rgba(0,0,0,0.3);
}
#hex.epoxy .btnInner{
    background: var(--epoxy-shad);
    color: var(--epoxy-tint);
    text-shadow: -1px 2px var(--epoxy-shad);
    backdrop-filter: blur(3px);
}


#hex.platinum .btnInner div{
    background: var(--sage);
}
#hex.asphalt .btnInner div{
    background: var(--gold);
}
#hex.epoxy .btnInner div{
    background: var(--epoxy-tint);
}

.platinum .fill{
    background: var(--quicksilver) !important;
}
.asphalt .fill{
    background: var(--black) !important;
}
.paper .fill{
    background: var(--paper) !important;
}
.epoxy .fill{
    background: var(--epoxy) !important;
}

.platinum.btnOuter span{
    background: #D9D9D9;
}
.asphalt.btnOuter span{
    background: var(--black);
}
.epoxy.btnOuter span{
    background: var(--epoxy-shad);
}

.paper.btnOuter span:last-of-type{
    transform: rotateY(180deg);
}

.paper .pt div{
    clip-path: polygon(30% 30%, 90% 0%, 100% 0%, 100% 100%, 90% 100%, 30% 70%);
}

.platinum .pt div:nth-child(1){
    background: var(--sage);
}
.asphalt .pt div:nth-child(1){
    background: var(--gold);
}
.paper .pt div:nth-child(1){
    clip-path: polygon(35% 30%, 100% 30%, 100% 100%, 35% 100%);
    background: var(--subtleshadow);
    box-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}
.epoxy .pt div:nth-child(1){
    background: var(--epoxy-tint);
}

.platinum .pt div:nth-child(2){
    background: var(--smoothsilver);
}
.asphalt .pt div:nth-child(2){
    background: var(--black);
}
.paper .pt div:nth-child(2){
    background: var(--paper);
    box-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}
.epoxy .pt div:nth-child(2){
    background: var(--epoxy);
}

@media (max-width: 600px) {

    #wedge.platinum.btnOuter{
        border: 3px solid var(--sage);
        box-shadow: 0 0 0 4px #D9D9D9;
    }
	#wedge.asphalt.btnOuter{
        border: 3px solid var(--gold);
    }
    #wedge.paper.btnOuter{
        box-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }
    #wedge.epoxy.btnOuter{
        border: 3px solid var(--epoxy-tint);
        box-shadow: 0 0 0 4px var(--epoxy-shad);
    }

}


/*=================
    SOCIALBUTTON
 =================*/

#social.platinum{
    background: var(--smoothsilver);
    border: 2px solid var(--sage);
    box-shadow: 0 0 0 4px #D9D9D9;
    fill: var(--lightsteelblue);
}
#social.asphalt{
    background: var(--black);
    border: 2px solid var(--gold);
    box-shadow: 0 0 0 4px var(--black);
    fill: var(--white);
}
#social.paper{
    background: var(--paper);
    border-radius: 0;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.3);
    fill: var(--pen);
}
#social.epoxy{
    background: var(--epoxy);
    border: 3px solid var(--epoxy-tint);
    box-shadow: 0 0 0 4px var(--epoxy-shad);
    backdrop-filter: blur(3px);
    fill: var(--epoxy-shad);
}

#social svg{
    display: block;
    height: inherit;
    width: inherit;
}


/*=================
    BOX AND CARD
 =================*/

#box.platinum, #card.platinum{
    color: var(--black);
    background: var(--smoothsilver);
    border: 2px solid var(--sage);
    box-shadow: 0 0 0 4px #D9D9D9;
    border-radius: 0.5em;
}
#box.asphalt, #card.asphalt{
    color: var(--white);
    background: var(--black);
    border: 2px solid var(--gold);
    box-shadow: 0 0 0 4px var(--black);
}
#box.paper, #card.paper{
    background: var(--paper);
    color: var(--pen);
    box-shadow: 3px 5px 12px rgba(0,0,0,0.3);
}
.epoxy #box, #card.epoxy{
    background: var(--epoxy);
    color: var(--epoxy-tint);
    text-shadow: -1px 2px var(--epoxy-shad);
    backdrop-filter: blur(3px);
}

`