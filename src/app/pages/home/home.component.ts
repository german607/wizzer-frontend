import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { PetCarouselComponent } from '../../components/pet-carousel/pet-carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, PetCarouselComponent],
  template: `
    <app-header></app-header>

    <main>
      <section class="hero">
        <div class="hero-content">
          <h1>Encuentra a tu mascota perdida</h1>
          <p>La comunidad más grande para encontrar mascotas perdidas</p>
          <div class="search-container">
            <input type="text" placeholder="Buscar mascota...">
            <button class="search-button">
              <i class="fas fa-search"></i>
              Buscar
            </button>
          </div>
        </div>
      </section>

      <section class="recent-pets">
        <h2>Mascotas recientes</h2>
        <app-pet-carousel [pets]="recentPets"></app-pet-carousel>
      </section>

      <section class="how-it-works">
        <h2>¿Cómo funciona?</h2>
        <div class="steps">
          <div class="step">
            <div class="step-image">
              <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500" alt="Buscar mascotas">
            </div>
            <div class="step-content">
              <div class="step-icon">
                🔍
              </div>
              <h3>Busca</h3>
              <p>Encuentra mascotas perdidas en tu zona</p>
            </div>
          </div>
          <div class="step">
            <div class="step-image">
              <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500" alt="Notificaciones">
            </div>
            <div class="step-content">
              <div class="step-icon">
                🔔
              </div>
              <h3>Notifica</h3>
              <p>Recibe alertas de mascotas encontradas</p>
            </div>
          </div>
          <div class="step">
            <div class="step-image">
              <img src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500" alt="Ayuda">
            </div>
            <div class="step-content">
              <div class="step-icon">
                ❤️
              </div>
              <h3>Ayuda</h3>
              <p>Colabora con la comunidad</p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div class="footer-content">
          <div class="footer-section">
            <h4>Wizzer</h4>
            <p>Conectando mascotas perdidas con sus dueños</p>
          </div>
          <div class="footer-section">
            <h4>Enlaces</h4>
            <a href="#">Sobre nosotros</a>
            <a href="#">Contacto</a>
            <a href="#">Términos y condiciones</a>
          </div>
        </div>
      </footer>
    </main>
  `,
  styles: [`
    main {
      padding-top: 64px;
    }

    .hero {
      background: linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%);
      color: white;
      padding: 4rem 2rem;
      text-align: center;
    }

    .hero-content {
      max-width: 800px;
      margin: 0 auto;
    }

    h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .hero p {
      font-size: 1.25rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }

    .search-container {
      display: flex;
      gap: 1rem;
      max-width: 600px;
      margin: 0 auto;
    }

    input {
      flex: 1;
      padding: 1rem;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
    }

    .search-button {
      background: #60A5FA;
      color: white;
      border: none;
      padding: 1rem 2rem;
      border-radius: 8px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      transition: background 0.3s;
    }

    .search-button:hover {
      background: #3B82F6;
    }

    .recent-pets {
      padding: 4rem 2rem;
      background: #F8FAFC;
    }

    h2 {
      text-align: center;
      color: #1E40AF;
      margin-bottom: 2rem;
      font-size: 2rem;
    }

    .how-it-works {
      padding: 4rem 2rem;
      background: white;
    }

    .steps {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .step {
      background: white;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
      max-width: 320px;
      margin: 0 auto;
    }

    .step:hover {
      transform: translateY(-5px);
    }

    .step-image {
      height: 160px;
      overflow: hidden;
    }

    .step-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .step:hover .step-image img {
      transform: scale(1.05);
    }

    .step-content {
      padding: 1.5rem;
      text-align: center;
    }

    .step-icon {
      width: 60px;
      height: 60px;
      background: #F8FAFC;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1rem;
      font-size: 2rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .step h3 {
      color: #1E40AF;
      margin-bottom: 0.5rem;
      font-size: 1.25rem;
    }

    .step p {
      color: #64748B;
      font-size: 1rem;
    }

    @media (max-width: 768px) {
      .hero {
        padding: 3rem 1rem;
      }

      h1 {
        font-size: 2rem;
      }

      .search-container {
        flex-direction: column;
      }

      .search-button {
        width: 100%;
        justify-content: center;
      }

      .steps {
        grid-template-columns: 1fr;
      }
    }

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
export class HomeComponent {
  recentPets = [
    {
      name: 'Luna',
      breed: 'Golden Retriever',
      location: 'Santiago Centro',
      date: 'Hace 2 horas',
      status: 'Perdida',
      image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=500'
    },
    {
      name: 'Rocky',
      breed: 'Bulldog Francés',
      location: 'Providencia',
      date: 'Hace 3 horas',
      status: 'Encontrado',
      image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500'
    },
    {
      name: 'Milo',
      breed: 'Gato Persa',
      location: 'Las Condes',
      date: 'Hace 5 horas',
      status: 'Perdida',
      image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500'
    },
    {
      name: 'Bella',
      breed: 'Husky Siberiano',
      location: 'La Molina',
      date: 'Hace 1 día',
      status: 'Perdida',
      image: 'https://images.unsplash.com/photo-1605568427561-40dd23b9b3b9?w=500'
    },
    {
      name: 'Simba',
      breed: 'Maine Coon',
      location: 'San Borja',
      date: 'Hace 2 días',
      status: 'Encontrado',
      image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=500'
    },
    {
      name: 'Lola',
      breed: 'Bulldog Francés',
      location: 'Jesús María',
      date: 'Hace 2 días',
      status: 'Perdida',
      image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500'
    },
    {
      name: 'Thor',
      breed: 'Rottweiler',
      location: 'Magdalena',
      date: 'Hace 3 días',
      status: 'Encontrado',
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500'
    },
    {
      name: 'Nala',
      breed: 'Gato Siamés',
      location: 'Barranco',
      date: 'Hace 3 días',
      status: 'Perdida',
      image: 'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?w=500'
    }
  ];
} 