import { DATAS } from './mock.data'
import { Injectable } from '@angular/core'
import { Data } from './data.type'
import { Observable, of } from 'rxjs'
import { MessageService } from './message.service';


//service 直接在组价中引用就可以  不用再module中引

// 这个服务导入了 Angular 的 Injectable 符号，并且给这个服务类添加了 @Injectable() 装饰器。 它把这个类标记为依赖注入系统的参与者之一。HeroService 类将会提供一个可注入的服务，并且它还可以拥有自己的待注入的依赖
// 没有这个就会报错哦！！！！
@Injectable({
    providedIn : 'root'
    // 为了确保 HeroService 可以提供该服务，就要使用注入器来注册它。注入器是一个对象，负责当应用要求获取它的实例时选择和注入该提供商。
})

export class DataService {
    constructor (
        private messageService: MessageService
    ) {}

    getData (): Observable<Data[]> {
        this.messageService.add(DATAS,{id:11,name:'add'});
        // 使用 RxJS 的 of() 函数来模拟从服务器返回数据。
        // of(HEROES) 会返回一个 Observable<Data[]>，它会发出单个值，这个值就是这些模拟 DATAS 的数组。
        // 操作符 of() 按顺序发出任意数量的值。
        return  of(DATAS)
    }
}