import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-structures',
  templateUrl: './structures.component.html',
  styleUrls: ['./structures.component.css']
})
export class StructuresComponent implements OnInit {

    //shades function
  goShades() {
    this.router.navigate(['structures/shades'])
  }

  // Hall navigation function
  goHall() {
    this.router.navigate(['structures/hall'])
  }

  // Culture centre function
  goCulture() {
    this.router.navigate(['structures/culture-center'])
  }

  // Main gate function
  goGate() {
    this.router.navigate(['structures/main-gate'])
  }

  //Accommondations function
  goAccommondations() {
    this.router.navigate(['structures/accommondations'])
  }

  // Writtings navigation function
  goWrittings() {
    this.router.navigate(['structures/writtings'])
  }

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

}
