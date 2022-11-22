import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Ser2Service {

  constructor(private h: HttpClient) { }

  getUser() {
    return this.h.get('https://reqres.in/api/users');
  }

  createUser(dt: any) {
    return this.h.post('https://reqres.in/api/users', dt);
  }

  updateUser(dt: any, id: any) {
    return this.h.put('https://reqres.in/api/users/' + id, dt)
  }

  delete(id: any) {
    return this.h.delete('https://reqres.in/api/users/' + id);
  }
}
