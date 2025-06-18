import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <header>
      <nav>
        <a routerLink="/" class="logo">Wizzer</a>
        <div class="nav-links">
          <a routerLink="/buscar">Buscar</a>
          <a routerLink="/reportar">Reportar</a>
          <a routerLink="/auth/login">Iniciar Sesión</a>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    header {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      position: fixed;
      width: 100%;
      top: 4px;
      left: 0;
      right: 0;
      z-index: 1000;
      border-radius: 0 0 12px 12px;
    }

    nav {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      color: #1E40AF;
      text-decoration: none;
      transition: color 0.3s;
    }

    .logo:hover {
      color: #3B82F6;
    }

    .nav-links {
      display: flex;
      gap: 1.5rem;
      align-items: center;
    }

    .nav-links a {
      text-decoration: none;
      color: #1E40AF;
      font-weight: 500;
      transition: color 0.2s ease;
    }

    .nav-links a:hover {
      color: #3B82F6;
    }

    @media (max-width: 768px) {
      .nav-links {
        display: none;
      }
    }
  `]
})
export class HeaderComponent {} 