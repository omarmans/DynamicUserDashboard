import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverColorDirective]',
})
export class HoverColorDirectiveDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseover') onMouseOver() {
    this.el.nativeElement.style.color = 'red';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.color = 'black';
  }
}
