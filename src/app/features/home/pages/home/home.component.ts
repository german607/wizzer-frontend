import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetCarouselComponent } from '../../../../core/components/pet-carousel/pet-carousel.component';
import { SearchBarComponent } from '../../../../core/components/search-bar/search-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PetCarouselComponent, SearchBarComponent],
  template: `
    <main>
      <section class="hero">
        <div class="hero-content">
          <h1>Encuentra tu mascota perdida</h1>
          <p>La comunidad más grande para encontrar mascotas perdidas</p>
          <app-search-bar (search)="onSearch($event)"></app-search-bar>
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
    </main>
  `,
  styles: [`
    main {
      padding-top: 64px;
    }

    .hero {
      background: linear-gradient(rgba(30, 64, 175, 0.7), rgba(30, 64, 175, 0.7)),
                  url('https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200') center/cover;
      color: white;
      padding: 6rem 2rem;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: inherit;
      filter: blur(4px);
      z-index: 0;
    }

    .hero-content {
      position: relative;
      z-index: 1;
      max-width: 800px;
      margin: 0 auto;
    }

    .hero h1 {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 1rem;
      text-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }

    .hero p {
      font-size: 1.25rem;
      margin-bottom: 2rem;
      opacity: 0.95;
      text-shadow: 0 1px 2px rgba(0,0,0,0.1);
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
        padding: 4rem 1rem;
      }

      .hero h1 {
        font-size: 2rem;
      }

      .hero p {
        font-size: 1rem;
      }

      .steps {
        grid-template-columns: 1fr;
      }
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

  onSearch(query: string) {
    // TODO: Implementar búsqueda
    console.log('Buscando:', query);
  }
} 