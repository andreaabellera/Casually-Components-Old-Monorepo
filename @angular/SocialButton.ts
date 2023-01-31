import { Component, Input } from "@angular/core"

@Component({
    selector: "social-button",
    standalone: true,
    template: `<button>{{text}}</button>`
})
export class SocialButton {
    @Input() text: string = "Social Button"
}