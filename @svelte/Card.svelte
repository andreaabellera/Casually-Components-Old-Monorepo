<script>
    import "../assets/skin.css"
    import "../assets/container.css"
    export let skin = "platinum"
    export let link = null
    export let image = null
    export let imagePosition = "left"
    export let width = "max-content"
    export let height = "max-content"
    export let margin = "1.5em"
    
    let posClass = ""
    if(image && imagePosition=="top") { posClass = "imgOnTop" }
    else if(image && imagePosition=="right") { posClass = "imgOnRight" }
    else if(image && imagePosition=="bottom") { posClass = "imgOnBottom" }
    else if(image && imagePosition=="left"){ posClass = "imgOnLeft" }
</script>

{#if link}
    <a href={link} id="card" class="{skin} {posClass}" style="height:{height};width:{width};margin:{margin};" >
        {#if imagePosition=="left" || imagePosition=="top"}
            {#if image}
                <div class="cardThumb" style="background-image:url({image});"></div>
            {/if}
            <div class="cardInner"><slot /></div>
        {:else}
            <div class="cardInner"><slot /></div>
            {#if image}
                <div class="cardThumb" style="background-image:url({image});"></div>
            {/if}
        {/if}
    </a>
{:else}
    <div id="card" class="{skin} {posClass}" style="height:{height};width:{width};margin:{margin};" >
        {#if imagePosition=="left" || imagePosition=="top"}
            {#if image}
                <div class="cardThumb" style="background-image:url({image});"></div>
            {/if}
            <div class="cardInner"><slot /></div>
        {:else}
            <div class="cardInner"><slot /></div>
            {#if image}
                <div class="cardThumb" style="background-image:url({image});"></div>
            {/if}
        {/if}
    </div>
{/if}