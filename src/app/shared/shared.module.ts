import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HeaderComponent } from './components/header/header.component';
import { NebularModule } from './components/modules/nebular.module';
import { RatingComponent } from './components/rating/rating.component';

@NgModule({
  declarations: [
    HeaderComponent,
    RatingComponent
  ],
  imports: [
    NebularModule,
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      // set defaults here
      outerStrokeWidth: 16,
      outerStrokeColor: "#78C000",
      animationDuration: 300,
    }),
    RouterModule
  ],
  exports: [
    HeaderComponent,
    NebularModule,
    NgCircleProgressModule,
    RatingComponent
  ]
})
export class SharedModule { }
