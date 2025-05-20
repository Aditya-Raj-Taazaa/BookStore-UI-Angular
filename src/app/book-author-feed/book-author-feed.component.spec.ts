import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAuthorFeedComponent } from './book-author-feed.component';

describe('BookAuthorFeedComponent', () => {
  let component: BookAuthorFeedComponent;
  let fixture: ComponentFixture<BookAuthorFeedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookAuthorFeedComponent]
    });
    fixture = TestBed.createComponent(BookAuthorFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
