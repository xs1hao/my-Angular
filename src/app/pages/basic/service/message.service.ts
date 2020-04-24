import { Injectable } from "@angular/core";
import { Data } from './data.type';


@Injectable({
    providedIn: 'root'
})

export class MessageService {
    DATAS: any;

    constructor(
    ){}

    add(data,obj){
        return data.push(obj)
    }
}