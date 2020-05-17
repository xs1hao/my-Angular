import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.less']
})
export class SelectComponent implements OnInit {

  @Input() options;
  @Input() placeHolder;
  @Output() selectOption = new EventEmitter();
  selectedValue = null;
  constructor() { }

  ngOnInit(): void {
  }

  goRelatedApi(eve) {
    this.selectOption.emit(eve);
  }
}
