import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemComponentComponent } from './item-component/item-component.component';
import { NamingPipe } from './naming.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponentComponent,
    NamingPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
