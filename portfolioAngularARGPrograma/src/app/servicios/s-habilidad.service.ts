import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../model/habilidad';

@Injectable({
  providedIn: 'root'
})
export class SHabilidadService {

  habilidadURL = 'https://portfolio-backend-ptg7.onrender.com/habilidad/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Habilidad[]> {
    return this.httpClient.get<Habilidad[]>(this.habilidadURL + 'lista');
  }

  public detail(id: number): Observable<Habilidad> {
    return this.httpClient.get<Habilidad>(this.habilidadURL + `detail/${id}`);
  }

  public save(hab: Habilidad): Observable<any> {
    return this.httpClient.post<any>(this.habilidadURL + 'create', hab);
  }

  public update(id: number, hab: Habilidad): Observable<any> {
    return this.httpClient.put<any>(this.habilidadURL + `update/${id}`, hab);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.habilidadURL + `delete/${id}`);
  }
}
