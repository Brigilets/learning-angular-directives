import {
  Directive,
  OnInit,
  Renderer2,
  ElementRef,
  HostListener,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'rgb(215, 203, 164)'
    // );
  }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'rgb(215, 203, 164)'
    // );
    this.backgroundColor = '#a2d9f7';
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   '#fff'
    // );
    this.backgroundColor = 'transparent';
  }
}
