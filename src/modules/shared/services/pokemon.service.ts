import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) { }

  getPokemonData(pokedexNumber: number): Observable<any>{
    return this.httpClient.get("https://pokeapi.co/api/v2/pokemon/" + pokedexNumber);
  }

  getPokemonSpeciesData(pokedexNumber: number): Observable<any>{
    return this.httpClient.get("https://pokeapi.co/api/v2/pokemon-species/" + pokedexNumber);
  }

}
