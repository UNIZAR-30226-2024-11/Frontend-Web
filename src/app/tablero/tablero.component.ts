import { Component } from '@angular/core';
import { FlujoComponent } from '../shop/flujo/flujo.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tablero',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tablero.component.html',
  styleUrl: './tablero.component.css'
})
export class TableroComponent {
  mensajes: string[] = [];

  constructor() { }
    ngOnInit(): void {
    }
    añadirMensaje(mensaje: string): void {
        // Agregar la solicitud a la lista de amigos
        this.mensajes.push(mensaje);
    }
}
