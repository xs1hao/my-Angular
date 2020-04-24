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
    AppStoreModule,
    StoreModule.forRoot({}, { metaReducers }),
    HttpClientInMemoryWebApiModule.forRoot(//forRoot() 配置方法接收一个 InMemoryDataService 类来初始化内存数据库。
    InMemoryDataService, { dataEncapsulation: false }
  )
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
