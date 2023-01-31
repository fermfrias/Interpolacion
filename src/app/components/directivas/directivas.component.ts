import { Component } from '@angular/core';
import { viajero } from 'src/app/models/viajero';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {
  subtitulo: string = "Lista de viajeros confirmados"
  variable1: number= 10;
  viajeros: viajero ={
    nombre: 'lolo',
    edad: 43,
    asiento: 74,
    atencionEspecial: false
  };

  listaViajeros: Array <viajero> = [
  {
    nombre: 'Abraham',
    edad: 43,
    asiento: 74,
    atencionEspecial: false
  },
  {
    nombre: 'Leslie',
    edad: 38,
    asiento: 75,
    atencionEspecial: false
  },
  {
    nombre: 'Sam',
    edad: 28,
    asiento: 15,
    atencionEspecial: true
  },
  {
    nombre: 'Fernanda',
    edad: 30,
    asiento: 16,
    atencionEspecial: false
  },
  {
    nombre: 'Haydar',
    edad: 53,
    asiento: 34,
    atencionEspecial: true
  },
];

}
