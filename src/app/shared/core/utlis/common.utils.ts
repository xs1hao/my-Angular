import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class CommonUtils {
    togglePic(show:boolean){
        // debugger;
        show = !show;
        return show;
    }
}
