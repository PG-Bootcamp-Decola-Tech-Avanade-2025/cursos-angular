import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [
    NgIf
  ],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  isEnabled: boolean = true;

  toggleIsEnabled() {
    this.isEnabled = !this.isEnabled;
  }
}
