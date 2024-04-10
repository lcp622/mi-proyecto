import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PadreComponent } from "./padre/padre.component";
import { HijoComponent } from './hijo/hijo.component'; //lo que estoy poniendo aquí se llama igual que la clase PadreComponent

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, PadreComponent, HijoComponent]
})
export class AppComponent {

  // esto son propiedades de la clase AppComponent.
  title : string = 'Hola mundo en Angular';
  name: string = 'Lucía' 

  
}
