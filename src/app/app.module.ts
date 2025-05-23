import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { BooklistComponent } from './booklist/booklist.component';
import { LibraryComponent } from './library/library.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthorlistComponent } from './authorlist/authorlist.component';



@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    BooklistComponent,
    LibraryComponent,
    AuthorlistComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
