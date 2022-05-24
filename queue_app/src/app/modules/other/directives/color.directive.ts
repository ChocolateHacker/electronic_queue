import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[btnColor]'
})
export class BtnColorDirective implements OnInit{
    @Input('btnColor') public color!: string;
    @HostBinding('style.backgroundColor') public backgroundColor!: string;

    constructor(private _element: ElementRef) {
        _element.nativeElement.style.backgroundColor = 'red';
    }

    public ngOnInit(): void {
    }

    @HostListener('mouseenter') public onMouseIn(): void {
        this.backgroundColor = 'white';
    }

    @HostListener('mouseleave') public onMouseOut(): void {
        this.backgroundColor = 'red';
    }
}