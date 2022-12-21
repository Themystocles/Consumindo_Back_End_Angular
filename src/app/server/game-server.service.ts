import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { games, requestUpdate } from '../models/gamesModel';

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

  // Update de jogos

  getGame(id: string): Observable<games> {
    const urlID = `${this.url}/${id}`
    return this.http.get<games>(urlID)
  }

  updateGame(id: string, game: games): Observable<games> {
    const urlID = `${this.url}/${id}`
    return this.http.put<games>(urlID, game)

  }

  // delete

  delete(id: string): Observable<games> {
    const urlID = `${this.url}/${id}`
    return this.http.delete<games>(urlID)

  }



}

