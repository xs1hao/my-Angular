import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './pages/basic/service/data.type';


/**
 * 这个文件的作用：把 mock.data.ts 中的 DATAS 构造成服务器数据
 * in-memory-data.service.ts 文件已代替了 mock-heroes.ts 文件，现在后者可以安全的删除了；
 * 等服务器就绪后，你就可以抛弃这个内存 Web API，应用的请求将直接传给服务器。
 *
 */

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: '王二小' },
      { id: 12, name: '李磊在我的app中' },
      { id: 13, name: '王红红' },
      { id: 14, name: '程婷婷的爸爸' },
      { id: 15, name: '鲁班七号' },
      { id: 16, name: '项羽' },
      { id: 17, name: '刘备' },
      { id: 35, name: '诸葛亮35--我的 id 最大' },
      { id: 19, name: '周瑜' },
      { id: 20, name: '曹操' }
    ];
    return {heroes};
  }
  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
