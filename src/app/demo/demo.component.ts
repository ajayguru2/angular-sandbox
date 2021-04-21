import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  limit: number;
  isOKClicked: boolean;

  constructor() { }

  ngOnInit(): void {
    this.isOKClicked = false;
  }

  toggleClick = () => {
    this.isOKClicked = true;
  }
}
