<script>
    import "./@assets/skin.css"
    import Link from "./@assets/social/link.svg"
    import Github from "./@assets/social/github.svg"
    import Instagram from "./@assets/social/instagram.svg"
    import LinkedIn from "./@assets/social/linkedin.svg"
    import Youtube from "./@assets/social/youtube.svg"
    export let handle = ""
    export let link = "/"
    export let skin = "platinum"
</script>

<a id="social" href={link} class="{skin}">

    {#if handle=="github"}
        <img src={Github} alt={handle}>
    {:else if handle=="instagram"}
        <img src={Instagram} alt={handle}>
    {:else if handle=="linkedin"}
        <img src={LinkedIn} alt={handle}>
    {:else if handle=="youtube"}
        <img src={Youtube} alt={handle}>
    <!-- handle: link icon (fallback) -->
    {:else}
        <img src={Link} alt={handle}>
    {/if}

</a>

<style>
    #social{
        display: block;
        height: 32px;
        width: 32px;
        padding: 0.1em;
        margin: 10px;
        border-radius: 0.2em;
    }

    #social img{
        height: 100%;
        width: 100%;
    }
</style>