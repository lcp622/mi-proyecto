import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioFamiliarService {


  hermanoGrande:string = '';
  hermanoPequeño:string= '';

  saludar(hermano:string) {
    console.log(`Hola ${hermano}!`)
  }

  preguntarHijo():string {
    return '¿Cómo esta tu hijo?'
  }

  getHermanoGrande():string {
    return this.hermanoGrande;
  }

  setHermanoGrande(hermano:string) {
    this.hermanoGrande = hermano;
  }

  getHermanoPequeño():string {
    return this.hermanoPequeño;
  }

  setHermanoPequeño(hermano:string) { 
    this.hermanoPequeño = hermano;
  }

  constructor() { }
}
