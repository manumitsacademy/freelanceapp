import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-starcard',
  templateUrl: './starcard.component.html',
  styleUrls: ['./starcard.component.css']
})
export class StarcardComponent implements OnInit {

  constructor() { }
  @Input() star;
  ngOnInit() {
    console.log(this.star)
  }

}
