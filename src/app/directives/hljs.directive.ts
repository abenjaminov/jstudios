import {Directive, ElementRef} from "@angular/core";

@Directive({
  selector: '.language-cs'
})
export class HljsDirective {
  constructor(private el: ElementRef) {
    console.log(this.el.nativeElement);
  }
}
