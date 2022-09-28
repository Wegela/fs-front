import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ResetCounterComponent } from './reset-counter/reset-counter.component';
import { RandomCounterComponent } from './random-counter/random-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ResetCounterComponent,
    RandomCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
