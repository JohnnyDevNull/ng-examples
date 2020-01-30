import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {AppPreloadingStrategy} from './services/app-preloading.strategy';

const routes: Routes = [
  {path: '', component: MainComponent, children: [
    {path: 'module-1', loadChildren: () => import('./pages/module-one/module-one.module').then(m => m.ModuleOneModule)},
    {path: 'module-2', loadChildren: () => import('./pages/module-two/module-two.module').then(m => m.ModuleTwoModule),
      data: { preload: true, delay: false }},
    {path: '**', redirectTo: 'module-1'}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: AppPreloadingStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
