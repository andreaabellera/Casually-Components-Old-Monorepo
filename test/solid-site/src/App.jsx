import Button from "casually-components/@solid/Button"
import SocialButton from "casually-components/@solid/SocialButton"

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
    </>
  )
}

export default App;
