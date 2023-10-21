import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GiantBombService } from 'src/modules/shared/services/giantbombservice';
import { PokemonService } from 'src/modules/shared/services/pokemon.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  guid: string;

  gameData: any;

  screenshots: string[] = [];
  gameRating: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private giantBombService: GiantBombService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };

    this.guid = this.activatedRoute.snapshot.params['id'];

    this.giantBombService.getGameDatabyGuid(this.guid).subscribe((data) => {
      this.gameData = data.results;

      for (let item of this.gameData.images) {
        if (item.tags.includes('Screenshots')) {
          this.screenshots.push(item.original);
        }
      }

      for (let item of this.gameData.original_game_rating) {
        if (item.name.includes('ESRB')) {
          this.gameRating = item.name;
        }
      }
    });
  }
}
