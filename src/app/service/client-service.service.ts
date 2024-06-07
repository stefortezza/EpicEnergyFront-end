import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Client } from '../interface/client-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  private apiUrl = 'http://localhost:8080/api/clients';

  constructor(private http: HttpClient,private authService: AuthService) { }

  saveClient(client: Client): Observable<string> {
    return this.http.post(this.apiUrl, client, { responseType: 'text' }) as Observable<string>;
  }
}
