import { Component, EventEmitter, Input, Output } from '@angular/core';

import { fromJson } from './json';

@Component({
  selector: 'dashboard',
  template: `<box *ngFor="let box of json.boxes"
  [catid]="box.catid" [id]="box.art.id" [topnews]="box.topnews"
  [title]="box.art.title">
  <div
   [innerHTML]="box.art.content | wrap">
  </div>
  </box>
  `,
})
export class DashboardComponent {
  
  json : fromJson;

  constructor() {
    this.json = new fromJson();
  }
}
/*
bez box:
<div *ngFor="let box of json.boxes"
  [class]="box.catid" [id]="box.art.id">
  <h1>{{box.art.title}}</h1>
  <div
   [innerHTML]="box.art.content">
  </div>
</div>
*/
