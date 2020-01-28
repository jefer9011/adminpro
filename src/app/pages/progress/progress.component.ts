
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  progreso: number = 20;

  constructor() { }

  ngOnInit() {

  }

  cambiarValor( valor: number ) {

    // Condicion de validacion
    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }

    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }

    // aumentar valor de la barra
    this.progreso = this.progreso + valor;
  }

}
