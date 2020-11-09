import { Component, OnInit } from '@angular/core';
import { TvShow } from 'src/app/shared/models/Models';
import { APIsService } from 'src/app/shared/services/apis.service';
import { ToastrService } from 'src/app/shared/services/toastr.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrls: ['./shows-list.component.scss']
})
export class ShowsListComponent implements OnInit {

  tVShowsList: TvShow[] = [];
  tvShowsFavoriteList: TvShow[] = [];

  constructor(private _apisService: APIsService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getTvShowsSortedByTopRating();
    this.getFavoriteList();
  }

  // get tc shows list sorted by top rating
  getTvShowsSortedByTopRating() {
    this._apisService.get('/tv/top_rated').subscribe(result => {
      this.tVShowsList = result.results;
    },
      error => {
        this.toastr.showToast('danger', error.error.status_message, '');
      });
  }

  // get user favorite list
  getFavoriteList() {
    this._apisService.get(`/account/${environment.accountId}/favorite/tv`).subscribe(result => {
      this.tvShowsFavoriteList = result.results;
    },
      error => {
        this.toastr.showToast('danger', error.error.status_message, '');
      });
  }
}
