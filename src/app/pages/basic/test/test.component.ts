import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-basic-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less']
})
export class TestComponent implements OnInit {

  dataS = [];
  
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
  ) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('userId');
    console.log('ids:',id);
  }

  ngAfterViewInit() {
    this.getData();
    console.log('dataS:',this.dataS);
  }

  private getData() {
    this.dataService.httpGetHeroes().subscribe(res => this.dataS = res);
  }
 

}
