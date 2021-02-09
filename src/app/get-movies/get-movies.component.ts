import {Component, OnInit} from '@angular/core';
import {Movies} from '../models/movies';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-get-movies',
  templateUrl: './get-movies.component.html',
  styleUrls: ['./get-movies.component.css']
})
export class GetMoviesComponent implements OnInit {
  moviesList: Movies[];

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getMoviesList().subscribe((data: Movies[]) => {
      this.moviesList = data;
    });
  }
}
