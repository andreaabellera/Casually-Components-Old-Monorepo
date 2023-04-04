import { Component, Input } from "@angular/core"
// Integrate the CommonModule from @angular/common
import "../assets/skin.css"
import "../assets/button.css"

@Component({
    selector: "casually-button",
    standalone: true,
    template: `
    <a href={{link}} id={{shape}} class="btnOuter {{skin}}">

        <ng-container [ngSwitch]="shape">
            <div *ngSwitchCase="'wedge'" class="btnInner">{{text}}</div>
            
            <span *ngSwitchCase="'hex'" class="pt">
                <div></div><div></div>
            </span>
            <div *ngSwitchCase="'hex'" class="btnInner">
                <div><div class="fill">{{text}}</div></div>
            </div>
            <span *ngSwitchCase="'hex'" class="pt">
                <div></div><div></div>
            </span>
        </ng-container>

    </a>
    `
})
export class Button {
    @Input() text: string = "Button";
    @Input() link: string = "/";
    @Input() shape:string = "hex";
    @Input() skin: string = "platinum";
}