import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workdemo',
  templateUrl: './workdemo.component.html',
  styleUrls: ['./workdemo.component.less']
})
export class WorkdemoComponent implements OnInit {
  filter_list_show:Boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  showInputList () :void {
    this.filter_list_show = true;
  }

  closeFilterList() {
    this.filter_list_show = false;
  }

  onClickOutSide() {
    this.filter_list_show = false;
  }

}
