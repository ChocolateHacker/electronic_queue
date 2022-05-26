import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[btnColor]'
})
export class BtnColorDirective{
    @Input('btnColor') public color!: string;
    @HostBinding('style.backgroundColor') public backgroundColor!: string;

    constructor(private _element: ElementRef) {
        this._element.nativeElement.style.backgroundColor = 'red';
    }

    @HostListener('mouseenter') public onMouseIn(): void {
        this.backgroundColor = 'white';
    }

    @HostListener('mouseleave') public onMouseOut(): void {
        this.backgroundColor = 'red';
    }
}