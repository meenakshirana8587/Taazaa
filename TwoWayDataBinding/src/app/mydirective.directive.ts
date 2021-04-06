import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMydirective]'
})
export class MydirectiveDirective {
  @HostBinding ('style.border') border: string;
  @Input() color: string; 
  constructor(private el: ElementRef, private renderer: Renderer2) { }
  ChangeBgColor(color: string)
  {

    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
 @HostListener ('click') foo()
 {
   alert('hello');
 }
 @HostListener ('mouseenter') koo()
 {
   this.ChangeBgColor(this.color);
   this.border= '2px solid green';
 }
  @HostListener('mouseleave') abc()
  {
    console.log("hey");
    this.ChangeBgColor('blue');
    this.border= '';
  }

}
