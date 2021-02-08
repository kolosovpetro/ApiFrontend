import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatchMovieComponent } from './patch-movie.component';

describe('PatchMovieComponent', () => {
  let component: PatchMovieComponent;
  let fixture: ComponentFixture<PatchMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatchMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatchMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
