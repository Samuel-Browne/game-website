import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GiantBombService {
  constructor(private http: HttpClient) {}

  getGameData(): Observable<any> {
    const url = 'http://localhost:3000/api/games';
    return this.http.get<any>(url);
  }

  getNintendoDsGamesData(pageNumber: string): Observable<any> {
    const url = 'http://localhost:3000/api/nintendoDsGames';
    return this.http.post<any>(url, { pageNumber });
  }

  getGameDatabyGuid(guid: string): Observable<any> {
    const url = 'http://localhost:3000/api/game';
    return this.http.post<any>(url, { guid });
  }
}
