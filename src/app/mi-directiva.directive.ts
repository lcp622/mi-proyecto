import { Directive, ElementRef } from '@angular/core';


@Directive({
  selector: '[appMiDirectiva]',
  standalone: true
})
export class MiDirectivaDirective {

  constructor( private element: ElementRef) {
    this.element.nativeElement.style.textTransform = 'toUpperCase';
   }
  
}
