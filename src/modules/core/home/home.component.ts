import { Component } from '@angular/core';
import { SubSink } from 'subsink';
import { PokemonService } from 'src/modules/shared/services/pokemon.service';
import { finalize, switchMap } from 'rxjs';
import { Router } from '@angular/router';
import { GiantBombService } from 'src/modules/shared/services/giantbombservice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private subs = new SubSink();

  data: any;

  nintendoDsGames: any;

  constructor(
    private giantBombService: GiantBombService,
    private router: Router
  ) {
    this.giantBombService.getGameData().subscribe((data) => {
      this.data = data.results;
      console.log(this.data);
    });

    this.giantBombService.getNintendoDsGamesData().subscribe((data) => {
      this.nintendoDsGames = data.results;
      console.log(this.data);
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
