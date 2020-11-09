import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TvShow, TvShowDetails } from 'src/app/shared/models/Models';
import { APIsService } from 'src/app/shared/services/apis.service';
import { ToastrService } from 'src/app/shared/services/toastr.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit {

  tvShowDetails: TvShowDetails = new TvShowDetails();
  imageBaseURL = 'https://image.tmdb.org/t/p/';
  currentRate = 0;
  tvRecommendedList: TvShow[] = [];
  showFavoriteStatus: string = '';

  constructor(private route: ActivatedRoute, private _apisService: APIsService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get("id")
      this.getTvShowDetails(id);
    });
  }

  // get tv show details
  getTvShowDetails(id) {
    this._apisService.get(`/tv/${id}`).subscribe(result => {
      this.tvShowDetails = result;

      this.getRecommendedShowList();
    },
      error => {
        this.toastr.showToast('danger', error.error.status_message, '');
      });
  }

  // return array of show genrs names
  getShowGenrs() {
    let result = [];
    this.tvShowDetails.genres.forEach(element => {
      result.push(element.name);
    });

    return result;
  }

  // rate show click
  ratingComponentClick(ratingObject: any): void {
    this.currentRate = ratingObject.rating;
    this._apisService.post(`/tv/${this.tvShowDetails.id}/rating`, { value: this.currentRate }).subscribe(result => {

    },
      error => {
        this.toastr.showToast('danger', error.error.status_message, '');
      });
  }

  // get list of recommended
  getRecommendedShowList() {
    this._apisService.get(`/tv/${this.tvShowDetails.id}/recommendations`).subscribe(result => {
      this.tvRecommendedList = result.results;
    },
      error => {
        this.toastr.showToast('danger', error, '');
      });
  }

  // toggle favorite button
  toggleFavorite() {
    if (this.showFavoriteStatus === '') {
      this.showFavoriteStatus = 'danger';

      let request = {
        media_type: "tv_show",
        tv_show_id: this.tvShowDetails.id,
        favorite: true
      }

      this._apisService.post(`/account/${environment.accountId}/favorite/tv`, request).subscribe(result => {

      },
        error => {
          this.toastr.showToast('danger', error.error.status_message, '');
        });

    }

    else
      this.showFavoriteStatus = '';
  }
}
