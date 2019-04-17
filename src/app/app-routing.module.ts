import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'pokedex/1', pathMatch: 'full' },
  {
    path: 'pokedex',
    children: [
      { path: '', loadChildren: './pages/pokedex/pokedex.module#PokedexPageModule' },
      { path: ':id',
        children: [
          { path: '', loadChildren: './pages/pokemons-generation/pokemons-generation.module#PokemonsGenerationPageModule' },
          { path: 'details/:id', loadChildren: './pages/pokemon-detail/pokemon-detail.module#PokemonDetailPageModule' }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
