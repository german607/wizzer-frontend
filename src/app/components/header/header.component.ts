import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header>
      <nav>
        <div class="logo">Wizzer</div>
        <div class="nav-links">
          <a routerLink="/" class="active">Inicio</a>
          <a routerLink="/buscar">Buscar</a>
          <a routerLink="/publicar">Publicar</a>
          <a routerLink="/login">Iniciar Sesión</a>
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
      top: 0;
      z-index: 1000;
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
    }

    .nav-links {
      display: flex;
      gap: 1.5rem;
    }

    .nav-links a {
      text-decoration: none;
      color: #1E40AF;
      font-weight: 500;
      transition: color 0.3s;
    }

    .nav-links a:hover {
      color: #3B82F6;
    }

    .nav-links a.active {
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