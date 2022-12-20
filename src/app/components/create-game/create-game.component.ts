import { Component, OnInit } from '@angular/core';
import { games } from 'src/app/models/gamesModel';
import { GameServerService } from 'src/app/server/game-server.service';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent implements OnInit {

  game: games = {
    id: 0,
    name: '',
    type: ''
  }

  constructor(private service: GameServerService) { }

  ngOnInit(): void {
  }

  create() {
    this.service.createGames(this.game).subscribe(res => alert(`game ${this.game.name} Criado com sucesso!!!`))
  }
}
