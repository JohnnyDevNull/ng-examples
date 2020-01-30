import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TwoFeatureOneRoutingModule} from './two-feature-one-routing.module';
import {TwoFeatureOneComponent} from './two-feature-one.component';
import {TfoComp1Component} from './tfo-comp1/tfo-comp1.component';
import {TfoComp2Component} from './tfo-comp2/tfo-comp2.component';
import {TabsModule} from '../../../components/tabs/tabs.component';

@NgModule({
  declarations: [
    TwoFeatureOneComponent,
    TfoComp1Component,
    TfoComp2Component,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TabsModule,
    TwoFeatureOneRoutingModule
  ]
})
export class TwoFeatureOneModule { }
