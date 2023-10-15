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
    });
  }
}
