import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // esto son propiedades de la clase AppComponent.
  title : string = 'Hola mundo en Angular';
  name: string = 'Lucía' 

  
}
