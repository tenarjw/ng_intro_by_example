import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'box',
  template: `
  <div class="box"
    [ngStyle]=boxStyle
  >
   <div class="inner">
     <div class="title">{{ title }}</div>   
       <ng-content></ng-content>
   </div>
 </div>
  `,
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnChanges{
  @Input() catid : number;
  @Input() id : number;
  @Input() title : string;
  @Input() topnews : number;
  public boxStyle = { }; 

  ngOnChanges()  {
    if (this.topnews)
        this.boxStyle= { 'color' : 'blue'}
    else this.boxStyle = { };
  }

}
