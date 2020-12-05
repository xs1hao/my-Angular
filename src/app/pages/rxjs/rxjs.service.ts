import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { User } from './rxjs.interface';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  constructor(
    private http: HttpClient,
  ) { }


  // 模拟调用GitHub的网址，获取30条用户信息；
  requestUsers() {
   return  this.http.get<Array<User>>(`https://api.github.com/users?since=1`)
        .pipe(
          map(res => {
              return res;
            })
        )
  }

  // 模拟调用github 查询user接口
  searchUser(val: any) {
    return this.http.get("https://api.github.com/search/users?q=" + val)
        .pipe(
            map(response => response),
            catchError((error) => {
                console.log("something went wrong, " + error);
                return of([]);
            })
        )
}

}
