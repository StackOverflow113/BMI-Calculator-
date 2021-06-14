import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  bmi: number;
  resultado: string;
  interpretacion: string;

  constructor(private router: ActivatedRoute) {
    this.resultado = '';
    this.interpretacion = '';
    this.bmi = +router.snapshot.paramMap.get('valor')!;
    console.log(this.bmi)
  }

  ngOnInit(): void {
    this.getResultado();
  }

  getResultado() {
    if (this.bmi >= 25) {
      this.resultado = 'Exceso de peso';
      this.interpretacion = 'Tienes un peso corporal superior al normal. Intente hacer ejercicio'
    } else if (this.bmi >= 18.5) {
      this.resultado = 'Normal'
      this.interpretacion = 'Tienes un peso corporal normal. Buen trabajo!'
    } else {
      this.resultado = 'Bajo Peso';
      this.interpretacion = 'Tienes un peso corporal mas bajo de lo normal. Puedes comer un poco mas'
    }
  }

}
