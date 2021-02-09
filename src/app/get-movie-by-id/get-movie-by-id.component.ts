import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../api.service';
import {Movies} from '../models/movies';

@Component({
  selector: 'app-get-movie-by-id',
  templateUrl: './get-movie-by-id.component.html',
  styleUrls: ['./get-movie-by-id.component.css']
})
export class GetMovieByIdComponent implements OnInit {
  id: string;
  currentDto: Movies;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.apiService.getMovieById(this.id).subscribe((data: Movies) => {
      this.currentDto = data;
    });
  }

}
