import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { BookAuthorFeedComponent } from './book-author-feed/book-author-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    BookAuthorFeedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
