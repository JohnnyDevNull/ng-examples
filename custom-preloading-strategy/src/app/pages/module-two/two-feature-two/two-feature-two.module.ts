import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TwoFeatureTwoRoutingModule} from './two-feature-two-routing.module';
import {TwoFeatureTwoComponent} from './two-feature-two.component';
import {TftComp1Component} from './tft-comp1/tft-comp1.component';
import {TftComp2Component} from './tft-comp2/tft-comp2.component';
import {TabsModule} from '../../../components/tabs/tabs.component';

@NgModule({
  declarations: [
    TftComp1Component,
    TftComp2Component,
    TwoFeatureTwoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TabsModule,
    TwoFeatureTwoRoutingModule
  ]
})
export class TwoFeatureTwoModule { }
