import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.less']
})
export class FilterComponent implements OnInit {

  @Input() filter_list_show:Boolean;
  @Output() showFilterList = new EventEmitter<any>();
  @Output() shutFilterList = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  //点击input框，筛选列表展示效果切换；
  filterListClick(event) {
    event.stopPropagation();
    this.showFilterList.emit();
    if(this.filter_list_show){
      this.shutFilterList.emit();
    }
  }

  closeFilterList(event){
    event.stopPropagation();
    this.shutFilterList.emit();
  }

 
}
