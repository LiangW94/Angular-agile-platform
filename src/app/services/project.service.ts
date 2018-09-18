import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Project } from '../domain';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProjectService {
    url = 'http://localhost:3000/markers';
    private headers = new Headers({
        'Content-Type': 'application/json'
    });
    constructor(private http: Http) {}

    // post
    add(project: Project): Observable<Project> {
        project.id = null;
        return this.http
        .post(this.url, JSON.stringify(project), {headers: this.headers})
        .map(res => res.json());
    }
}
