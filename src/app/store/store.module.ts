import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store/reducer/index';
import { CommonType } from '../core/utlis/entityCache';

@NgModule({
  imports: [
    CommonModule,
    // entityCachesss 这个是自己定义的一个关键字，具体后面再去看意义吧！！！！
    // entityCache 中文解释： 缓存
    StoreModule.forFeature(CommonType.entityCache, reducers),
  ],
  providers: [],
  exports: [StoreModule]
})
export class AppStoreModule {}
