import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {Movies} from '../models/movies';
import {ActivatedRoute, Router} from '@angular/router';
import {IPatchResponse} from '../models/patch-response';

@Component({
  selector: 'app-patch-movie',
  templateUrl: './patch-movie.component.html',
  styleUrls: ['./patch-movie.component.css']
})
export class PatchMovieComponent implements OnInit {
  id: string;
  currentDto: Movies;
  response: IPatchResponse;
  display = 'none';

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.apiService.getMovieById(this.id).subscribe((data: Movies) => {
      this.currentDto = data;
    });
  }

  patchMovie(): void {
    this.apiService.patchMovie(this.currentDto).subscribe((resp: IPatchResponse) => {
      this.response = resp;
      this.display = 'block';
    });
  }
}
