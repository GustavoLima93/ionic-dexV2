import { Component, OnInit } from '@angular/core';

import { Pokemon } from 'src/app/models/pokemon.model';

import { PokedexService } from 'src/app/services/pokedex.service';


@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.scss'],
})
export class PokedexPage implements OnInit {

  constructor() { }

  ngOnInit() {}

}
