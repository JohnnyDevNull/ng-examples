import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OneFeatureOneComponent} from './one-feature-one.component';
import {OfoComp1Component} from './ofo-comp1/ofo-comp1.component';
import {OfoComp2Component} from './ofo-comp2/ofo-comp2.component';

const routes: Routes = [
  {path: '', component: OneFeatureOneComponent, children: [
    {path: 'comp-1', component: OfoComp1Component, data: {reuse: true}},
    {path: 'comp-2', component: OfoComp2Component, data: {reuse: true}},
    {path: '**', redirectTo: 'comp-1'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OneFeatureOneRoutingModule { }
