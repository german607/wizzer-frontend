import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer>
      <div class="footer-content">
        <div class="footer-section">
          <h4>Wizzer</h4>
          <p>Conectando mascotas perdidas con sus dueños</p>
        </div>
        <div class="footer-section">
          <h4>Enlaces</h4>
          <a routerLink="/about">Sobre nosotros</a>
          <a routerLink="/contact">Contacto</a>
          <a routerLink="/terms">Términos y condiciones</a>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      background: #1E40AF;
      color: white;
      padding: 4rem 2rem;
      margin-top: 4rem;
    }

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .footer-section h4 {
      margin-bottom: 1rem;
      color: #F8FAFC;
      font-size: 1.25rem;
    }

    .footer-section p {
      color: #E2E8F0;
      margin-bottom: 1rem;
    }

    .footer-section a {
      display: block;
      color: #E2E8F0;
      text-decoration: none;
      margin-bottom: 0.5rem;
      transition: color 0.3s;
    }

    .footer-section a:hover {
      color: #F8FAFC;
    }
  `]
})
export class FooterComponent {} 