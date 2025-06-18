import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="search-container">
      <input 
        type="text" 
        [placeholder]="placeholder"
        [(ngModel)]="searchText"
        (keyup.enter)="onSearch()"
      >
      <button (click)="onSearch()">{{ buttonText }}</button>
    </div>
  `,
  styles: [`
    .search-container {
      display: flex;
      gap: 0.5rem;
      max-width: 600px;
      margin: 0 auto;
      background: rgba(255, 255, 255, 0.1);
      padding: 0.5rem;
      border-radius: 12px;
      backdrop-filter: blur(4px);
    }

    input {
      flex: 1;
      padding: 1rem 1.5rem;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      background: rgba(255, 255, 255, 0.95);
      color: #1E293B;
    }

    input:focus {
      outline: none;
      box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2);
    }

    button {
      background: white;
      color: #1E40AF;
      padding: 1rem 2rem;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    button:hover {
      background: #F8FAFC;
      transform: translateY(-1px);
    }

    @media (max-width: 768px) {
      .search-container {
        flex-direction: column;
      }

      button {
        width: 100%;
      }
    }
  `]
})
export class SearchBarComponent {
  @Output() search = new EventEmitter<string>();
  
  searchText = '';
  placeholder = 'Buscar mascotas perdidas...';
  buttonText = 'Buscar';

  onSearch() {
    if (this.searchText.trim()) {
      this.search.emit(this.searchText);
    }
  }
} 