import { Component, OnInit, Input } from '@angular/core';

import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {

  @Input() pokemon: Pokemon;

  constructor() { }

  ngOnInit() {}

}
