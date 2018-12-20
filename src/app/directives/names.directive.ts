
import { Directive,OnInit,HostListener,ElementRef,Renderer} from '@angular/core';
@Directive({
  selector: '[appNamesDirective]'
})
export class NamesDirectiveDirective  implements OnInit {
	private regex: RegExp = new RegExp(/^([0-9]*){10,10}$/g);
	constructor(private elRef:ElementRef, private renderer:Renderer) { }
  	ngOnInit(){}
  	@HostListener('keydown', [ '$event' ])
  	onKeyDown(event: KeyboardEvent) 
 	{	
 		let current: string = this.elRef.nativeElement.value;
		let next: string = current.concat(event.key);
	 	if (next && !String(next).match(this.regex)) {
	 		event.preventDefault();
	 	}
 	}
}
