import { Component, Input } from "@angular/core"

@Component({
    selector: "card",
    standalone: true,
    template: `<div>{{text}}</div>`
})
export class Card {
    @Input() text: string = "Card"
}