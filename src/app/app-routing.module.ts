import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateGameComponent } from './components/create-game/create-game.component';
import { DeleteComponent } from './components/delete/delete.component';
import { ListGamesComponent } from './components/list-games/list-games.component';
import { UpdateGameComponent } from './components/update-game/update-game.component';

const routes: Routes = [
  { path: 'games', component: ListGamesComponent },
  { path: 'games/create', component: CreateGameComponent },
  { path: 'games/update/:id', component: UpdateGameComponent },
  { path: 'games/delete/:id', component: DeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
