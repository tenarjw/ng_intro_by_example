import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

const SERVER = 'https://books.otwartaedukacja.pl/books';

@Injectable()
export class SearchService {

  constructor(private http: Http) {}

  search(term: string) {
    return this.http.get(SERVER+`?title=${term}`)
      .map(response => {console.log(response);return response.json(); });
  }
}

