import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accommondations',
  templateUrl: './accommondations.component.html',
  styleUrls: ['./accommondations.component.css']
})
export class AccommondationsComponent implements OnInit {

  constructor(private router : Router) { }

  goBack(){
    this.router.navigate(['/structures']);
  }

  ngOnInit(): void {
  }

}
