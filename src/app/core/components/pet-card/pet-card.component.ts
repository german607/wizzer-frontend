import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Pet {
  name: string;
  breed: string;
  location: string;
  date: string;
  status: string;
  image: string;
}

@Component({
  selector: 'app-pet-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="pet-card">
      <div class="pet-image">
        <img [src]="pet.image" [alt]="pet.name">
        <span class="status" [class.found]="pet.status === 'Encontrado'">
          {{ pet.status }}
        </span>
      </div>
      <div class="pet-info">
        <h3>{{ pet.name }}</h3>
        <p class="breed">{{ pet.breed }}</p>
        <div class="details">
          <span class="location">
            <i class="fas fa-map-marker-alt"></i>
            {{ pet.location }}
          </span>
          <span class="date">
            <i class="fas fa-clock"></i>
            {{ pet.date }}
          </span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .pet-card {
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
    }

    .pet-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }

    .pet-image {
      position: relative;
      height: 200px;
    }

    .pet-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .status {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: #EF4444;
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.875rem;
      font-weight: 500;
    }

    .status.found {
      background: #10B981;
    }

    .pet-info {
      padding: 1.5rem;
    }

    .pet-info h3 {
      color: #1E293B;
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
    }

    .breed {
      color: #64748B;
      font-size: 0.875rem;
      margin-bottom: 1rem;
    }

    .details {
      display: flex;
      justify-content: space-between;
      color: #64748B;
      font-size: 0.875rem;
    }

    .location, .date {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    @media (max-width: 768px) {
      .pet-image {
        height: 160px;
      }
    }
  `]
})
export class PetCardComponent {
  @Input() pet!: Pet;
} 