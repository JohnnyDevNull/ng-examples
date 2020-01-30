import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OneFeatureTwoComponent} from './one-feature-two.component';
import {OtoComp1Component} from './oto-comp1/oto-comp1.component';
import {OtoComp2Component} from './oto-comp2/oto-comp2.component';

const routes: Routes = [
  {path: '', component: OneFeatureTwoComponent, children: [
    {path: 'comp-3', component: OtoComp1Component},
    {path: 'comp-4', component: OtoComp2Component},
    {path: '**', redirectTo: 'comp-3'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OneFeatureTwoRoutingModule { }
