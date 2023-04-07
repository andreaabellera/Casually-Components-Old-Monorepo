import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import "casually-components/@lit"

@customElement("app-root")
export class App extends LitElement {
  render() {
    return html`
      <casually-button text="Connected from Lit!"></casually-button>
      <casually-card>Yep</casually-card>
      <casually-box>
        <social-button text="github"></social-button>
        <social-button text="instagram"></social-button>
        <social-button text="twitter"></social-button>
      </casually-box>
    `
  }
}