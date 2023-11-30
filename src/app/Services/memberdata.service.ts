import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MemberdataService {

  url="https://jsonplaceholder.typicode.com/users";
  constructor( private http: HttpClient) { }
 member()
  {
    return this.http.get(this.url);
  }
  addUser(data:any)
  {
    return this.http.put(this.url,data);

  }
}
