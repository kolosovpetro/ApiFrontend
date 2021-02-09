import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {PostMovieDto} from '../dto/post-movie-dto';

@Component({
  selector: 'app-post-movie',
  templateUrl: './post-movie.component.html',
  styleUrls: ['./post-movie.component.css']
})
export class PostMovieComponent implements OnInit {
  currentDto: PostMovieDto;
  response: any;

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.currentDto = new PostMovieDto('Star Wars 7', 2010, 12, 12.2);
  }

  postMovie(): void {
    this.apiService.postMovie(this.currentDto).subscribe((data: any) => {
      this.response = data;
    });
  }
}
