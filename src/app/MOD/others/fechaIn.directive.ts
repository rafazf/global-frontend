import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appFechaIn]',
  standalone: true,
})
export class FechaInDirective { 
  constructor(private el: ElementRef, private ngControl: NgControl, private renderer: Renderer2) { }

  @HostListener('input') onInput() {
    const inputValue: string = this.el.nativeElement.value;
    const fechaIngresada: Date = new Date(inputValue);
    const fechaActual: Date = new Date();
    const unMesMenos: Date = new Date();
    unMesMenos.setMonth(unMesMenos.getMonth() - 1);

    if (fechaIngresada > fechaActual || fechaIngresada < unMesMenos) {
      this.ngControl.control?.setErrors({ 'fechaInvalida': true });
      this.renderer.addClass(this.el.nativeElement, 'campo-invalido');
    } else {
      this.ngControl.control?.setErrors(null);
      this.renderer.removeClass(this.el.nativeElement, 'campo-invalido');
    }
  }
}
