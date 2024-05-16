import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appNumeroId]',
  standalone: true,
})
export class NumeroIdDirective {
  constructor(private ngControl: NgControl) { }

  @HostListener('input', ['$event.target.value']) onInput(value: string) {
    const newValue = this.validarNumeroIdentificacion(value);
    this.ngControl.control?.setValue(newValue, { emitEvent: false });
  }

  validarNumeroIdentificacion(value: string): string {
    // Permitir solo caracteres alfanuméricos (a-z, A-Z, 0-9) y el guión (-)
    const newValue = value.replace(/[^a-zA-Z0-9-]/g, '');
    return newValue.toUpperCase(); // Convertir a mayúsculas
  }
}
