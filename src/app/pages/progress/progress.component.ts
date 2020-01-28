
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  progreso1: number = 15;
  // tslint:disable-next-line:no-inferrable-types
  progreso2: number = 25;

  constructor() { }

  ngOnInit() {

  }


}
