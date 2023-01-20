<script setup>
  import Button from "casually-components/@vue/Button.vue"
  import SocialButton from "casually-components/@vue/SocialButton.vue"
</script>

<template>
  <Button
      text = "WEDGE"
      link = "https://github.com/andreaabellera/Casually-Components"
      shape = "wedge"
  />
  <Button
      text = "HEX"
      link = "https://github.com/andreaabellera/Casually-Components"
  />
  <SocialButton
      handle = "github"
      link = "https://github.com/"
  />
  <SocialButton
      handle = "somewhere else"
      link = "https://translate.google.ca/"
  />
  <Button
      skin = "asphalt"
      text = "WEDGE"
      link = "https://github.com/andreaabellera/Casually-Components"
      shape = "wedge"
  />
  <Button
      skin = "asphalt"
      text = "HEX"
      link = "https://github.com/andreaabellera/Casually-Components"
  />
  <SocialButton
      skin = "asphalt"
      handle = "github"
      link = "https://github.com/"
  />
  <SocialButton
      skin = "asphalt"
      handle = "somewhere else"
      link = "https://translate.google.ca/"
  />

</template>
