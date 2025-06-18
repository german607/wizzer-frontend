import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="auth-container">
      <div class="auth-card">
        <a routerLink="/" class="logo">Wizzer</a>
        
        <form class="auth-form" (ngSubmit)="onSubmit()">
          <input 
            type="email" 
            [(ngModel)]="email" 
            name="email" 
            placeholder="Correo electrónico"
            required
          >

          <input 
            type="password" 
            [(ngModel)]="password" 
            name="password" 
            placeholder="Contraseña"
            required
          >

          <button type="submit">Iniciar Sesión</button>
        </form>

        <div class="auth-footer">
          <a routerLink="/registro">Crear cuenta</a>
          <span class="separator">·</span>
          <a routerLink="/recuperar-contrasena">¿Olvidaste tu contraseña?</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .auth-container {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      background: white;
    }

    .auth-card {
      width: 100%;
      max-width: 320px;
      text-align: center;
    }

    .logo {
      display: inline-block;
      color: #1E40AF;
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 2rem;
      text-decoration: none;
      transition: color 0.2s ease;
    }

    .logo:hover {
      color: #3B82F6;
    }

    .auth-form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    input {
      padding: 0.75rem;
      border: 1px solid #E2E8F0;
      border-radius: 6px;
      font-size: 0.875rem;
      transition: all 0.2s ease;
    }

    input:focus {
      outline: none;
      border-color: #1E40AF;
    }

    button {
      background: #1E40AF;
      color: white;
      padding: 0.75rem;
      border: none;
      border-radius: 6px;
      font-weight: 500;
      font-size: 0.875rem;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    button:hover {
      background: #3B82F6;
    }

    .auth-footer {
      font-size: 0.875rem;
      color: #64748B;
    }

    .auth-footer a {
      color: #1E40AF;
      text-decoration: none;
      transition: color 0.2s;
    }

    .auth-footer a:hover {
      color: #3B82F6;
    }

    .separator {
      margin: 0 0.5rem;
    }

    @media (max-width: 480px) {
      .auth-card {
        padding: 0 1rem;
      }
    }
  `]
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  onSubmit() {
    console.log('Login attempt:', {
      email: this.email,
      password: this.password
    });
  }
} 