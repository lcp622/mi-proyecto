import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServicioFamiliarService } from '../servicio-familiar.service';
import { HermanoComponent } from "../hermano/hermano.component";

@Component({
    standalone: true,
    selector: 'app-padre',
    templateUrl: './padre.component.html',
    styleUrls: ['./padre.component.css'],
    imports: [FormsModule, HermanoComponent]
})
export class PadreComponent implements OnInit {


  constructor(private _servicioFamiliar : ServicioFamiliarService ){

  }

  nombre:string = '';
  ngOnInit(): void {
      this._servicioFamiliar.setHermanoGrande('Pedro');
      this.nombre = this._servicioFamiliar.getHermanoGrande();
  }
  
  saludar(){
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoPequeño() || '');
    this.nombre = this._servicioFamiliar.getHermanoGrande();
  }
}