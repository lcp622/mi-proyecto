import { Component, Input, input } from '@angular/core';
import { HijoComponent } from "../hijo/hijo.component";

@Component({
    selector: 'app-padre',
    standalone: true,
    templateUrl: './padre.component.html',
    styleUrl: './padre.component.css',
    imports: [HijoComponent]
})
export class PadreComponent {

    title :string = 'Esto es el título del padre';
   @Input() datoEntrada: string = '';
}
