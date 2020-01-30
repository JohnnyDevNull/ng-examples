import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ModuleOneComponent} from './module-one.component';

const routes: Routes = [
  {path: '', component: ModuleOneComponent, children: [
    {path: 'feature-1', loadChildren: () => import('./one-feature-one/one-feature-one.module').then(m => m.OneFeatureOneModule)},
    {path: 'feature-2', loadChildren: () => import('./one-feature-two/one-feature-two.module').then(m => m.OneFeatureTwoModule)},
    {path: '**', redirectTo: 'feature-1'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleOneRoutingModule { }
