import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  // tslint:disable-next-line:no-input-rename
  @Input('nombre') leyenda: string = 'leyenda';
    // tslint:disable-next-line:no-inferrable-types
  @Input() progreso: number = 50;

  // Notificar al padre que sacamos datos
  // tslint:disable-next-line: no-output-rename
  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
  //  console.log('leyenda', this.leyenda);
  //  console.log('progreso', this.progreso);
   }

  ngOnInit() {
  //  console.log('leyenda', this.leyenda);
  //  console.log('progreso', this.progreso);
  }

  onChanges(newValue: number)  {

    // tslint:disable-next-line:prefer-const var JS para que el input no reciba valores > 100
    // let elemHTML: any = document.getElementsByName('progreso')[0];
     //   let elemHTML: any = document.getElementsByName('progreso')[0];

  //  console.log( this.txtProgress );

    // tslint:disable-next-line: deprecation
    console.log(event);

    if ( newValue >= 100)  {
      this.progreso = 100;
    }  else if ( newValue <= 0 ) {
      this.progreso = 0;
    }  else {
      this.progreso = newValue;
    }

    // Logica JS para que el input no reciba valores > 100
   // elemHTML.value = Number(  this.progreso  );
    this.txtProgress.nativeElement.value = this.progreso;

    this.cambioValor.emit( this.progreso );

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
  //  Emite el valor numerico de progreso cuando se cambia, con el Output
    this.cambioValor.emit( this.progreso );

    this.txtProgress.nativeElement.focus();
  }



}
