import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estudio } from '../model/estudio';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SEstudioService {

  estudioURL = 'http://localhost:8080/estudio/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Estudio[]> {
    return this.httpClient.get<Estudio[]>(this.estudioURL + 'lista');
  }

  public detail(id: number): Observable<Estudio> {
    return this.httpClient.get<Estudio>(this.estudioURL + `detail/${id}`);
  }

  public save(acercaDe: Estudio): Observable<any> {
    return this.httpClient.post<any>(this.estudioURL + 'create', acercaDe);
  }

  public update(id: number, acercaDe: Estudio): Observable<any> {
    return this.httpClient.put<any>(this.estudioURL + `update/${id}`, acercaDe);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.estudioURL + `update/${id}`);
  }
}