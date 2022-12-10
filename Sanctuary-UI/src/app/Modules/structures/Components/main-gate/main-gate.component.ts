import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-gate',
  templateUrl: './main-gate.component.html',
  styleUrls: ['./main-gate.component.css']
})
export class MainGateComponent implements OnInit {

  constructor(private router : Router) { }

  goBack(){
    this.router.navigate(['structures']);
  }

  ngOnInit(): void {
  }

}
