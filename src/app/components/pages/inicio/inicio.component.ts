import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  logo :any
  constructor(
    private router: Router
  ){

  }
  ngOnInit(): void {
    this.logo = ('assets/img/logo_ruge.jpg')
  }

  goHome(){
    this.router.navigateByUrl('home')
  }



}
