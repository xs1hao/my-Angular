import { DATAS } from './mock.data'
import { Injectable } from '@angular/core'
import { Data, Hero } from './data.type'
import { Observable, of } from 'rxjs'
import { MessageService } from './message.service';

// 模拟从服务请求数据的相关操作
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

//service 直接在组价中引用就可以  不用再module中引

// 这个服务导入了 Angular 的 Injectable 符号，并且给这个服务类添加了 @Injectable() 装饰器。 它把这个类标记为依赖注入系统的参与者之一。HeroService 类将会提供一个可注入的服务，并且它还可以拥有自己的待注入的依赖
// 没有这个就会报错哦！！！！
@Injectable({
    providedIn: 'root'
    // 为了确保 HeroService 可以提供该服务，就要使用注入器来注册它。注入器是一个对象，负责当应用要求获取它的实例时选择和注入该提供商。
})

export class DataService {
    constructor(
        private http: HttpClient,
        private messageService: MessageService
    ) {
        this.handleData();
    }

    private heroesUrl = 'api/heroes';  // URL to web apiprivate heroesUrl = 'api/heroes';  // URL to web api
    private log(str:string) {
        this.messageService.add(DATAS, { id: 11, name: str });
    }


    getData(): Observable<Data[]> {
        this.log('aaaaa');
        // 使用 RxJS 的 of() 函数来模拟从服务器返回数据。
        // of(HEROES) 会返回一个 Observable<Data[]>，它会发出单个值，这个值就是这些模拟 DATAS 的数组。
        // 操作符 of() 按顺序发出任意数量的值。
        return of(DATAS)
    }



    httpGetHeroes(): Observable<Hero[]> {
        return this.http.get<Hero[]>(this.heroesUrl)
            .pipe(
                // RxJS 的 tap() 操作符来实现，该操作符会查看 Observable 中的值，使用那些值做一些事情，并且把它们传出来。 这种 tap() 回调不会改变这些值本身; 可以 使用 tap() 来记录各种操作。
                tap(_ => this.log('fetched heroes')),
                catchError(this.handleError<Hero[]>('getHeroes', []))
            );
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }


    handleData() {
        this.httpGetHeroes().subscribe(
            res => console.log('res:', res)
            //这里能获取到在 in-memory-data.service.ts 中的数据
        )
    }
}