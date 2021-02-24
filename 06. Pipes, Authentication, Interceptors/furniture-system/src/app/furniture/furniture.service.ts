import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import IFurniture from './models/IFurniture';

const BASE_URL = 'http://localhost:5000/furniture/';
const CREATE_F = 'create';
const ALL_F = 'all';
const F_DETAILS = 'details/';
const ALL_USER_F = 'user';
const DELETE_F = 'delete/';

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {

  constructor(
    private http: HttpClient
  ) { }

  public create(data: IFurniture){
    return this.http.post(BASE_URL + CREATE_F, data);
  }

  public getAll(): Observable<Array<IFurniture>>{
    return this.http.get<Array<IFurniture>>(BASE_URL + ALL_F);
  }

  public getDetails(id: string): Observable<IFurniture>{
    return this.http.get<IFurniture>(BASE_URL + F_DETAILS + id);
  }

  public getAllUser(): Observable<Array<IFurniture>>{
    return this.http.get<Array<IFurniture>>(BASE_URL + ALL_USER_F);
  }

  public delete(id: string){
    return this.http.delete(BASE_URL + DELETE_F + id);
  }
}
