import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.less']
})
export class DragDropComponent implements OnInit {

  todoList = [
    'Learn Angular 7',
    'Finish Laundry',
    'Go Shopping',
    'Clean my room'
  ];
  doneList = [
    'req',
    'workload',
    'comment'
  ];
  constructor() { }

  ngOnInit(): void {
  }


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  dianjile(e){
    document.getElementById(e).scrollIntoView()
  }

}
