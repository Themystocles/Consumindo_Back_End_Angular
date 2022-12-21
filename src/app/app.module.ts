import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListGamesComponent } from './components/list-games/list-games.component';
import { CreateGameComponent } from './components/create-game/create-game.component';
import { UpdateGameComponent } from './components/update-game/update-game.component';
import { DeleteComponent } from './components/delete/delete.component';


@NgModule({
  declarations: [
    AppComponent,
    ListGamesComponent,
    CreateGameComponent,
    UpdateGameComponent,
    DeleteComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
