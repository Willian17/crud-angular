import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[red]'
})
export class RedDirective {

  constructor(private element: ElementRef) { 
    element.nativeElement.style.color = '#e35e6b'
   }

}
