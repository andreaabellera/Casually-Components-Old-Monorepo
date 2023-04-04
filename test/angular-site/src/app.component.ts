import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <casually-button text="Angular Connected!"></casually-button>
    <casually-button text="Angular Connected!" skin="asphalt"></casually-button>
    <casually-button></casually-button>
    <social-button></social-button>
    <box></box>
    <box text="Imma prop passed :)"></box>
    <card></card>
  `
})
export class AppComponent {}
