import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { FilterSelectors } from 'src/app/store/selector/filter.selector';
import { Observable } from 'rxjs';
import { FilterFrameState } from 'src/app/store/reducer/filter.reducer';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.less'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms', style({ opacity: 1})),
      ]),
      transition(':leave', [
        animate('1000ms', style({ opacity: 0 }))
      ])
    ]),
  ],
})
export class FilterComponent implements OnInit {

  @Input() filter_list_show:Boolean;
  @Output() showFilterList = new EventEmitter<any>();
  @Output() shutFilterList = new EventEmitter<any>();

  listShow$: Observable<FilterFrameState>;

  constructor(
    private filterSelectors: FilterSelectors
  ) { 
    this.listShow$ = this.filterSelectors.filterListShow$;
    console.log('this.lisShow@:',this.listShow$);
   }

  ngOnInit(): void {

    this.listShow$.subscribe(res => {
      console.log('filter-res:',res);
      // this.num = res['entityCache'].counters.count;
    })


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
