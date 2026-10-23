import { afterNextRender, Directive, ElementRef, inject } from '@angular/core';

@Directive({ selector: '[appFocusOnOpen]', standalone: true })
export class FocusOnOpenDirective {
  private readonly element = inject(ElementRef<HTMLElement>);

  constructor() {
    afterNextRender(() => this.element.nativeElement.focus());
  }
}