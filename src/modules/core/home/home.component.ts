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
  pageNumber: string = '2';

  constructor(
    private giantBombService: GiantBombService,
    private router: Router
  ) {
    this.giantBombService.getGameData().subscribe((data) => {
      this.data = data.results;
      console.log(this.data);
      console.log(data.results.length);
    });

    this.giantBombService
      .getNintendoDsGamesData(this.pageNumber)
      .subscribe((data) => {
        this.nintendoDsGames = data.results;
        console.log(this.data);
      });
  }

  onPaginateForward() {
    this.pageNumber = String(Number(this.pageNumber) + 1);
    this.giantBombService.getGameData().subscribe((data) => {
      this.data = data.results;
      console.log(this.data);
      console.log(data.results.length);
    });

    this.giantBombService
      .getNintendoDsGamesData(this.pageNumber)
      .subscribe((data) => {
        this.nintendoDsGames = data.results;
        console.log(this.data);
      });
  }

  onPaginateBackward() {
    this.pageNumber = String(Number(this.pageNumber) - 1);
    this.giantBombService.getGameData().subscribe((data) => {
      this.data = data.results;
      console.log(this.data);
      console.log(data.results.length);
    });

    this.giantBombService
      .getNintendoDsGamesData(this.pageNumber)
      .subscribe((data) => {
        this.nintendoDsGames = data.results;
        console.log(this.data);
      });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
