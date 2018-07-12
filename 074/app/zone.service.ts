import { Injectable, OnDestroy, NgZone } from '@angular/core';
import { Subject } from 'rxjs/Subject';

declare const document: Document;

@Injectable()
export class ZoneService implements OnDestroy {
  private onZoneStableSub: Subscription;
  private onZoneUnstableSub: Subscription;
  
  private interval: any;
  private timesLogged: number;

  private logElement: Element;
  
  constructor(private ngZone: NgZone) {
    this.onZoneStableSub = this.ngZone.onStable.subscribe(this.onZoneStable.bind(this));
    this.onZoneUnstableSub = this.ngZone.onUnstable.subscribe(this.onZoneUnstable.bind(this));
    
    this.logElement = document.getElementById('log');
  }
  
  onZoneStable() {
    this.logElement.innerHTML = 'Angular zone is stable <br>' + this.logElement.innerHTML;
  }
  
  onZoneUnstable() {
    this.logElement.innerHTML = 'Angular zone is unstable <br>' + this.logElement.innerHTML;
  }
  
  doAsyncThings(outside: boolean = false) {
    if (outside) {
      this.ngZone.runOutsideAngular(this.createInterval.bind(this));
    } else {
      this.createInterval();
    }
  }
  
  createInterval() {
    this.clearInterval();
    this.timesLogged = 0;
    this.interval = setInterval(this.logRandom.bind(this), 100);
  }
  
  logRandom() {
    this.logElement.innerHTML = ('Some Side Effect Happening: ' +  Math.floor(Math.random() * 1000)) + '<br>' + this.logElement.innerHTML);
    this.timesLogged = this.timesLogged + 1;
    if (this.timesLogged >= 5) {
      this.clearInterval();
    }
  }
  
  clearInterval() {
    clearInterval(this.interval);
  }
  

  ngOnDestroy() {
    this.onZoneStableSub.unsubscribe();
    this.onZoneUnstableSub.unsubscribe();
  }
}