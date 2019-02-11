import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { PublishersComponent } from './publishers/publishers.component';
import { ShopsComponent } from './shops/shops.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    PublishersComponent,
    ShopsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
