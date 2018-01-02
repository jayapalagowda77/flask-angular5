import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxPracticeComponent } from './rxpractice.component';
import { BrowserEventComponent } from './non-rx/browser-event/browser-event.component';
import { RxPracticeRoutingModule } from './rxpractice.routing.module';
import { ObserverPatternModule } from './non-rx/observer-pattern/observer-pattern.module';
import { ObservablePatternModule } from './non-rx/observable-pattern/observable-pattern.module';

@NgModule({
  imports: [
    CommonModule,
    RxPracticeRoutingModule,
    ObserverPatternModule,
    ObservablePatternModule
  ],
  declarations: [BrowserEventComponent, RxPracticeComponent]
})
export class RxpracticeModule { }
