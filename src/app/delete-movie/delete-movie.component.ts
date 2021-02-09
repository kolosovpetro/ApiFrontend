import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {Movies} from '../models/movies';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.css']
})
export class DeleteMovieComponent implements OnInit {
  deleteId: string;
  currentDto: Movies;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.deleteId = this.route.snapshot.paramMap.get('id');
  }

}
