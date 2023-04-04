import { LitElement, html } from "lit"
import { customElement, property } from "lit/decorators.js"

@customElement("casually-button")
export class CasuallyButton extends LitElement {
  @property()
  text = "Button"

  render() {
    return html`<button>${this.text}</button>`
  }
}