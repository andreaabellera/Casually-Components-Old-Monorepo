import { Component, Input } from "@angular/core"

@Component({
    selector: "Button",
    template: `<button>{{text}}</button>`
})
export class Button {
    @Input() text: string = "Button"
}