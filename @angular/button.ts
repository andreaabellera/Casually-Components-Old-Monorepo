import { Component, Input } from "@angular/core"

@Component({
    selector: "casually-button",
    template: `<button>{{text}}</button>`
})
export class CasuallyButton {
    @Input() text: string = "Button"
}