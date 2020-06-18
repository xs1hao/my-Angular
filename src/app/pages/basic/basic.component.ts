import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from './service/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ConfigService, Config } from 'src/app/httpConfig/config.service';
import { EventEmitService } from 'src/app/shared/core/eventEmit/eventEmit.service';


@Component({
  selector: 'app-basic-practice',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.less'],
  providers: [ ConfigService ],
})
export class BasicAngularComponent implements OnInit {

  isSpecial:boolean;
  mockData;
  checkoutForm;

  basicObj;
  inputValues:string = '';
  userId:string;
  showParent = true;

  mockDatas: Array<any> = [];
  inputVal = '';
  config: Config;
  error: any;
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private route: ActivatedRoute,
    private routers: Router,
    private location: Location,
    private configService: ConfigService,
    private eventEmitService: EventEmitService
  ) {
    this.isSpecial = true;
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });

    /**
     * 下面两种写法都能实现；
     * 一个使用了自定义类上面的方法；
     * 另一个使用了EventEmitter类上的方法；
     * 二者效果是一样的。
     */

    // this.eventEmitService.event$.subscribe(res => {
    //   console.log(res);
    // });
    this.eventEmitService.subscribe(data => {
      console.log(data);
    })
  }

  ngOnInit(): void {
    this.getData();
    //获取路由参数方式；
    const id = this.route.snapshot.paramMap.get('id');
    this.userId = id;
    console.log('id:',id);//19047
    console.log('this.location:',this.location.path());
  }


  getConfigJson() {
    this.configService.getConfig()
      .subscribe(res => console.log('configJsonResponse:',res))
    }

  back() {
    this.location.back();
  }
  // input框输入属性
  onKey(value: string, eve: KeyboardEvent) {
    this.inputValues = value;
    if(value == "" && eve.keyCode == 8){
      console.log('我使用了删除键，删除完了内容~~~')
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

  backParentRouter() {
    this.showParent = true;
    const curUrl = this.routers.url;
    // this.location.go('/basic','19047'); // http://localhost:4201/basic?19047
    // const url = `/basic/${19048}`
    // this.location.go(url);


    this.routers.navigate(['/basic',19047]);

  }

  toChildConponents() {
    this.showParent = false;
    // this.routers.navigate(['/basic/19047/basic_test/',2020]);

    // this.routers.url 可以拿到当前的路由；
    // 等价于 this.location.path()；

    // this.routers.url = /basic/19047/basic_test/2022
    this.routers.navigate(['basic',19047,'basic_test',2022]);
  }

  double(data){
     return data+' ngx-pipe-function';
  }

}
