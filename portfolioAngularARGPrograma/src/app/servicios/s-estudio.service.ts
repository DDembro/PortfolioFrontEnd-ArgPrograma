import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estudio } from '../model/estudio';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SEstudioService {

  estudioURL = 'https://portfolio-backend-ptg7.onrender.com/estudio/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Estudio[]> {
    return this.httpClient.get<Estudio[]>(this.estudioURL + 'lista');
  }

  public detail(id: number): Observable<Estudio> {
    return this.httpClient.get<Estudio>(this.estudioURL + `detail/${id}`);
  }

  public save(estudio: Estudio): Observable<any> {
    return this.httpClient.post<any>(this.estudioURL + 'create', estudio);
  }

  public update(id: number, estudio: Estudio): Observable<any> {
    return this.httpClient.put<any>(this.estudioURL + `update/${id}`, estudio);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.estudioURL + `delete/${id}`);
  }
}
