import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, timeout } from 'rxjs';
import { Credentials } from '../../model/credentials';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  testSubject$ = new Subject<number>();
  testOb?: Observable<number>;

  constructor(private http: HttpClient) {
    this.testOb = new Observable((observer) => {
      observer.next(Math.random());
    });
  }

  loginUser(credentials: Credentials) {
    this.http
      .post('http://localhost:9095/test1', credentials, {
        responseType: 'text',
      })
      .pipe(timeout(10000))
      .subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  testFunction(): Observable<string> {
    return new Observable((value) => value.next('hello from a function'));
  }

  updateFunction() {
    this.testSubject$.next(Math.random());
  }
}
