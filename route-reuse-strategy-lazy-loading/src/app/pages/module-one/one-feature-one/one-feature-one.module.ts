import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {OneFeatureOneRoutingModule} from './one-feature-one-routing.module';
import {OneFeatureOneComponent} from './one-feature-one.component';
import {OfoComp1Component} from './ofo-comp1/ofo-comp1.component';
import {OfoComp2Component} from './ofo-comp2/ofo-comp2.component';
import {TabsModule} from '../../../components/tabs/tabs.component';

@NgModule({
  declarations: [
    OneFeatureOneComponent,
    OfoComp1Component,
    OfoComp2Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    OneFeatureOneRoutingModule,
    TabsModule
  ]
})
export class OneFeatureOneModule { }
