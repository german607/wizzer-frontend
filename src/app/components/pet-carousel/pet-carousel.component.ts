import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetCardComponent } from '../pet-card/pet-card.component';

@Component({
  selector: 'app-pet-carousel',
  standalone: true,
  imports: [CommonModule, PetCardComponent],
  template: `
    <div class="carousel-container">
      <button class="carousel-button prev" (mouseenter)="startAutoScroll('left')" (mouseleave)="stopAutoScroll()">
        <i class="fas fa-chevron-left"></i>
      </button>
      
      <div class="carousel">
        <div class="carousel-track" #carouselTrack>
          <app-pet-card
            *ngFor="let pet of pets"
            [pet]="pet"
            class="carousel-item"
          ></app-pet-card>
        </div>
      </div>

      <button class="carousel-button next" (mouseenter)="startAutoScroll('right')" (mouseleave)="stopAutoScroll()">
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  `,
  styles: [`
    .carousel-container {
      position: relative;
      width: 100%;
      padding: 0 2rem;
      margin: 0 auto;
    }

    .carousel {
      overflow: hidden;
      position: relative;
      width: 100%;
    }

    .carousel-track {
      display: flex;
      gap: 1.5rem;
      overflow-x: auto;
      scroll-behavior: smooth;
      -ms-overflow-style: none;
      scrollbar-width: none;
      padding: 1rem 0;
    }

    .carousel-track::-webkit-scrollbar {
      display: none;
    }

    .carousel-item {
      flex: 0 0 300px;
      width: 300px;
    }

    .carousel-button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: #1E40AF;
      border: none;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      box-shadow: 0 2px 8px rgba(0,0,0,0.15);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      transition: all 0.3s ease;
      z-index: 10;
      font-size: 1.2rem;
    }

    .carousel-button:hover {
      background: #3B82F6;
      transform: translateY(-50%) scale(1.1);
    }

    .carousel-button.prev {
      left: 0;
    }

    .carousel-button.next {
      right: 0;
    }

    @media (max-width: 768px) {
      .carousel-item {
        flex: 0 0 250px;
        width: 250px;
      }
    }
  `]
})
export class PetCarouselComponent {
  @Input() pets: Array<{
    name: string;
    breed: string;
    location: string;
    date: string;
    status: string;
    image: string;
  }> = [];

  @ViewChild('carouselTrack') carouselTrack!: ElementRef;
  private autoScrollInterval: any;

  scrollCarousel(direction: 'left' | 'right') {
    const track = this.carouselTrack.nativeElement;
    const itemWidth = 300;
    const gap = 24;
    const scrollAmount = itemWidth + gap;
    
    if (direction === 'left') {
      track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }

  startAutoScroll(direction: 'left' | 'right') {
    // Scroll inmediatamente al hacer hover
    this.scrollCarousel(direction);
    
    // Continuar el scroll cada 500ms
    this.autoScrollInterval = setInterval(() => {
      this.scrollCarousel(direction);
    }, 500);
  }

  stopAutoScroll() {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }
  }
} 