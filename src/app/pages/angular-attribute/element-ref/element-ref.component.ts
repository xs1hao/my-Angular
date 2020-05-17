import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-element-ref',
  templateUrl: './element-ref.component.html',
  styleUrls: ['./element-ref.component.less']
})
export class ElementRefComponent implements OnInit {

  ele: any;
  @ViewChild('btn', { static: true }) private domLabelChild: ElementRef;

  constructor(
    private  el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.monitoreByRenderer();
    this.ele = this.domLabelChild.nativeElement;
    this.setEvent();
  }


  setEvent() {
    console.log('this.ele:',this.ele);
    this.ele.addEventListener('click',() =>{
      console.log('sssssssssssss');
    })
  }

  monitoreByRenderer() {
    this.renderer.listen(this.el.nativeElement, 'click', (event) => {
        // if (event.target.tagName === 'IMG') {
        //     event.stopPropagation();
        //     this.previewImage = event.target.currentSrc;
        //     console.log(this.previewImage);
        //     this.previewVisible = true;
        // }
        console.log('event:',event);
    });
}

}
