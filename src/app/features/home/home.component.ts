import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterLink],
  template: `
    <div class="welcome-section">
      <h1 class="page-title">Bienvenido a Wizzer</h1>
      <p class="subtitle">Tu plataforma para encontrar mascotas perdidas</p>
    </div>

    <div class="features-grid">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Mascotas Perdidas</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p>Encuentra mascotas perdidas en tu área y ayuda a reunirlas con sus dueños.</p>
        </mat-card-content>
        <mat-card-actions>
          <button mat-button color="primary" routerLink="/mascotas">Ver Mascotas</button>
        </mat-card-actions>
      </mat-card>

      <mat-card>
        <mat-card-header>
          <mat-card-title>Mapa Interactivo</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p>Explora el mapa para ver las mascotas perdidas cerca de ti.</p>
        </mat-card-content>
        <mat-card-actions>
          <button mat-button color="primary" routerLink="/mapa">Ver Mapa</button>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styles: [`
    .welcome-section {
      text-align: center;
      padding: 2rem 0;
    }

    .subtitle {
      font-size: 1.2rem;
      color: #666;
      margin-bottom: 2rem;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      padding: 2rem 0;
    }

    mat-card {
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    mat-card-content {
      flex-grow: 1;
    }
  `]
})
export class HomeComponent {} 