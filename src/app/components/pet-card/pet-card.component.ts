import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pet-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pet-card">
      <div class="image-container">
        <img [src]="pet.image" [alt]="pet.name">
        <span class="status" [class.found]="pet.status === 'Encontrado'">
          {{ pet.status }}
        </span>
      </div>
      <div class="content">
        <h3>{{ pet.name }}</h3>
        <p class="breed">{{ pet.breed }}</p>
        <p class="location">
          <i class="fas fa-map-marker-alt"></i>
          {{ pet.location }}
        </p>
        <p class="date">{{ pet.date }}</p>
      </div>
    </div>
  `,
  styles: [`
    .pet-card {
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
    }

    .pet-card:hover {
      transform: translateY(-5px);
    }

    .image-container {
      position: relative;
      height: 200px;
      overflow: hidden;
    }

    .image-container img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .pet-card:hover .image-container img {
      transform: scale(1.05);
    }

    .status {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: #1E40AF;
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.875rem;
      font-weight: 500;
    }

    .status.found {
      background: #10B981;
    }

    .content {
      padding: 1.5rem;
    }

    h3 {
      margin: 0;
      color: #1E40AF;
      font-size: 1.25rem;
    }

    .breed {
      color: #64748B;
      margin: 0.5rem 0;
    }

    .location {
      color: #64748B;
      font-size: 0.875rem;
      margin: 0.5rem 0;
    }

    .date {
      color: #94A3B8;
      font-size: 0.75rem;
      margin: 0.5rem 0 0;
    }
  `]
})
export class PetCardComponent {
  @Input() pet!: {
    name: string;
    breed: string;
    location: string;
    date: string;
    status: string;
    image: string;
  };
} 