import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TwoFeatureOneComponent} from './two-feature-one.component';
import {TfoComp1Component} from './tfo-comp1/tfo-comp1.component';
import {TfoComp2Component} from './tfo-comp2/tfo-comp2.component';

const routes: Routes = [
  {path: '', component: TwoFeatureOneComponent, children: [
    {path: 'comp-5', component: TfoComp1Component},
    {path: 'comp-6', component: TfoComp2Component},
    {path: '**', redirectTo: 'comp-5'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TwoFeatureOneRoutingModule { }
