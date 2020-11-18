import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { FilterSelectors } from 'src/app/store/selector/filter.selector';
import { Observable } from 'rxjs';
import { FilterFrameState } from 'src/app/store/reducer/filter.reducer';
import { Store } from '@ngrx/store';
import { InputClick } from 'src/app/store/action';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.less'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0,height: 0 }),
        animate('300ms', style({ opacity: 1,height:'300px'})),
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0,height:0 }))
      ])
    ]),
  ],
})
export class FilterComponent implements OnInit {

  @Input() list_show:Boolean;
  @Output() showFilterList = new EventEmitter<any>();
  @Output() shutFilterList = new EventEmitter<any>();

  listShow$: Observable<FilterFrameState>;

  constructor(
    private filterSelectors: FilterSelectors,
    private store$: Store<object>,
  ) {
    this.listShow$ = this.filterSelectors.filterListShow$;
    console.log('子组件中：',this.listShow$);
   }

  ngOnInit(): void {
    this.listShow$.subscribe(res => {
      console.log('filter-res:',res);
      console.log('res[entityCache].filters:',res['entityCache'].filters); // 这里能拿到当前过滤器需要的状态
      // this.num = res['entityCache'].counters.count;
    })
  }

  //点击input框，筛选列表展示效果切换；
  filterListClick(event) {
    event.stopPropagation();
    this.showFilterList.emit();
    this.store$.dispatch(InputClick());
    if(this.list_show){
      this.shutFilterList.emit();
    }
  }

  closeFilterList(event){
    event.stopPropagation();
    this.shutFilterList.emit();
  }

  onClickOutSide() {
    this.shutFilterList.emit();
  }

}
