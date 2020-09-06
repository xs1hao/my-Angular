import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzDropdownContextComponent, NzDropdownService } from 'ng-zorro-antd';
@Component({
  selector: 'app-custom-model',
  templateUrl: './custom-model.component.html',
  styleUrls: ['./custom-model.component.less']
})
export class CustomModelComponent implements OnInit {

  constructor(
    private dropdownService:NzDropdownService
  ) {

   }

  ngOnInit(): void {
  }

  dropdown:NzDropdownContextComponent;

  contextMenu($event:MouseEvent,template:TemplateRef<void>){
    this.dropdown=this.dropdownService.create($event,template);
  }

  openRenameListModal(){
    console.log("打开了重命名modal");
  }

  close(){
    this.dropdown.close();
  }

  delete(){
    console.log("删除了一个元素");
  }

}
