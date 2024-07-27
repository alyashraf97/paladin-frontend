import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alert } from '../models/alert.model';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private apiUrl = 'http://localhost:8080/api/alerts';

  constructor(private http: HttpClient) { }

  getAlerts(): Observable<Alert[]> {
    return this.http.get<Alert[]>(this.apiUrl);
  }

  getAlert(id: string): Observable<Alert> {
    return this.http.get<Alert>(`${this.apiUrl}/${id}`);
  }
}
