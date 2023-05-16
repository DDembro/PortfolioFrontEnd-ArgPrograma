import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  
  personaURL = 'https://portfolio-backend-ptg7.onrender.com/persona/';

  constructor(private httpClient: HttpClient) { }

  public getPersona(): Observable<persona> {
    return this.httpClient.get<persona>(this.personaURL + 'conseguir/1')
  }

  public update(estudio: persona): Observable<any> {
    return this.httpClient.put<any>(this.personaURL + 'editar', estudio);
  }
}
