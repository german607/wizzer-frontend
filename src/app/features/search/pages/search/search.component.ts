import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <main class="search-page">
      <div class="form-container">
        <div class="form-header">
          <h1>Reportar mascota perdida</h1>
          <p class="subtitle">Completa el formulario para ayudar a encontrar a tu mascota</p>
        </div>
        
        <form (ngSubmit)="onSubmit()" class="pet-form">
          <div class="form-grid">
            <div class="form-section">
              <div class="section-header">
                <i class="fas fa-paw"></i>
                <h2>Información básica</h2>
              </div>
              
              <div class="form-group">
                <label for="name">Nombre de la mascota</label>
                <input type="text" id="name" [(ngModel)]="form.name" name="name" placeholder="Ej: Luna" required>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="type">Tipo de mascota</label>
                  <select id="type" [(ngModel)]="form.type" name="type" required>
                    <option value="">Selecciona un tipo</option>
                    <option value="perro">Perro</option>
                    <option value="gato">Gato</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="breed">Raza</label>
                  <input type="text" id="breed" [(ngModel)]="form.breed" name="breed" placeholder="Ej: Golden Retriever" required>
                </div>
              </div>

              <div class="form-group">
                <label for="age">Edad aproximada</label>
                <input type="number" id="age" [(ngModel)]="form.age" name="age" placeholder="Ej: 2" required>
              </div>
            </div>

            <div class="form-section">
              <div class="section-header">
                <i class="fas fa-info-circle"></i>
                <h2>Características físicas</h2>
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="color">Color principal</label>
                  <input type="text" id="color" [(ngModel)]="form.color" name="color" placeholder="Ej: Dorado" required>
                </div>

                <div class="form-group">
                  <label for="size">Tamaño</label>
                  <select id="size" [(ngModel)]="form.size" name="size" required>
                    <option value="">Selecciona un tamaño</option>
                    <option value="pequeño">Pequeño</option>
                    <option value="mediano">Mediano</option>
                    <option value="grande">Grande</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label for="description">Descripción adicional</label>
                <textarea id="description" [(ngModel)]="form.description" name="description" rows="4" placeholder="Describe características distintivas, comportamiento, etc." required></textarea>
              </div>
            </div>

            <div class="form-section">
              <div class="section-header">
                <i class="fas fa-map-marker-alt"></i>
                <h2>Última ubicación</h2>
              </div>
              
              <div class="form-group">
                <label for="location">Dirección o lugar</label>
                <input type="text" id="location" [(ngModel)]="form.location" name="location" placeholder="Ej: Av. Providencia 1234, Santiago" required>
              </div>

              <div class="form-group">
                <label for="date">Fecha de pérdida</label>
                <input type="date" id="date" [(ngModel)]="form.date" name="date" required>
              </div>
            </div>

            <div class="form-section">
              <div class="section-header">
                <i class="fas fa-user"></i>
                <h2>Información de contacto</h2>
              </div>
              
              <div class="form-group">
                <label for="contactName">Nombre de contacto</label>
                <input type="text" id="contactName" [(ngModel)]="form.contactName" name="contactName" placeholder="Tu nombre completo" required>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="phone">Teléfono</label>
                  <input type="tel" id="phone" [(ngModel)]="form.phone" name="phone" placeholder="+56 9 1234 5678" required>
                </div>

                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" id="email" [(ngModel)]="form.email" name="email" placeholder="tu@email.com" required>
                </div>
              </div>
            </div>
          </div>

          <div class="form-actions">
            <button type="submit" class="btn-primary">
              <i class="fas fa-paper-plane"></i>
              Publicar búsqueda
            </button>
            <a routerLink="/" class="btn-secondary">
              <i class="fas fa-times"></i>
              Cancelar
            </a>
          </div>
        </form>
      </div>
    </main>
  `,
  styles: [`
    .search-page {
      padding: 2rem;
      min-height: calc(100vh - 64px);
      background: #F0F2F5;
    }

    .form-container {
      max-width: 900px;
      margin: 0 auto;
      background: white;
      padding: 2rem;
      border-radius: 16px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .form-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    h1 {
      color: #1877F2;
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }

    .subtitle {
      color: #65676B;
      font-size: 1.1rem;
    }

    .form-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 2rem;
    }

    .form-section {
      background: #F8FAFC;
      padding: 1.5rem;
      border-radius: 12px;
      box-shadow: 0 1px 2px rgba(0,0,0,0.05);
    }

    .section-header {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 1.5rem;
      color: #1877F2;
    }

    .section-header i {
      font-size: 1.25rem;
    }

    h2 {
      color: #1877F2;
      font-size: 1.25rem;
      margin: 0;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    label {
      display: block;
      margin-bottom: 0.5rem;
      color: #1C1E21;
      font-weight: 500;
      font-size: 0.95rem;
    }

    input, select, textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #DDDFE2;
      border-radius: 8px;
      font-size: 1rem;
      background: white;
      transition: all 0.2s;
    }

    input::placeholder, textarea::placeholder {
      color: #BEC3C9;
    }

    input:focus, select:focus, textarea:focus {
      outline: none;
      border-color: #1877F2;
      box-shadow: 0 0 0 2px rgba(24, 119, 242, 0.1);
    }

    select {
      appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23666' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 1rem center;
      background-size: 16px 12px;
      padding-right: 2.5rem;
      cursor: pointer;
    }

    select:hover {
      border-color: #1877F2;
    }

    select:focus {
      border-color: #1877F2;
      box-shadow: 0 0 0 0.2rem rgba(24, 119, 242, 0.25);
    }

    select option {
      padding: 0.5rem;
    }

    .form-actions {
      display: flex;
      gap: 1rem;
      justify-content: center;
      margin-top: 3rem;
    }

    .btn-primary {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 2rem;
      background: #1877F2;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
    }

    .btn-primary:hover {
      background: #166FE5;
      transform: translateY(-1px);
    }

    .btn-secondary {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 2rem;
      background: #E4E6EB;
      color: #1C1E21;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.2s;
    }

    .btn-secondary:hover {
      background: #D8DADF;
      transform: translateY(-1px);
    }

    @media (max-width: 768px) {
      .form-grid {
        grid-template-columns: 1fr;
      }

      .form-row {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class SearchComponent {
  form = {
    name: '',
    type: '',
    breed: '',
    age: null,
    color: '',
    size: '',
    description: '',
    location: '',
    date: '',
    contactName: '',
    phone: '',
    email: ''
  };

  onSubmit() {
    // TODO: Implementar envío del formulario
    console.log('Enviando formulario:', this.form);
  }
} 