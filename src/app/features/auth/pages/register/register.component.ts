import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="auth-container">
      <div class="auth-card">
        <h1>Crear cuenta</h1>
        <form (ngSubmit)="onSubmit()">
          <div class="form-group">
            <label for="name">Nombre</label>
            <input type="text" id="name" [(ngModel)]="form.name" name="name" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" [(ngModel)]="form.email" name="email" required>
          </div>
          <div class="form-group">
            <label for="password">Contraseña</label>
            <input type="password" id="password" [(ngModel)]="form.password" name="password" required>
          </div>
          <button type="submit" class="btn-primary">Registrarse</button>
        </form>
        <p class="auth-link">
          ¿Ya tienes cuenta? <a routerLink="/auth/login">Iniciar sesión</a>
        </p>
      </div>
    </div>
  `,
  styles: [`
    .auth-container {
      min-height: calc(100vh - 64px);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      background: #F8FAFC;
    }

    .auth-card {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      width: 100%;
      max-width: 400px;
    }

    h1 {
      color: #1E40AF;
      margin-bottom: 2rem;
      text-align: center;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    label {
      display: block;
      margin-bottom: 0.5rem;
      color: #1E293B;
      font-weight: 500;
    }

    input {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #E2E8F0;
      border-radius: 8px;
      font-size: 1rem;
    }

    input:focus {
      outline: none;
      border-color: #3B82F6;
      box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
    }

    .btn-primary {
      width: 100%;
      padding: 0.75rem;
      background: #1E40AF;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.2s;
    }

    .btn-primary:hover {
      background: #1E3A8A;
    }

    .auth-link {
      margin-top: 1.5rem;
      text-align: center;
      color: #64748B;
    }

    .auth-link a {
      color: #1E40AF;
      text-decoration: none;
      font-weight: 500;
    }

    .auth-link a:hover {
      text-decoration: underline;
    }
  `]
})
export class RegisterComponent {
  form = {
    name: '',
    email: '',
    password: ''
  };

  onSubmit() {
    // TODO: Implementar registro
    console.log('Registrando:', this.form);
  }
} 