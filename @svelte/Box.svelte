<script>
    import "../assets/skin.css"
    import "../assets/container.css"
    export let skin = "platinum"
    export let width = "max-content"
    export let height = "max-content"
    export let margin = "1.5em"
    export let padding = "1em"
    export let row = false

    let rowClass = ""
    $: if(row) { rowClass = "boxRowLayout" }
</script>

<div id="box" class="{skin} {rowClass}" style="height:{height};width:{width};margin:{margin};padding:{padding};" >
    <slot />
</div>