import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  usertoURL = 'http://localhost:3000/user/';
  constructor(private httpClient:HttpClient) { }
  public list(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.usertoURL);
  }
  public save(user:User): Observable<User>{
    return this.httpClient.post<User>(this.usertoURL, user);
  }
  public delete(id:number): Observable<User>{
    return this.httpClient.delete<User>(this.usertoURL + id);
  }
  public detail(id:Number): Observable<User>{
    return this.httpClient.get<User>(this.usertoURL + id);
  }
  public update(id: number, user:User):Observable<User>{
    return this.httpClient.put<User>(this.usertoURL + id, user);
  }
}
