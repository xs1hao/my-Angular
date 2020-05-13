import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
 export class EventEmitService{
     public event$: EventEmitter<any>;
     constructor() {
         this.event$ = new EventEmitter();
     }
     emit(data) {
         this.event$.emit(data);
     }
     subscribe(data) {
         this.event$.subscribe(data);
     }
 }