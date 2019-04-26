import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { Pokemon } from 'src/app/models/pokemon.model';

import { PokedexService } from 'src/app/services/pokedex.service';



@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.page.html',
  styleUrls: ['./pokemon-detail.page.scss'],
})
export class PokemonDetailPage implements OnInit {

  public pokemon: Pokemon;
  public return: string;

  constructor(
    private pokedexService: PokedexService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getPokemonById();
  }

  getPokemonById() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('id')) {
        return this.router.navigate(['/pokedex']);
      }
      this.pokedexService.activetedRoute.subscribe(param => this.return = param);
      this.pokedexService.byId(paramMap.get('id')).subscribe((pokemon: Pokemon[]) => {
        this.pokemon = pokemon[0];
      });
    });
  }

  returnPage() {
    this.router.navigate(['/pokedex/list', this.return]);
  }

}
