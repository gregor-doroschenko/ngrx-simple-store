import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { counterReducer } from './store/reducer/counter.reducer';
import { CounterComponent } from './container/counter/counter.component';
import { CounterViewComponent } from './components/counter-view/counter-view.component';
import { TypedCounterComponent } from './container/typed-counter/typed-counter.component';
import { typedCounterReducer } from './store/reducer/typed-counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterViewComponent,
    TypedCounterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ count: counterReducer, typedCount: typedCounterReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
