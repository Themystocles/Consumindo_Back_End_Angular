import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { games } from 'src/app/models/gamesModel';
import { GameServerService } from 'src/app/server/game-server.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

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
  confirmação() {

  }

  delete() {
    this.server.delete(this.id).subscribe(res => { alert(`Game  ${this.game.name} foi Deletado  com sucesso!!!`) })
  }

}
// Completo