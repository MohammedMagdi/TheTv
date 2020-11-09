import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'show-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input() rating: number;
  @Input() itemId: number;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(rating: number): void {
    this.rating = rating;
    this.ratingClick.emit({
      rating: rating
    });
  }

}
