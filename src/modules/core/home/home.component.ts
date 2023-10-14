import { Component } from '@angular/core';
import { SubSink } from 'subsink';
import { PokemonService } from 'src/modules/shared/services/pokemon.service';
import { finalize, switchMap } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private subs = new SubSink();

  pictureUrl: string = '';

  
  firstGenPokemon: any[] = [];
  secondGenPokemon: any[]=[];
  thirdGenPokemon: any[] = [];
  fourthGenPokemon: any[] = [];
  fifthGenPokemon: any[] = [];
  sixthGenPokemon: any[] = [];
  seventhGenPokemon: any[] = [];
  eigthGenPokemon: any[] = [];
  ninthGenPokemon: any[] = [];


  constructor(private pokemonService: PokemonService, private router: Router) {

    for (let i = 1; i <= 151; i++) {
      this.subs.sink = this.pokemonService
        .getPokemonData(i)
        .pipe(finalize(()=>{          
        }))
        .subscribe((data) => {
          this.firstGenPokemon.push(data);
          this.firstGenPokemon = this.firstGenPokemon.sort((a,b) =>{
            return a.id - b.id
          });
        });
        
    }   

    for (let i = 152; i <= 251; i++) {
      this.subs.sink = this.pokemonService
        .getPokemonData(i)
        .subscribe((data) => {
          this.secondGenPokemon.push(data);
          this.secondGenPokemon = this.secondGenPokemon.sort((a,b) =>{
            return a.id - b.id
          });
        });
    }

    for (let i = 252; i <=386; i++) {
      this.subs.sink = this.pokemonService
        .getPokemonData(i)
        .subscribe((data) => {
          this.thirdGenPokemon.push(data);
          this.thirdGenPokemon = this.thirdGenPokemon.sort((a,b) =>{
            return a.id - b.id
          });
        });
    }

    for (let i = 387; i <= 494; i++) {
      this.subs.sink = this.pokemonService
        .getPokemonData(i)
        .subscribe((data) => {
          this.fourthGenPokemon.push(data);
          this.fourthGenPokemon = this.fourthGenPokemon.sort((a,b) =>{
            return a.id - b.id
          });
        });
    }

    for (let i = 495; i <= 649; i++) {
      this.subs.sink = this.pokemonService
        .getPokemonData(i)
        .subscribe((data) => {
          this.fifthGenPokemon.push(data);
          this.fifthGenPokemon = this.fifthGenPokemon.sort((a,b) =>{
            return a.id - b.id
          });
        });
    }

    for (let i = 650; i <= 721; i++) {
      this.subs.sink = this.pokemonService
        .getPokemonData(i)
        .subscribe((data) => {
          this.sixthGenPokemon.push(data);
          this.sixthGenPokemon = this.sixthGenPokemon.sort((a,b) =>{
            return a.id - b.id
          });
        });
    }

    for (let i = 722; i <= 809; i++) {
      this.subs.sink = this.pokemonService
        .getPokemonData(i)
        .subscribe((data) => {
          this.seventhGenPokemon.push(data);
          this.seventhGenPokemon = this.seventhGenPokemon.sort((a,b) =>{
            return a.id - b.id
          });
        });
    }
    for (let i = 810; i <= 905; i++) {
      this.subs.sink = this.pokemonService
        .getPokemonData(i)
        .subscribe((data) => {
          this.eigthGenPokemon.push(data);
          this.eigthGenPokemon = this.eigthGenPokemon.sort((a,b) =>{
            return a.id - b.id
          });
        });
    }

    for (let i = 906; i <= 1017; i++) {
      this.subs.sink = this.pokemonService
        .getPokemonData(i)
        .subscribe((data) => {
          this.ninthGenPokemon.push(data);
          this.ninthGenPokemon = this.ninthGenPokemon.sort((a,b) =>{
            return a.id - b.id
          });
        });
    }
  }


  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
