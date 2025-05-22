import { Component, Input } from '@angular/core';
import { Ibook } from '../library/book.model';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent {
  @Input() book!: Ibook;
}