import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

const SERVER = 'https://books.otwartaedukacja.pl/books';

@Injectable()
export class SearchService {

 constructor(private http: Http) {}

 search(term: string) {
  let tryCount = 0;
  return this.http.get(SERVER+`?title=${term}`)
  .map(response => response.json())
  .retry(3);
 }
}