import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from './rxjs.interface';

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
}
