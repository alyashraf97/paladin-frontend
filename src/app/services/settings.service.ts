import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private apiUrl = 'http://localhost:8080/api/settings';

  constructor(private http: HttpClient) { }

  getSettings(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  saveSettings(settings: any): Observable<any> {
    return this.http.put<any>(this.apiUrl, settings);
  }
}
