import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NonRxModule } from './non-rx/non-rx-practice.module';
import { WithRxPracticeModule } from './with-rx/with-rx-practice.module';

@NgModule({
  imports: [
    CommonModule,
    NonRxModule,
    WithRxPracticeModule
  ],
  declarations: []
})
export class RxpracticeModule { }
