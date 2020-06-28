import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.less']
})
export class ChildComponent implements OnInit {

  @Input() child :string;
  @Input() dataToChild;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.dataToChild){
      console.log('change 被触发了····',this.dataToChild);
    }
  }

}
