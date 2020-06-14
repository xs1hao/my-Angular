import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class Constant {

    getRelateTemplate(key,data){
        const item_name = `<div>
              <span class="text-default">${data.name}</span>
              <p style="font-size:10px;color:red">取消</p>
            </div>
            <button id="sqButton">确定</button>`;
        const item_title = `<div><span style="color:#23c6c8">${data.title}</span><span>标题</span></div>`;
        const item_status = `<div><span>${data.status}</span><span>状态</span></div>`;
        const item_category = `<div><span>${data.category}</span><span>类型</span></div>`;
        switch(key){
            case 'issue':
            case 'req':
                return {
                    title:item_title,
                    category: item_category,
                    status: item_status
                };
            case 'workitem':
                return {
                    name: item_name
                }
            default:
                break;
        }
    }

    // 模拟数据
    getMockDataWithVision(){
      const mockData = [
        {
          id:1,
          title: '这是一个需求',
          number: 'RR20200614001',
          category: '01001001',
          status: '研发完成',
          assigned_domain: 'Vison',
          deadline: '2020年6月14日15',
          current_owners: [
            {
              name: '刘强强',
              count: '001001'
            }
          ]
        },
        {
          id: 2,
          title: '这是一个问题',
          number: 'Issue20200614002',
          category: '01001002',
          status: '定位中',
          assigned_domain: 'Fuxi',
          deadline: '2020年6月13日15',
          current_owners: [
            {
              name: '李欢',
              count: '001002'
            }
          ]
        },
        {
          id: 3,
          title: '这是一个工作项',
          number: 'Wi20200614002',
          category: '01001003',
          status: '待处理',
          assigned_domain: 'Titan',
          deadline: '2020年6月12日15',
          current_owners: [
            {
              name: '史强',
              count: '001002'
            }
          ]
        }
      ];
      return mockData;
    }

    // 模拟表头数据配置
    getTheadConfigData() {

      const theadConfig = [
        {
          title: '类型',
          key: 'category',
          style: {width: '100px', textAlign: 'center'}
        },
        {
          title: '主要信息',
          key: 'mainInfo',
          style: {width: '150px', textAlign: 'center'}
        },
        {
          title: '状态',
          key: 'status',
          style: {width: '100px', textAlign: 'center'}
        },
        {
          title: '责任人',
          key: 'current_owners',
          style: {width: '100px', textAlign: 'center'}
        }
      ];
      return theadConfig;
    }

}
