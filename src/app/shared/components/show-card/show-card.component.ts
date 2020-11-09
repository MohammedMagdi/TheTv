import { Component, Input, OnInit } from '@angular/core';
import { NbMenuService } from '@nebular/theme';
import { TvShow } from '../../models/Models';
import { filter, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { APIsService } from '../../services/apis.service';
import { ToastrService } from '../../services/toastr.service';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.scss']
})
export class ShowCardComponent implements OnInit {

  imageBaseURL = 'https://image.tmdb.org/t/p/w150_and_h225_face';
  @Input() tvShow: TvShow;
  items = [];

  constructor(private nbMenuService: NbMenuService, private _apisService: APIsService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.items = [{ title: 'Add To Favorite' }];

    this.nbMenuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'my-context-menu'),
        map(({ item: { title } }) => title),
      )
      .subscribe(title => this.goToClickFunction(title));
  }


  goToClickFunction(title) {
    if (title == 'Add To Favorite') {
      let request = {
        media_type: "tv_show",
        tv_show_id: this.tvShow.id,
        favorite: true
      }

      this._apisService.post(`/account/${environment.accountId}/favorite/tv`, request).subscribe(result => {

      },
        error => {
          this.toastr.showToast('danger', error.error.status_message, '');
        });
    }
  }
}
