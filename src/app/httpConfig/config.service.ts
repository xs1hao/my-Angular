import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

// 要指定响应对象类型，首先要定义一个具有所需属性的接口。（请使用接口而不是类；响应不能自动转换为类的实例。）
export interface Config {
  heroesUrl: string;
  textfile: string;
}

@Injectable({
    providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  configUrl = 'assets/config.json';

  getConfig() {
    return this.http.get<Config>(this.configUrl)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        // retry 如果发⽣错误，以指定次数重试 observable序列
        catchError(this.handleError) // then handle the error
      );
  }

  getConfigResponse(): Observable<HttpResponse<Config>> {
    return this.http.get<Config>(
      this.configUrl, { observe: 'response' });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      // 网络错误走这里；
      console.error('出错啦，出错啦:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `返回的错误码是 ${error.status}, ` +
        `请求体: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('出现了错误，请稍后重试....');
  };

  makeIntentionalError() {
    return this.http.get('not/a/real/url')
      .pipe(
        catchError(this.handleError)
      );
  }

}
