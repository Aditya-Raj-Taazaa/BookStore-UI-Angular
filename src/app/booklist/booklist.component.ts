import { Component, Input } from '@angular/core';
import { Ibook } from '../library/book.model';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})

export class BooklistComponent {
  @Input() book!: Ibook;
}