import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const SERVER = 'https://books.otwartaedukacja.pl/books';


 @Injectable()
 export class SearchService {

 constructor(private http: Http) {}

 search(term: string) {
  return this.http.get(SERVER+`?title=${term}`)
  .map((response) => response.json())
  .catch((e) => {
    return Observable.throw(
          new Error(`${ e.status } ${ e.statusText }`)
    );
  });
 }
}

