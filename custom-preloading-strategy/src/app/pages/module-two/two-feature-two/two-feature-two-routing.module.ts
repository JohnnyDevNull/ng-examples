import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TwoFeatureTwoComponent} from './two-feature-two.component';
import {TftComp1Component} from './tft-comp1/tft-comp1.component';
import {TftComp2Component} from './tft-comp2/tft-comp2.component';

const routes: Routes = [
  {path: '', component: TwoFeatureTwoComponent, children: [
    {path: 'comp-7', component: TftComp1Component},
    {path: 'comp-8', component: TftComp2Component},
    {path: '**', redirectTo: 'comp-7'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TwoFeatureTwoRoutingModule { }
