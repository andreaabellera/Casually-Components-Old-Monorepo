<script setup>
  import Button from "casually-components/@vue/Button.vue"
  import SocialButton from "casually-components/@vue/SocialButton.vue"
  import Box from "casually-components/@vue/Box.vue"
  import Card from "casually-components/@vue/Card.vue"
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
        link = "https://github.com/"
    />
    <SocialButton
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
        link = "https://github.com/"
    />
    <SocialButton
        skin = "asphalt"
        link = "https://translate.google.ca/"
    />
    <Box
        skin = "epoxy"
        height = "450px"
        width = "500px"
    >
        <h2>Hello Friend</h2>
        <p>Generator lolo max princess tutu</p>
    </Box>
    <Box>
        <Button
            skin = "asphalt"
            text = "Why not?"
            link = "https://github.com/andreaabellera/Casually-Components"
        />
        <SocialButton
            link = "https://twitter.com/"
        />
        <SocialButton
            link = "https://www.reddit.com/"
        />
    </Box>
    <Box
        :row = true
        skin = "paper"
        width = "30vw"
        padding = "0.5em 1.5em 0.5em 1.5em"
    >
        <h4>SOCIALS</h4>
        <SocialButton
            skin = "asphalt"
            link = "https://twitter.com/"
        />
        <SocialButton
            skin = "asphalt"
            link = "https://www.reddit.com/"
        />
        <SocialButton
            skin = "asphalt"
            link = "https://github.com/"
        />
        <SocialButton
            skin = "asphalt"
            link = "https://translate.google.ca/"
        />
    </Box>
    <Box />
    <Card
        image = "https://www.henspark.com/wp-content/uploads/2017/12/Duckling-Cute-Baby-Animals.jpg"
    >
        <h3>Dis Duck</h3>
        <p>What a cute duck</p>
    </Card>
    <Card
        skin = "asphalt"
        image = "https://www.henspark.com/wp-content/uploads/2017/12/Duckling-Cute-Baby-Animals.jpg"
        imagePosition = "right"
        width = "20vw"
    >
        <h3>Dis Duck</h3>
        <p>What a cute duck What a cute duck What a cute duck What a cute duck What a cute duck</p>
    </Card>
    <Card
        skin = "asphalt"
        image = "https://www.henspark.com/wp-content/uploads/2017/12/Duckling-Cute-Baby-Animals.jpg"
        imagePosition = "top"
    >
        <h3>Dis Duck</h3>
        <p>What a cute duck</p>
    </Card>
    <Card
        skin = "asphalt"
        image = "https://www.henspark.com/wp-content/uploads/2017/12/Duckling-Cute-Baby-Animals.jpg"
        imagePosition = "bottom"
        width = "20vw"
    >
        <h3>Dis Duck</h3>
        <p>What a cute duck What a cute duck What a cute duck What a cute duck What a cute duck</p>
    </Card>
    <Card
        skin = "asphalt"
        image = "https://www.henspark.com/wp-content/uploads/2017/12/Duckling-Cute-Baby-Animals.jpg"
        width = "300px"
    > 
        <p> Left </p> 
    </Card>
    <Card
        image = "https://www.henspark.com/wp-content/uploads/2017/12/Duckling-Cute-Baby-Animals.jpg"
        imagePosition = "right"
        width = 300px
    >
        <p> Right </p>
    </Card>
    <Card
        skin = "paper"
        image = "https://www.henspark.com/wp-content/uploads/2017/12/Duckling-Cute-Baby-Animals.jpg"
        imagePosition = "top"
    >
        <p> Top </p>
    </Card>
    <Card
        image = "https://www.henspark.com/wp-content/uploads/2017/12/Duckling-Cute-Baby-Animals.jpg"
        imagePosition = "bottom"
    >
        <p> Bottom </p>
    </Card>
    <Card>
        <h3>Dis Duck</h3>
        <p>What a cute duck</p>
    </Card>
    <Card 
        link = "https://www.twitch.tv/"
        skin="asphalt"
    >
        <h3>Twitch</h3>
        <p>Click me to go to Twitch</p>
    </Card>
    <Card
        link = "https://github.com/"
        imagePosition = "top"
    >
        <h3>Oi Duck!</h3>
        <p>Lol the duck is missing <b>we must find it</b></p>
        <Box skin="asphalt" width="auto" :row=true>
            <SocialButton link = "https://facebook.com/" />
            <SocialButton link = "https://linkedin.com/" />
            <SocialButton link = "https://github.com/" />
            <SocialButton link = "https://translate.google.ca/" />
        </Box>
    </Card>
</template>
