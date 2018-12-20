import {Directive, Input, Output, EventEmitter, OnInit, ElementRef,HostListener,Renderer2} from '@angular/core';
@Directive({
    selector: '[capitalLetter]'
  })
export class CapitalLetterDirective implements OnInit {
    value: any;
    constructor(private elementRef:ElementRef, private renderer:Renderer2) {}
  	ngOnInit(){}
	  @HostListener('keyup', [ '$event' ])
    onKeyUp(event: KeyboardEvent) 
    {	
          this.elementRef.nativeElement.value = this.elementRef.nativeElement.value.toUpperCase();
    }
}