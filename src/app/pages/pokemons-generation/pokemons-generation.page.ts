import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
    private pokedexService: PokedexService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getByGenerate();
  }

  getByGenerate() {
    this.activatedRoute.paramMap.subscribe(id => {
      if (!id.has('id')) {
        return this.router.navigate(['/pokedex']);
      }
      this.pokedexService.getByGeneration(id.get('id')).subscribe((pokemons: Pokemon[]) => {
        this.pokemons = pokemons;
      });
    });
  }


}
