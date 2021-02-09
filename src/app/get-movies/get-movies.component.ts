import {Component, OnInit} from '@angular/core';
import {Movies} from '../models/movies';

@Component({
  selector: 'app-get-movies',
  templateUrl: './get-movies.component.html',
  styleUrls: ['./get-movies.component.css']
})
export class GetMoviesComponent implements OnInit {
  moviesList: Movies[] = [
    new Movies(1, 'Lord of the rings', 2003, 12, 10.2),
    new Movies(2, 'Shrek', 2005, 6, 12),
    new Movies(3, 'King Kong', 2002, 12, 14),
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  addNewMovie(): void {
    this.moviesList.push(new Movies(this.moviesList.length + 1, 'King Kong', 2002, 12, 14));
  }

  popMovie(): void {
    this.moviesList.pop();
  }

}
