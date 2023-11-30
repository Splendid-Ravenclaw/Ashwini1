import { style } from '@angular/animations';
import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appBlueel]'
})
export class BlueelDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.color="green"
   }

}
