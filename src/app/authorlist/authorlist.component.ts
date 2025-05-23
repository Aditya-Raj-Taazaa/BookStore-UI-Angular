import { Component } from '@angular/core';

@Component({
  selector: 'app-authorlist',
  templateUrl: './authorlist.component.html',
  styleUrls: ['./authorlist.component.css']
})
export class AuthorlistComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

}
