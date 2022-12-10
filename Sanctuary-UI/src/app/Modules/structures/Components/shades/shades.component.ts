import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shades',
  templateUrl: './shades.component.html',
  styleUrls: ['./shades.component.css']
})
export class ShadesComponent implements OnInit {

  constructor(private router : Router) { }

  goBack() {
    this.router.navigate(['structures'])
  }

  ngOnInit(): void {
  }

}
