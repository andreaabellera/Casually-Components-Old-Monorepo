import { Component, Input } from "@angular/core"

@Component({
    selector: "casually-button",
    standalone: true,
    template: `<button>{{text}}</button>`
})
export class CasuallyButton {
    @Input() text: string = "Button"
}