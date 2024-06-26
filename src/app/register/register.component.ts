import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CommonModule } from '@angular/common';
import { ToastrModule, ToastrService } from 'ngx-toastr';

/**
 * Componente para la página de registro de usuarios.
 */
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  usuario: string = '';
  correo: string = '';
  password: string = '';
  password_confirm: string = '';
  passwordsMatch: boolean = true;
  private apiURL = 'https://backend-eg2q.onrender.com/api/';

  constructor(private router: Router,
              private cookieService: CookieService,
              private toastr: ToastrService,
              private http: HttpClient) { }

/**
   * Método para registrar un nuevo usuario.
   * Realiza una solicitud HTTP POST al servidor de backend para registrar al usuario con los datos proporcionados.
   * Si el registro es exitoso, redirige al usuario a la página de inicio de sesión.
   * En caso de error, maneja los errores y actualiza el estado de coincidencia de contraseñas.
   */
register() {
  console.log("Registrarse con: ", this.correo, " y contraseña:", this.password, " y usuario: ", this.usuario);
  if (this.password == this.password_confirm) {
    this.passwordsMatch = true;
    this.http.post<any>(`${this.apiURL}/register`, {
      username: this.usuario, email: this.correo,
      password: this.password
    })
      .subscribe({
        next: (response) => {
          // Registro exitoso
          console.log('Registro exitoso:', response);
          this.router.navigate(['/login']); // Redirige a la página de login
        },
        error: (error) => {
          // Manejo de errores
          if (error.error && error.error.error) {
            console.error('Error en registro de usuario:', error.error.error);
            this.toastr.error('Correo ya en uso', 'REGISTRO');
          } else {
            console.error('Error en la solicitud HTTP:', error);
          }
        }
      });
  } else {
    // Notificar al usuario que las contraseñas no coinciden
    this.passwordsMatch = false;
  }
}
}