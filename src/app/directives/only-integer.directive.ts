import { Directive,ElementRef,OnInit,Renderer2,HostListener } from '@angular/core';
@Directive({
  selector: '[appOnlyInteger]'
})

export class OnlyIntegerDirective implements OnInit {
	// Allow decimal numbers and negative values
 	private regex: RegExp = new RegExp(/^([0-9]*){10,10}$/g);
 	// Allow key codes for special events. Reflect :
 	// Backspace, tab, end, home
 	private specialKeys: Array<string> = [ 'Backspace', 'Tab', 'End', 'Home', '-' ];
  	constructor(private elementRef:ElementRef, private renderer:Renderer2) {}
  	ngOnInit(){
  		// this.renderer.setStyle(this.elementRef.nativeElement,'background-color','blue');
  		//this.elementRef.nativeElement.style.backgroundColor = "green"; // not the Good practise we will use the Different tool thorough the 
  	}
	@HostListener('keydown', [ '$event' ])
 	onKeyDown(event: KeyboardEvent) 
 	{	
		// Allow Backspace, tab, end, and home keys
 		if (this.specialKeys.indexOf(event.key) !== -1) {
 			return;
		}
		let current: string = this.elementRef.nativeElement.value;
		let next: string = current.concat(event.key);
	 	if (next && !String(next).match(this.regex)) {
	 		event.preventDefault();
	 	}
 	}

}
