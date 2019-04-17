import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { IonicModule } from '@ionic/angular';

import { PokemonDetailPage } from './pokemon-detail.page';
import { PowerPokemonComponent } from './power-pokemon/power-pokemon.component';


const routes: Routes = [
  {
    path: '',
    component: PokemonDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxChartsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    PokemonDetailPage,
    PowerPokemonComponent
  ]
})
export class PokemonDetailPageModule {}
