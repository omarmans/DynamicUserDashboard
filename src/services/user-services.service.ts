import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserServicesService {
  private baseUrl = 'https://reqres.in/api/users';
  //to save data
  private userCache: any = {};

  constructor(private http: HttpClient) {}

  getUsers(page: number): Observable<any> {
    if (this.userCache[page]) {
      return of(this.userCache[page]);
    }

    return this.http.get(`${this.baseUrl}?page=${page}`).pipe(
      tap((data) => (this.userCache[page] = data)),
      catchError((error) => {
        console.error(error);
        return of([]);
      })
    );
  }

  getUser(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`).pipe(
      catchError((error) => {
        console.error(error);
        return of(null);
      })
    );
  }
}
