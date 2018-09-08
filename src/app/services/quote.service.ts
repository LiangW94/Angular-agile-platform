import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { Quote } from '../../../node_modules/@angular/compiler';
import { Http } from '../../../node_modules/@angular/http';

@Injectable()
export class QuoteService {
    constructor(private http: Http) {}

    url = 'http://localhost:3000/markers';
    getQuote(): Observable<any> {
        return this.http.get(this.url);
    }
}
