import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { strictEqual } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class CheckService {
  url = 'http://127.0.0.1:8080/check-answer';
  winnerurl = 'http://127.0.0.1:8080/save';
  constructor(private http: HttpClient) {}

  public checkAnswer(answer: string, numIndex: number): Observable<boolean> {
    let parameters = new HttpParams();
    parameters = parameters.set('index', numIndex.toString());
    parameters = parameters.set('answer', answer);
    let headers = new HttpHeaders();
    headers = headers.set('secret', 'angular');
    return this.http.get<any>(this.url, { headers: headers, params: parameters });
  }

  public save(email: string): Observable<string> {
    let parameters = new HttpParams();
    parameters = parameters.set('email', email);
    let headers = new HttpHeaders();
    headers = headers.set('secret', 'angular');
    return this.http.get<any>(this.winnerurl, { headers: headers, params: parameters });
  }
}
