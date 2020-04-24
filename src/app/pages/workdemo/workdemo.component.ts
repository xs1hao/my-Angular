import { Component, OnInit } from '@angular/core';
import { FilterSelectors } from '../../store/selector/filter.selector';
import { Observable } from 'rxjs';
import { FilterFrameState } from '../../store/reducer/filter.reducer';

@Component({
  selector: 'app-workdemo',
  templateUrl: './workdemo.component.html',
  styleUrls: ['./workdemo.component.less']
})
export class WorkdemoComponent implements OnInit {

  filter_list_show:Boolean = false;

  // listShow$: Observable<boolean>;
  listShow$: Observable<FilterFrameState>;

  constructor(
    private filterSelectors: FilterSelectors
  ) { 
    this.listShow$ = this.filterSelectors.filterListShow$;
    console.log('父组件中',this.listShow$);
   }

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
