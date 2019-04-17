import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  allPokemons() {
    return this.db.list('/pokemons').valueChanges();
  }

  byId(id: string) {
    return this.db.list(`/pokemons`, (ref: any) => ref.orderByKey().equalTo(id)).valueChanges();
  }
}
