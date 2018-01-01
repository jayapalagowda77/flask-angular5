import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxPracticeComponent } from './rxpractice.component';
import { BrowserEventComponent } from './non-rx/browser-event/browser-event.component';
import { RxPracticeRoutingModule } from './rxpractice.routing.module';
import { ObserverPatternModule } from './non-rx/observer-pattern/observer-pattern.module';

@NgModule({
  imports: [
    CommonModule,
    RxPracticeRoutingModule,
    ObserverPatternModule
  ],
  declarations: [BrowserEventComponent, RxPracticeComponent]
})
export class RxpracticeModule { }
