import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {OneFeatureTwoRoutingModule} from './one-feature-two-routing.module';
import {OneFeatureTwoComponent} from './one-feature-two.component';
import {OtoComp1Component} from './oto-comp1/oto-comp1.component';
import {OtoComp2Component} from './oto-comp2/oto-comp2.component';
import {TabsModule} from '../../../components/tabs/tabs.component';

@NgModule({
  declarations: [
    OneFeatureTwoComponent,
    OtoComp1Component,
    OtoComp2Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    TabsModule,
    OneFeatureTwoRoutingModule
  ]
})
export class OneFeatureTwoModule { }
