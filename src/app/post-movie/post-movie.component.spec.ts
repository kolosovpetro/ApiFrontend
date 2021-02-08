import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostMovieComponent } from './post-movie.component';

describe('PostMovieComponent', () => {
  let component: PostMovieComponent;
  let fixture: ComponentFixture<PostMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
