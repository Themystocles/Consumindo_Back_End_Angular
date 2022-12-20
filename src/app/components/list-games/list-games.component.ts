import { Component, OnInit } from '@angular/core';
import { games } from 'src/app/models/gamesModel';
import { GameServerService } from 'src/app/server/game-server.service';


@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrls: ['./list-games.component.scss']
})
export class ListGamesComponent implements OnInit {

  listGames!: games[]



  constructor(private services: GameServerService) { }

  ngOnInit(): void {
    this.getGames()
  }
  getGames() {
    this.services.getGames().subscribe(res => this.listGames = res)
  }



}
