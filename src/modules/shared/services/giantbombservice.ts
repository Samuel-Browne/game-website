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

  getNintendoDsGamesData(): Observable<any> {
    const url = 'http://localhost:3000/api/nintendoDsGames';
    return this.http.get<any>(url);
  }
}
