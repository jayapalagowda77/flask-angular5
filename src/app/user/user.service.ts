import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user';

@Injectable()
export class UserService {
  constructor(private http: Http) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get('http://localhost:5000/api/user').map( res => res.json());
  }

  getUserById(id: number): Observable<User> {
    return this.http.get('http://localhost:5000/api/user/' + id).map( res => res.json());
  }
}
