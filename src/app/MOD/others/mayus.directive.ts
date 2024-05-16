import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appMayus]',
  standalone: true,
})
export class MayusDirective {
  constructor(private ngControl: NgControl) { }

  @HostListener('input', ['$event.target.value']) onInput(value: string) {
    this.ngControl.control?.setValue(value.toUpperCase(), { emitEvent: false });
  }

  @HostListener('keypress', ['$event']) onKeyPress(event: KeyboardEvent) {
    const charCode = event.which || event.keyCode;
    const charTyped = String.fromCharCode(charCode);

    // Bloqueamos la entrada de la letra "ñ" (charCode 209 para mayúscula, 241 para minúscula)
    if (charCode === 209 || charCode === 241) {
      event.preventDefault();
    }
  }
}
