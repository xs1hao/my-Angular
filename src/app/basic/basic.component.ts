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

  basicObj;
  inputValues:string = '';

  mockDatas: Array<any> = [];
  inputVal = '';
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

    this.mockDatas = [
      {name: '李磊1245',id: 1},
      {name: '王明25623',id: 2},
      {name: '张刚5235',id: 3},
      {name: '程红0875',id: 4},
      {name: '陈晓1245',id: 5},
      {name: '王红是1245',id: 6},
    ]

    //获取路由参数方式；
    const id = this.route.snapshot.paramMap.get('id');
    console.log('id:',id);//19047
    console.log('this.location:',this.location.path());
  }

  back() {
    this.location.back();
  }
  // input框输入属性 
  onKey(value:string,eve:KeyboardEvent) {
    this.inputValues = value;
    // console.log('eve:',eve);
    if(value == "" && eve.keyCode == 8){
      alert('我使用了删除键，删除完了内容~~~')
    }
  }
  onEnter(value:string) {
    console.log('value:',value);
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
