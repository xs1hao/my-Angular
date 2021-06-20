import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzContextMenuService, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown'
@Component({
  selector: 'app-custom-model',
  templateUrl: './custom-model.component.html',
  styleUrls: ['./custom-model.component.less']
})
export class CustomModelComponent implements OnInit {

  constructor(
    private nzContextMenuService: NzContextMenuService
  ) {

  }

  ngOnInit(): void {
  }

  dropdown: any;

  contextMenu($event: MouseEvent, menu: NzDropdownMenuComponent) {
    this.nzContextMenuService.create($event, menu);
  }

  openRenameListModal() {
    console.log("打开了重命名modal");
  }

  close() {
    this.nzContextMenuService.close();
  }

  delete() {
    console.log("删除了一个元素");
  }

}
