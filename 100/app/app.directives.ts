import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({ 
  selector: '[topbackground]' 
})
export class TopbackgroundDirective {

  constructor(renderer: Renderer, el: ElementRef) {
    renderer.setElementStyle(el.nativeElement, 'backgroundColor', '#027FF4');
  }

}