import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
// http相关
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { AppStoreModule } from './store/store.module';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { BasicPracticeModule } from './pages/basic/basic.module';
import { SharedModule } from './shared/shared.module';
import { RequestCacheWithMap, RequestCache } from './request-cache.service';
import { AngularAttributeModule } from './pages/angular-api/angular-attribute.module';
import { AngularWorksModule } from './pages/angular-works/angular-works.module';

registerLocaleData(zh);

export const metaReducers: MetaReducer<any>[] = environment.production ? []: []; // [storeFreeze];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    BasicPracticeModule,
    AngularAttributeModule,
    AppStoreModule,
    AngularWorksModule,
    StoreModule.forRoot({}, { metaReducers }),
    // 该应用代码并不需要数据服务器。 它基于 Angular in-memory-web-api 库，该库会替换 HttpClient 模块中的 HttpBackend。用于替换的这个服务会模拟 REST 风格的后端的行为。到 AppModule 的 imports 中查看这个库是如何配置的。
    HttpClientInMemoryWebApiModule.forRoot(//forRoot() 配置方法接收一个 InMemoryDataService 类来初始化内存数据库。
        InMemoryDataService, 
        { 
          dataEncapsulation: false,
          passThruUnknownUrl: true, //true (default) should NOT return the item (204) after a POST. false: return the item (200).
          put204: false // return entity after PUT/update
        }
    )
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: RequestCache, useClass: RequestCacheWithMap },//拦截器
    // EventEmitService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
