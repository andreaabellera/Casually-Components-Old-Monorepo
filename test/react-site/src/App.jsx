import Button from "casually-components/@react/Button"
import SocialButton from "casually-components/@react/SocialButton"
import Box from "casually-components/@react/Box"
import Card from "casually-components/@react/Card"

function App() {
  return (
    <>
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
          skin = "asphalt"
      >
          <h2>Hello Friend</h2>
          <p>Par par par broooom generator lolo max princess tutu</p>
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
          row = {true}
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
      />
      <Card
          image = "https://www.henspark.com/wp-content/uploads/2017/12/Duckling-Cute-Baby-Animals.jpg"
          imagePosition = "right"
      />
      <Card
          image = "https://www.henspark.com/wp-content/uploads/2017/12/Duckling-Cute-Baby-Animals.jpg"
          imagePosition = "top"
      />
      <Card
          image = "https://www.henspark.com/wp-content/uploads/2017/12/Duckling-Cute-Baby-Animals.jpg"
          imagePosition = "bottom"
      />
      <Card>
          <h3>Dis Duck</h3>
          <p>What a cute duck</p>
      </Card>
      <Card 
          link = "https://github.com/"
          skin="asphalt"
      >
          <h3>Github</h3>
          <p>Click me to go to Github</p>
      </Card>
      <Card
          link = "https://github.com/"
          imagePosition = "top"
      >
          <h3>Oi Duck!</h3>
          <p>Lol the duck is missing <b>we must find it</b></p>
          <Box skin="asphalt" width="auto" row={true}>
              <SocialButton link = "https://facebook.com/" />
              <SocialButton link = "https://linkedin.com/" />
              <SocialButton link = "https://github.com/" />
              <SocialButton link = "https://translate.google.ca/" />
          </Box>
      </Card>
    </>
  )
}

export default App

