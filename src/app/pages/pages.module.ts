import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShowCardComponent } from '../shared/components/show-card/show-card.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ShowsListComponent } from './shows-list/shows-list.component';
import { ShowDetailsComponent } from './show-details/show-details.component';

@NgModule({
  declarations: [
    PagesComponent,
    ShowsListComponent,
    ShowCardComponent,
    ShowDetailsComponent
  ],
  imports: [
    PagesRoutingModule,
    SharedModule,
    CommonModule
  ]
})
export class PagesModule {
}
