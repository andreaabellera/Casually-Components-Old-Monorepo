<script setup>
  import "../assets/skin.css"
  import "../assets/button.css"

  const props = defineProps({ 
    text: {type: String, required: false, default: "Button"},
    link: {type: String, required: false, default: "/"},
    shape: {type: String, required: false, default: "hex"},
    skin: {type: String, required: false, default: "platinum"}
  })
</script>

<template>
  <a :href=props.link :id=props.shape class="btnOuter" :class=props.skin>
    
    <!-- shape: wedge -->
    <div v-if="shape === 'wedge'" class="btnInner">{{props.text}}</div>
    
    <!-- shape: hex (fallback) -->
    <span v-if="shape === 'hex'" class="pt">
      <div></div><div></div>
    </span>
    
    <div v-if="shape === 'hex'" class="btnInner">
      <div><div class="fill">{{props.text}}</div></div>
    </div>
    
    <span v-if="shape === 'hex'" class="pt">
      <div></div><div></div>
    </span>
  </a>
</template>