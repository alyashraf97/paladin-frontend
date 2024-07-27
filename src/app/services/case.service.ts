import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Case } from '../models/case.model';

@Injectable({
  providedIn: 'root'
})
export class CaseService {
  private apiUrl = 'http://localhost:8080/api/cases';

  constructor(private http: HttpClient) { }

  getCases(): Observable<Case[]> {
    return this.http.get<Case[]>(this.apiUrl);
  }

  getCase(id: string): Observable<Case> {
    return this.http.get<Case>(`${this.apiUrl}/${id}`);
  }
}
