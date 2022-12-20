import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { games } from '../models/gamesModel';

@Injectable({
  providedIn: 'root'
})
export class GameServerService {

  url = "http://localhost:3000/games"
  constructor(private http: HttpClient) { }

  // Listar jogos
  getGames(): Observable<games[]> {
    return this.http.get<games[]>(this.url)
  }

  // Criar jogos

  createGames(create: games): Observable<games> {
    return this.http.post<games>(this.url, create)
  }
}
