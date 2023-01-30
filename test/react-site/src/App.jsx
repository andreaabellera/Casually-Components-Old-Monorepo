import Button from "casually-components/@react/Button"
import SocialButton from "casually-components/@react/SocialButton"
import Box from "casually-components/@react/Box"

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
    </>
  )
}

export default App

