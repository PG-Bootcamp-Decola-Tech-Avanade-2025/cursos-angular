import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-entry',
  imports: [
    FormsModule
  ],
  templateUrl: './data-entry.component.html',
  styleUrl: './data-entry.component.css'
})
export class DataEntryComponent {
  textPlaceholder = "Digite, aqui, seu texto.";
}
