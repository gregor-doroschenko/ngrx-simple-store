import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { counterReducer } from './store/reducer/counter.reducer';
import { CounterComponent } from './container/counter/counter.component';
import { CounterViewComponent } from './components/counter-view/counter-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterViewComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ count: counterReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
