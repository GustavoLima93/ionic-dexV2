import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private rota: BehaviorSubject<string> = new BehaviorSubject('0');
  public activetedRoute: Observable<any> = this.rota.asObservable();

  constructor(
    private db: AngularFireDatabase
  ) { }

  setRota(rota: string) {
    return this.rota.next(rota);
  }

  allPokemons() {
    return this.db.list('/pokemons').valueChanges();
  }

  getByGeneration(generation: string) {
    switch (generation) {
      case '1':
        return this.db.list(`/pokemons`, (ref: any) => ref.orderByKey().startAt('1').endAt('151')).valueChanges();
      case '2':
        return this.db.list(`/pokemons`, (ref: any) => ref.orderByKey().startAt('152').endAt('251')).valueChanges();
      case '3':
        return this.db.list(`/pokemons`, (ref: any) => ref.orderByKey().startAt('252').endAt('386')).valueChanges();
      case '4':
        return this.db.list(`/pokemons`, (ref: any) => ref.orderByKey().startAt('387').endAt('493')).valueChanges();
      case '5':
        return this.db.list(`/pokemons`, (ref: any) => ref.orderByKey().startAt('494').endAt('649')).valueChanges();
      case '6':
        return this.db.list(`/pokemons`, (ref: any) => ref.orderByKey().startAt('650').endAt('721')).valueChanges();
      case '7':
        return this.db.list(`/pokemons`, (ref: any) => ref.orderByKey().startAt('722').endAt('807')).valueChanges();
    }
  }

  byId(id: string) {
    return this.db.list(`/pokemons`, (ref: any) => ref.orderByKey().equalTo(id)).valueChanges();
  }
}
