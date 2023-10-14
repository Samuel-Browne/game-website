import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GiantBombService {
  private apiKey = '5830cac61d28c99b6f8810d6624ca7fd0351bfb6';
  private apiUrl = 'https://www.giantbomb.com/api/';

  constructor(private http: HttpClient) {}

  getGameData(gameId: string): Observable<any> {
    const url = `${this.apiUrl}game/${gameId}/?api_key=${this.apiKey}&format=json`;
    return this.http.get<any>(url);
  }
}
