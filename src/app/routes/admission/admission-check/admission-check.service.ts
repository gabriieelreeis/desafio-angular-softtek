import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import User from '../../../shared/models/user';

@Injectable({
  providedIn: 'root',
})
export class AdmissionCheckService {
  constructor(private _httpClient: HttpClient) {}

  getUser(cpf: number): Observable<User> {
    return this._httpClient.get<User>('http://localhost:3000/users', {
      params: {
        cpf,
      },
    });
  }
}
