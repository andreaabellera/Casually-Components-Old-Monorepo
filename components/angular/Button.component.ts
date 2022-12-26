import { Component } from "@angular/core"

@Component({
    selector: "Button",
    standalone: true,
    template: `<button>{{text}}</button>`,
})
export class Button {
    @Input() text: string = "Button"
}