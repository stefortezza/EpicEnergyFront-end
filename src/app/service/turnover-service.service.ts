import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fattura } from '../interface/fattura.interface';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TurnoverServiceService {

  private apiUrl = 'http://localhost:8080/api/turnovers';

  constructor(private http: HttpClient,private authService: AuthService) { }

  saveTurnover(turnover: Fattura): Observable<string> {
    return this.http.post(this.apiUrl, turnover, { responseType: 'text' }) as Observable<string>;
  }
  
  
}
