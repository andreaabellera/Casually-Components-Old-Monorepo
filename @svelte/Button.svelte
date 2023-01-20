<script>
    import "../assets/skin.css"
    import "../assets/button.css"
    export let text = "Button"
    export let link = "/"
    export let shape = "hex"
    export let skin = "platinum"
</script>
  
<a href={link} id={shape} class="btnOuter {skin}">
    
    <!-- shape: wedge -->
    {#if shape=="wedge"}
        <div class="btnInner">{text}</div>
    
    <!-- shape: hex (fallback) -->
    {:else}
        <span class="pt">
            <div></div><div></div>
        </span>
        
        <div class="btnInner">
            <div><div class="fill">{text}</div></div>
        </div>
        
        <span class="pt">
            <div></div><div></div>
        </span>
    {/if}
</a>