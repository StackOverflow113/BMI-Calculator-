import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  edad = 25;
  peso = 70;
  altura = 170;
  sex = 'Masculino';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ChangeHeight(event: any) {
    this.altura = event.target.value;
  }
  masculino() {
    this.sex = 'Masculino';
  }
  femenino() {
    this.sex = 'Femenino'
  }
  calcularBMI() {
    const BMI = this.peso / Math.pow(this.altura / 100, 2);
    /*console.log(BMI.toFixed(1));*/
    this.router.navigate(['/resultado', BMI.toFixed(1)])
  }
}
