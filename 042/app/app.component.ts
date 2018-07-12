import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-root',
    template: `
      <b>Angular Component Using Observables!</b>
      
      <h5 style="margin-bottom: 0">VALUES</h5>
      <pre><code>{{value}}</code></pre>
      
      <h5 style="margin-bottom: 0">SUBSCRIBED</h5>
      <pre><code>{{subscribed}}</code></pre>
      
      <h5 style="margin-bottom: 0">STATUS</h5>
      <pre><code>{{status}}</code></pre>
      
      <button style="margin-top: 2rem" (click)="init()">Init</button>
  `
})
export class AppComponent {
  
  private data: Observable<string>;
  private value: string;
  private subscribed: boolean;
  private status = "";

    init() {

	this.data = new Observable(observer => {
	    let timeoutId = setTimeout(() => {
		observer.next('You will never see this message');
	    }, 2000);
	    
	    this.status = 'Started';
	    
	    var onUnsubscribe = () => {
		this.subscribed = false;
		this.status = 'Finished!';
		clearTimeout(timeoutId);
	    }
            return onUnsubscribe;
	});

	let subscription = this.data.subscribe(
	    value => this.value = value,
	    error => console.log(error),
	    () => this.status = 'Finished'
	);
	this.subscribed = true;
	
	setTimeout(() => {
	  subscription.unsubscribe();
	}, 1000);
    }

}