import { Component } from '@angular/core';

@Component({
 selector: 'xo-selector',
 templateUrl : 'xo.component.html',
 styleUrls: ['./xo.component.css']
})
export class XoComponent {
  stanGry='KÓŁKO I KRYŻYK';
  xo = [' ',' ',' ',' ',' ',' ',' ',' ',' '];
  kto = 'x'; // czyj ruch

  private newState = (ix) => {
    if (this.xo[ix] !== ' ') return;
    this.xo[ix] = this.kto;
    if (this.kto==='o') {
      this.kto='x';
      this.stanGry = 'ruch: x';
    } else {
      this.kto='o';
      this.stanGry = 'ruch: o';
    }
    if (   ((this.xo[0] !== ' ') && (this.xo[0]===this.xo[1]) && (this.xo[0]===this.xo[2]))
         || ((this.xo[3] !== ' ') && (this.xo[3]===this.xo[4]) && (this.xo[3]===this.xo[5]))
         || ((this.xo[6] !== ' ') && (this.xo[6]===this.xo[7]) && (this.xo[6]===this.xo[8]))
         || ((this.xo[0] !== ' ') && (this.xo[0]===this.xo[3]) && (this.xo[0]===this.xo[6]))
         || ((this.xo[1] !== ' ') && (this.xo[1]===this.xo[4]) && (this.xo[1]===this.xo[7]))
         || ((this.xo[2] !== ' ') && (this.xo[2]===this.xo[5]) && (this.xo[2]===this.xo[8]))
         || ((this.xo[0] !== ' ') && (this.xo[0]===this.xo[4]) && (this.xo[0]===this.xo[8]))
         || ((this.xo[2] !== ' ') && (this.xo[2]===this.xo[4]) && (this.xo[2]===this.xo[6]))  ) { 
           this.stanGry = 'KONIEC';
    }
  }

  public click(event, n, item) {
    /*
    let newitem : string = ' ';
    if (item==' ') newitem='x'
    else if (item=='x') newitem='o'; 
    this.xo[n]=newitem;*/
    this.newState(n);
  }

}
