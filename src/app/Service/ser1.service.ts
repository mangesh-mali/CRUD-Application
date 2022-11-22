import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Ser1Service {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://reqres.in/api/users');
  }

  createDt(dt: any) {
    return this.http.post('https://reqres.in/api/users', dt);
  }

  updateDT(a: any, id: any) {
    return this.http.put('https://reqres.in/api/users/' + id, a);
  }

  delDT(id: any) {
    return this.http.delete('https://reqres.in/api/users/' + id);
  }
}
