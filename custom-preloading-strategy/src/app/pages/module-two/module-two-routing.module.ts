import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ModuleTwoComponent} from './module-two.component';

const routes: Routes = [
  {path: '', component: ModuleTwoComponent, children: [
    {path: 'feature-3', loadChildren: () => import('./two-feature-one/two-feature-one.module').then(m => m.TwoFeatureOneModule)},
    {path: 'feature-4', loadChildren: () => import('./two-feature-two/two-feature-two.module').then(m => m.TwoFeatureTwoModule),
      data: { preload: true, delay: false }
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleTwoRoutingModule { }
