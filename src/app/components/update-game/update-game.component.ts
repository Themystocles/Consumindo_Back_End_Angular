import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { games, requestUpdate } from 'src/app/models/gamesModel';
import { GameServerService } from 'src/app/server/game-server.service';

@Component({
  selector: 'app-update-game',
  templateUrl: './update-game.component.html',
  styleUrls: ['./update-game.component.scss']
})
export class UpdateGameComponent implements OnInit {

  id!: string

  game!: games

  constructor(private route: ActivatedRoute, private server: GameServerService) { }

  ngOnInit(): void {
    this.getGame()
  }

  getGame() {
    this.id = String(this.route.snapshot.paramMap.get('id'))
    this.server.getGame(this.id).subscribe(res => this.game = {
      id: 9,
      name: `${res.name}`,
      type: `${res.type}`

    })

  }

  updategame() {

    this.server.updateGame(this.id, this.game!).subscribe(res => { alert(`Game  ${this.game.name} foi alterado com sucesso!!!`) })


  }



}
