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

}