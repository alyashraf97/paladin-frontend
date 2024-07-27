import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

interface AuthResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth';
  private tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, { username, password })
      .pipe(
        tap(response => {
          this.tokenSubject.next(response.token);
          localStorage.setItem('authToken', response.token);
        })
      );
  }  

  logout(): void {
    this.tokenSubject.next('');
    localStorage.removeItem('authToken');
  }

  getToken(): string {
    return this.tokenSubject.value;
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  private getAuthHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.getToken()}`
    });
  }

  // Example of an authenticated API call
  getProtectedResource(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/protected`, { headers: this.getAuthHeaders() });
  }
}
