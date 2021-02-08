import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMoviesComponent } from './get-movies.component';

describe('GetMoviesComponent', () => {
  let component: GetMoviesComponent;
  let fixture: ComponentFixture<GetMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
