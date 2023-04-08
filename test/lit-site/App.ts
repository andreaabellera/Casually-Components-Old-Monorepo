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
        <social-button link="https://linkedin.com"></social-button>
        <social-button link="https://github.com"></social-button>
        <social-button link="https://www.twitter.com/"></social-button>
      </casually-box>
    `
  }
}