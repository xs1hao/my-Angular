import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-basic-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less']
})
export class TestComponent implements OnInit {

  dataS = [];
  
  constructor(
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('userId');
    console.log('ids:',id);
    this.dataS = [  
      {name: '李磊1',id: 1},
      {name: '王明2',id: 2},
      {name: '张刚3',id: 3},
      {name: '程红4',id: 4},
      {name: '陈晓5',id: 5},
      {name: '王红是6',id: 6},
    ]
    console.log('dataS:',this.dataS);

  }

 

}
