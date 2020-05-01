import { Component, OnInit } from '@angular/core';
import { StarService } from '../star.service';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  constructor(public starService:StarService) { }
  stars;
  ngOnInit() {
    this.starService.getUsers().subscribe((res)=>{this.stars=res})
  }

}
