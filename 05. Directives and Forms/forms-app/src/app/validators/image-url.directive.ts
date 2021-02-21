import {
  Directive,
  ElementRef,
  HostListener
} from '@angular/core';
import {
  NgForm
} from '@angular/forms';

@Directive({
  selector: '[appImageUrl]'
})
export class ImageUrlDirective {

  constructor(
    private elementRef: ElementRef,
    private form: NgForm
  ) {}

  @HostListener('input')
  validate(): void {
    let element: string = this.elementRef.nativeElement.value;

    if (element.startsWith('http') && (element.endsWith('png') || element.endsWith('jpg'))) {
      this.elementRef.nativeElement.style.borderColor = 'green';
      this.form.control.setErrors(null);
    } else {
      this.elementRef.nativeElement.style.borderColor = 'red';
      this.form.control.setErrors({
        url: true
      });
    }
  }

}
