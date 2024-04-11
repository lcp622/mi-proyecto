import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-hermano',
  standalone: true,
  imports: [],
  templateUrl: './hermano.component.html',
  styleUrl: './hermano.component.css'
})
export class HermanoComponent implements OnInit {

  constructor(private _servicioFamiliar : ServicioFamiliarService ){
    
  }
  
  nombre :string= '';
  ngOnInit(): void {
    this._servicioFamiliar.setHermanoPequeño('Juan');
    this.nombre = this._servicioFamiliar.getHermanoPequeño();
}

saludar(){
  this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoGrande() || '');
  this.nombre = this._servicioFamiliar.getHermanoGrande();
}
}
