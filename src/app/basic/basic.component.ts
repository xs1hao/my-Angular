import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from './service/data.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-basic-practice',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.less']
})
export class BasicAngularComponent implements OnInit {

  isSpecial:boolean;
  mockData;
  checkoutForm;

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) { 
    this.isSpecial = true;
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    })
  }

  ngOnInit(): void {
    this.getData();

    //获取路由参数方式；
    const id = this.route.snapshot.paramMap.get('id');
    console.log('id:',id);

    console.log('this.location:',this.location);
    
  }

  toggleStyle(){
    this.isSpecial = !this.isSpecial;
  }

  onSubmit(val) {
    console.log('val:',val);
  }

  // 使用了rxjs的方式，通过服务获取数据；
  getData () :void {
    // this.dataService.getData()
    this.dataService.httpGetHeroes()// 使用虚拟服务器获取数据
    .subscribe(res => this.mockData = res);
  }



}
