import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="search-container">
      <div class="search-header">
        <a routerLink="/" class="back-link">← Volver</a>
        <h1>Reportar mascota perdida</h1>
        <p>Completa el formulario con los detalles de tu mascota</p>
      </div>

      <form class="search-form" (ngSubmit)="onSubmit()">
        <div class="form-section">
          <h2>Información básica</h2>
          <div class="form-grid">
            <div class="form-group">
              <label for="petName">Nombre de la mascota</label>
              <input 
                type="text" 
                id="petName" 
                [(ngModel)]="formData.petName" 
                name="petName" 
                required
                placeholder="Ej: Rocky"
              >
            </div>

            <div class="form-group">
              <label for="petType">Tipo de mascota</label>
              <select 
                id="petType" 
                [(ngModel)]="formData.petType" 
                name="petType" 
                required
              >
                <option value="">Seleccionar tipo</option>
                <option value="dog">Perro</option>
                <option value="cat">Gato</option>
                <option value="other">Otro</option>
              </select>
            </div>

            <div class="form-group">
              <label for="breed">Raza</label>
              <input 
                type="text" 
                id="breed" 
                [(ngModel)]="formData.breed" 
                name="breed" 
                placeholder="Ej: Labrador"
              >
            </div>

            <div class="form-group">
              <label for="age">Edad aproximada</label>
              <input 
                type="text" 
                id="age" 
                [(ngModel)]="formData.age" 
                name="age" 
                placeholder="Ej: 2 años"
              >
            </div>
          </div>
        </div>

        <div class="form-section">
          <h2>Características físicas</h2>
          <div class="form-grid">
            <div class="form-group">
              <label for="color">Color principal</label>
              <input 
                type="text" 
                id="color" 
                [(ngModel)]="formData.color" 
                name="color" 
                required
                placeholder="Ej: Marrón"
              >
            </div>

            <div class="form-group">
              <label for="size">Tamaño</label>
              <select 
                id="size" 
                [(ngModel)]="formData.size" 
                name="size" 
                required
              >
                <option value="">Seleccionar tamaño</option>
                <option value="small">Pequeño</option>
                <option value="medium">Mediano</option>
                <option value="large">Grande</option>
              </select>
            </div>

            <div class="form-group full-width">
              <label for="description">Descripción adicional</label>
              <textarea 
                id="description" 
                [(ngModel)]="formData.description" 
                name="description" 
                rows="3"
                placeholder="Describe características distintivas, marcas, collares, etc."
              ></textarea>
            </div>
          </div>
        </div>

        <div class="form-section">
          <h2>Última ubicación</h2>
          <div class="form-grid">
            <div class="form-group">
              <label for="lastSeen">Fecha de desaparición</label>
              <input 
                type="date" 
                id="lastSeen" 
                [(ngModel)]="formData.lastSeen" 
                name="lastSeen" 
                required
              >
            </div>

            <div class="form-group">
              <label for="location">Ubicación</label>
              <input 
                type="text" 
                id="location" 
                [(ngModel)]="formData.location" 
                name="location" 
                required
                placeholder="Ej: Calle Principal 123"
              >
            </div>

            <div class="form-group full-width">
              <label for="details">Detalles adicionales</label>
              <textarea 
                id="details" 
                [(ngModel)]="formData.details" 
                name="details" 
                rows="2"
                placeholder="Información adicional sobre la desaparición"
              ></textarea>
            </div>
          </div>
        </div>

        <div class="form-section">
          <h2>Fotos</h2>
          <div class="upload-section">
            <div class="upload-box">
              <input type="file" id="photos" multiple accept="image/*" (change)="onFileSelected($event)">
              <label for="photos">
                <span class="upload-icon">📷</span>
                <span>Subir fotos</span>
                <small>Máximo 5 fotos</small>
              </label>
            </div>
            <div class="photo-preview" *ngIf="selectedFiles.length > 0">
              <div class="preview-item" *ngFor="let file of selectedFiles">
                <img [src]="file.preview" alt="Preview">
                <button type="button" class="remove-photo" (click)="removePhoto(file)">×</button>
              </div>
            </div>
          </div>
        </div>

        <div class="form-section">
          <h2>Información de contacto</h2>
          <div class="form-grid">
            <div class="form-group">
              <label for="contactName">Nombre de contacto</label>
              <input 
                type="text" 
                id="contactName" 
                [(ngModel)]="formData.contactName" 
                name="contactName" 
                required
                placeholder="Tu nombre"
              >
            </div>

            <div class="form-group">
              <label for="contactPhone">Teléfono</label>
              <input 
                type="tel" 
                id="contactPhone" 
                [(ngModel)]="formData.contactPhone" 
                name="contactPhone" 
                required
                placeholder="+34 123 456 789"
              >
            </div>

            <div class="form-group">
              <label for="contactEmail">Email</label>
              <input 
                type="email" 
                id="contactEmail" 
                [(ngModel)]="formData.contactEmail" 
                name="contactEmail" 
                required
                placeholder="tu@email.com"
              >
            </div>
          </div>
        </div>

        <div class="form-actions">
          <button type="submit" class="submit-btn">Publicar búsqueda</button>
        </div>
      </form>
    </div>
  `,
  styles: [`
    .search-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem 1rem;
      background: #F8FAFC;
      min-height: 100vh;
    }

    .search-header {
      margin-bottom: 2rem;
      text-align: center;
    }

    .back-link {
      color: #1E40AF;
      text-decoration: none;
      font-weight: 500;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
      transition: all 0.2s;
      font-size: 0.875rem;
    }

    .back-link:hover {
      color: #3B82F6;
      transform: translateX(-2px);
    }

    h1 {
      color: #1E293B;
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 0.75rem;
      background: linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .search-header p {
      color: #64748B;
      font-size: 1.125rem;
      max-width: 500px;
      margin: 0 auto;
    }

    .form-section {
      background: white;
      border-radius: 16px;
      padding: 2rem;
      margin-bottom: 1.5rem;
      box-shadow: 0 4px 6px rgba(0,0,0,0.05);
      border: 1px solid rgba(226, 232, 240, 0.8);
      transition: all 0.3s ease;
    }

    .form-section:hover {
      box-shadow: 0 8px 12px rgba(0,0,0,0.05);
      transform: translateY(-1px);
    }

    .form-section h2 {
      color: #1E293B;
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .form-section h2::before {
      content: '';
      display: block;
      width: 4px;
      height: 20px;
      background: #1E40AF;
      border-radius: 2px;
    }

    .form-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .form-group.full-width {
      grid-column: 1 / -1;
    }

    label {
      color: #1E293B;
      font-weight: 500;
      font-size: 0.875rem;
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }

    input, select, textarea {
      padding: 0.875rem 1rem;
      border: 1px solid #E2E8F0;
      border-radius: 12px;
      font-size: 0.875rem;
      transition: all 0.2s;
      background: #F8FAFC;
    }

    input:focus, select:focus, textarea:focus {
      outline: none;
      border-color: #3B82F6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
      background: white;
    }

    .upload-section {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .upload-box {
      border: 2px dashed #E2E8F0;
      border-radius: 12px;
      padding: 2.5rem;
      text-align: center;
      cursor: pointer;
      transition: all 0.2s;
      background: #F8FAFC;
    }

    .upload-box:hover {
      border-color: #3B82F6;
      background: white;
      transform: translateY(-1px);
    }

    .upload-box input[type="file"] {
      display: none;
    }

    .upload-box label {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.75rem;
      cursor: pointer;
    }

    .upload-icon {
      font-size: 2.5rem;
      color: #1E40AF;
    }

    .upload-box small {
      color: #64748B;
      font-size: 0.75rem;
    }

    .photo-preview {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      gap: 1rem;
    }

    .preview-item {
      position: relative;
      aspect-ratio: 1;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .preview-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .remove-photo {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      background: rgba(0, 0, 0, 0.5);
      color: white;
      border: none;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.25rem;
      transition: all 0.2s;
      backdrop-filter: blur(4px);
    }

    .remove-photo:hover {
      background: rgba(0, 0, 0, 0.7);
      transform: scale(1.1);
    }

    .form-actions {
      margin-top: 3rem;
      text-align: center;
    }

    .submit-btn {
      background: linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%);
      color: white;
      padding: 1rem 3rem;
      border: none;
      border-radius: 12px;
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s;
      box-shadow: 0 4px 6px rgba(30, 64, 175, 0.2);
    }

    .submit-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 8px rgba(30, 64, 175, 0.3);
    }

    @media (max-width: 640px) {
      .form-grid {
        grid-template-columns: 1fr;
      }

      .search-container {
        padding: 1rem;
      }

      .form-section {
        padding: 1.5rem;
      }

      h1 {
        font-size: 2rem;
      }
    }
  `]
})
export class SearchFormComponent {
  formData = {
    petName: '',
    petType: '',
    breed: '',
    age: '',
    color: '',
    size: '',
    description: '',
    lastSeen: '',
    location: '',
    details: '',
    contactName: '',
    contactPhone: '',
    contactEmail: ''
  };

  selectedFiles: { file: File; preview: string }[] = [];

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const files = Array.from(input.files);
      if (this.selectedFiles.length + files.length > 5) {
        alert('Máximo 5 fotos permitidas');
        return;
      }

      files.forEach(file => {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.selectedFiles.push({
            file,
            preview: e.target.result
          });
        };
        reader.readAsDataURL(file);
      });
    }
  }

  removePhoto(file: { file: File; preview: string }) {
    this.selectedFiles = this.selectedFiles.filter(f => f !== file);
  }

  onSubmit() {
    // Aquí irá la lógica para enviar el formulario al backend
    console.log('Form data:', this.formData);
    console.log('Selected files:', this.selectedFiles);
  }
} 