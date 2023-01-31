import { Component, Input } from "@angular/core"

@Component({
    selector: "box",
    standalone: true,
    template: `<div>{{text}}</div>`
})
export class Box {
    @Input() text: string = "Box"
}