import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from 'src/modules/shared/services/pokemon.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  pokemon: any;
  species: any;
  id: number;
  genus: string = '';
  flavorText: string = '';
  nextPokemon: any;
  previousPokemon: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };

    this.id = Number(this.activatedRoute.snapshot.params['id']);

    this.pokemonService.getPokemonData(this.id).subscribe((data) => {
      this.pokemon = data;
      console.log(this.pokemon);
    });

    if (this.id !== 1) {
      this.pokemonService.getPokemonData(this.id - 1).subscribe((data) => {
        this.previousPokemon = data;
        console.log(this.pokemon);
      });
    }

    if (this.id !== 1017) {
      this.pokemonService.getPokemonData(this.id + 1).subscribe((data) => {
        this.nextPokemon = data;
        console.log(this.pokemon);
      });
    }

    this.pokemonService.getPokemonSpeciesData(this.id).subscribe((data) => {
      this.species = data;
      console.log(this.species);
      let ok: string =
        this.species.flavor_text_entries.length > 0
          ? this.species.flavor_text_entries[0].flavor_text
          : '';
      if (ok) {
        this.species.flavor_text_entries[0].flavor_text = ok.replace(
          /\f/g,
          ' '
        );
      }

      this.genus =
        this.species.genera.length > 0
          ? this.species.genera.find((c: any) => c.language.name === 'en').genus
          : '';

      this.flavorText =
        this.species.flavor_text_entries.length > 0
          ? this.species.flavor_text_entries.find(
              (c: any) => c.language.name === 'en'
            ).flavor_text
          : '';
    });
  }
  navigateForwards(event: Event) {
    if (this.id == 1017) {
      return;
    }
    this.id++;
    this.router.navigate(['' + this.id]);
  }

  navigateBackwards(event: Event) {
    if (this.id == 1) {
      return;
    }
    this.id--;
    this.router.navigate(['' + this.id]);
  }
  ngOnInit() {}

  getClassForType(type: string) {
    if (type === 'grass') {
      return 'grass-type';
    }
    if (type === 'water') {
      return 'water-type';
    }
    if (type === 'poison') {
      return 'poison-type';
    }
    if (type === 'fire') {
      return 'fire-type';
    }
    if (type === 'ghost') {
      return 'ghost-type';
    }
    if (type === 'rock') {
      return 'rock-type';
    }
    if (type === 'ground') {
      return 'ground-type';
    }
    if (type === 'fighting') {
      return 'fighting-type';
    }
    if (type === 'bug') {
      return 'bug-type';
    }
    if (type === 'normal') {
      return 'normal-type';
    }
    if (type === 'flying') {
      return 'flying-type';
    }
    if (type === 'ice') {
      return 'ice-type';
    }
    if (type === 'dragon') {
      return 'dragon-type';
    }
    if (type === 'fairy') {
      return 'fairy-type';
    }
    if (type === 'electric') {
      return 'electric-type';
    }
    if (type === 'flying') {
      return 'flying-type';
    }

    if (type === 'psychic') {
      return 'psychic-type';
    }

    if (type === 'rock') {
      return 'rock-type';
    }
    if (type === 'steel') {
      return 'steel-type';
    }
    if (type === 'dark') {
      return 'dark-type';
    }

    return 'grass-type';
  }
}
