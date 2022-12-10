import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-writtings',
  templateUrl: './writtings.component.html',
  styleUrls: ['./writtings.component.css']
})
export class WrittingsComponent implements OnInit {

  constructor(private router : Router) { }

  goBack() {
    this.router.navigate(['structures'])
  }

  ngOnInit(): void {
  }

}
