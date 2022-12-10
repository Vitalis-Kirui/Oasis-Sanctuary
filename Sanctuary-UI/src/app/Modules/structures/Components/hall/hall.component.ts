import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.css']
})
export class HallComponent implements OnInit {

  constructor(private router : Router) { }

  goBack() {
    this.router.navigate(['/structures']);
  };

  ngOnInit(): void {
  }

}
