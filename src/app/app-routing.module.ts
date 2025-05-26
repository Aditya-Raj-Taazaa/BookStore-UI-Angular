import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorlistComponent } from './authorlist/authorlist.component';
import { LibraryComponent } from './library/library.component';

const routes: Routes = [
  { path: 'authors', component: AuthorlistComponent },
  { path: 'books', component: LibraryComponent },
  { path: '', redirectTo: '/books', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }