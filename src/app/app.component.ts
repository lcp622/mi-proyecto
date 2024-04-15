import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PadreComponent } from "./padre/padre.component";
import { ServicioFamiliarService } from './servicio-familiar.service';
import { HermanoComponent } from "./hermano/hermano.component";
import { DatePipe } from '@angular/common';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, PadreComponent, HermanoComponent, DatePipe]
})
export class AppComponent {

  // Inyección de un servicio
  
  private _servicioFamiliar = inject(ServicioFamiliarService);

  // esto son propiedades de la clase AppComponent.
  title : string = 'Hola mundo en Angular';
  name: string = 'Lucía' ;
  fecha: Date = new Date();

  //Contador
  valorContador :number = 0 ;
  mensajeRecibido: string = '';

recibirMensaje($event: string) {
  this.mensajeRecibido = $event;
}

  incrementar(){
    this.valorContador++ ;
  }

  decrementar(){
    this.valorContador--;
  }

  
}
