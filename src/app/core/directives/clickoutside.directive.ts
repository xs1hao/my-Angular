import { Directive, HostListener, Output, EventEmitter, Input } from '@angular/core';

@Directive({
  selector: '[onClickOutSide]'
})
export class ClickoutsideDirective {

  @Input() bindFlag;
  @Output() onClickOutSide = new EventEmitter<void>();

  @HostListener('click', ['$event'])
  onClick() {
    if (this.bindFlag) {
      this.onClickOutSide.emit();
    }
  }
}
