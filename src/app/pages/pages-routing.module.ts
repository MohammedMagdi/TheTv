import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ShowsListComponent } from './shows-list/shows-list.component';
import { ShowDetailsComponent } from './show-details/show-details.component';

const routes: Routes = [
  {
    path: 'shows',
    component: ShowsListComponent,
  },
  {
    path: 'shows/:id',
    component: ShowDetailsComponent,
  },
  {
    path: '',
    redirectTo: 'shows',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
