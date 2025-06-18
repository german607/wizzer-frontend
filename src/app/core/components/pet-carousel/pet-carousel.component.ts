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
  selector: 'app-pet-carousel',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="carousel-container">
      <div class="carousel">
        <div class="carousel-track" [style.transform]="'translateX(' + offset + 'px)'">
          <div class="carousel-item" *ngFor="let pet of pets">
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
          </div>
        </div>
      </div>
      <button class="carousel-button prev" (click)="prev()" *ngIf="canScrollPrev">
        <i class="fas fa-chevron-left"></i>
      </button>
      <button class="carousel-button next" (click)="next()" *ngIf="canScrollNext">
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  `,
  styles: [`
    .carousel-container {
      position: relative;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .carousel {
      overflow: hidden;
      position: relative;
    }

    .carousel-track {
      display: flex;
      gap: 1.5rem;
      transition: transform 0.3s ease;
    }

    .carousel-item {
      flex: 0 0 280px;
    }

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

    .carousel-button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: white;
      border: none;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      cursor: pointer;
      transition: all 0.2s ease;
      z-index: 10;
    }

    .carousel-button:hover {
      background: #F8FAFC;
      transform: translateY(-50%) scale(1.1);
    }

    .carousel-button.prev {
      left: 0;
    }

    .carousel-button.next {
      right: 0;
    }

    @media (max-width: 768px) {
      .carousel-container {
        padding: 0 1rem;
      }

      .carousel-item {
        flex: 0 0 240px;
      }

      .pet-image {
        height: 160px;
      }
    }
  `]
})
export class PetCarouselComponent {
  @Input() pets: Pet[] = [];
  
  offset = 0;
  itemWidth = 280 + 24; // width + gap
  visibleItems = 4;
  canScrollPrev = false;
  canScrollNext = true;

  next() {
    if (this.canScrollNext) {
      this.offset -= this.itemWidth;
      this.updateScrollButtons();
    }
  }

  prev() {
    if (this.canScrollPrev) {
      this.offset += this.itemWidth;
      this.updateScrollButtons();
    }
  }

  private updateScrollButtons() {
    this.canScrollPrev = this.offset < 0;
    this.canScrollNext = Math.abs(this.offset) < (this.pets.length - this.visibleItems) * this.itemWidth;
  }
} 