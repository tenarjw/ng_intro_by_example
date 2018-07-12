i
mport { Component } from '@angular/core';
import { FormControl,
FormGroup,
FormBuilder } from '@angular/forms';
import { SearchService } from './services/search.service';
import 'rxjs/Rx';

@Component({
selector: 'app-root',
template: `
<form [formGroup]="coolForm"><input formControlName="search" placeholder="Search book"></form>
<div *ngFor="let book of result">
{{book.title}} [{{book.authors}}]
</div>
`
})

export class AppComponent {
searchField: FormControl;
coolForm: FormGroup;
result : any;
constructor(private searchService:SearchService, private fb:FormBuilder) {
this.searchField = new FormControl();
this.coolForm = fb.group({search: this.searchField});
this.searchField.valueChanges
.debounceTime(400)
.switchMap(term => this.searchService.search(term))
.subscribe(result => {
this.result = result;
});
}
}