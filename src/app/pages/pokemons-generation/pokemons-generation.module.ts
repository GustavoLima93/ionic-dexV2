import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { IonicModule } from '@ionic/angular';

import { FilterPipeModule } from 'ngx-filter-pipe';

import { PokemonsGenerationPage } from './pokemons-generation.page';
import { PokemonComponent } from './pokemon/pokemon.component';


const routes: Routes = [
  {
    path: '',
    component: PokemonsGenerationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    FilterPipeModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    PokemonsGenerationPage,
    PokemonComponent
  ]
})
export class PokemonsGenerationPageModule {}
