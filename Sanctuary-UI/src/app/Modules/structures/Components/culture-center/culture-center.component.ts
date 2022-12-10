import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-culture-center',
  templateUrl: './culture-center.component.html',
  styleUrls: ['./culture-center.component.css']
})
export class CultureCenterComponent implements OnInit {

  constructor(private router : Router) { }

  goBack() {
    this.router.navigate(['/structures']);
  };

  ngOnInit(): void {
  }

}
