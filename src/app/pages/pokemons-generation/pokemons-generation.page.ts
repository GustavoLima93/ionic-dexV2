import { Component, OnInit } from '@angular/core';

import { Pokemon } from 'src/app/models/pokemon.model';

import { PokedexService } from 'src/app/services/pokedex.service';


@Component({
  selector: 'app-pokemons-generation',
  templateUrl: './pokemons-generation.page.html',
  styleUrls: ['./pokemons-generation.page.scss'],
})
export class PokemonsGenerationPage implements OnInit {

  public pokemons: Pokemon[];

  constructor(
    private pokedexService: PokedexService
  ) { }

  ngOnInit() {
    this.getAllPokemons();
  }

  getAllPokemons() {
    this.pokedexService.allPokemons().subscribe((pokemons: Pokemon[]) => {
      this.pokemons = pokemons;
     });
  }


}
