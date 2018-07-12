import { Component } from '@angular/core';
import { FormControl, 
	FormGroup, 
	FormBuilder } from '@angular/forms'; 
import { SearchService } from './services/search.service';
import 'rxjs/Rx';

@Component({
	selector: 'app-root',
	template: `
		<form [formGroup]="coolForm">
		  <input formControlName="search" placeholder="Search book">
		  <input (click)="search()" type="submit" value="SearchFor book">
		</form>
		
		<p style="background: tomato; color: white; padding: 1rem;"
		  *ngIf="errorMessage">
		  {{ errorMessage }}
		</p>
		
		<div *ngFor="let book of result">
		  {{book.title}} [ {{book.authors}} ]
		</div>
	`
})

export class AppComponent {
	searchField: FormControl;
	coolForm: FormGroup;
	errorMessage: string;
        result : any;
	
	constructor(private searchService:SearchService, private fb:FormBuilder) {
		this.searchField = new FormControl();
		this.coolForm = fb.group({ search: this.searchField });
	}
	
	search() {
		const request = this.searchService.search(this.searchField.value)
		  .subscribe(
		    result => { this.result = result; },
		    err => { this.errorMessage = err.message; },
        () => { console.log('Completed'); }
		  );
		  // natychmiastowe anulowanie
		setTimeout(() => {
		  request.unsubscribe();
		  this.errorMessage = 'Request cancelled';
		}, 0) // zwieksz do 3000 - zob.efekt
	}
}