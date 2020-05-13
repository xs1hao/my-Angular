import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { DataService } from '../service/data.service';
import { EventEmitService } from 'src/app/shared/core/eventEmit/eventEmit.service';

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
    private eventEmitService: EventEmitService
  ) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('idS');
    console.log('ids:',id);
  }

  ngAfterViewInit() {
    this.getData();
    console.log('dataS:',this.dataS);
    // 下面这两种方式都可以对外广播；
    // this.eventEmitService.emit('Emit[getConfigJson]');
    this.eventEmitService.event$.emit('this.eventEmitService.event$.emit')
  }

  private getData() {
    this.dataService.httpGetHeroes().subscribe(res => this.dataS = res);
  }
 

}
