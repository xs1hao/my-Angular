import { Directive, HostListener, Output, EventEmitter, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[onClickOutSide]'
})
export class ClickoutsideDirective {

  @Input() bindFlag;
  @Output() onClickOutSide = new EventEmitter<void>();
  constructor(private el: ElementRef) {}
  @HostListener('window:click', ['$event.target'])
  onClick(target) {
    // 在el 外部点击，执行控制方法；
    const isContain = this.el.nativeElement.contains(target);
    if (this.bindFlag && !isContain) {
      this.onClickOutSide.emit();
    }
  }
}
