import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './components/main/main.component';

const routes: Routes = [
  {path: '', component: MainComponent, children: [
    {path: 'module-1', loadChildren: () => import('./pages/module-one/module-one.module').then(m => m.ModuleOneModule)},
    {path: 'module-2', loadChildren: () => import('./pages/module-two/module-two.module').then(m => m.ModuleTwoModule)},
    {path: '**', redirectTo: 'module-1'}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
