import { NgClass, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [
    NgIf,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    NgFor,
    NgClass,
    FormsModule
  ],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  isEnabled: boolean = true;
  currentValue: number = 0;
  listInput: string = "";
  list: string[] = []
  stylesClass: string = "enabled";

  toggleIsEnabled(): void {
    this.isEnabled = !this.isEnabled;
    this.stylesClass = this.isEnabled ? "enabled" : "disabled";
  }

  getMod(value: number, mod: number): number {
    if (value == 0) return -1;
    return Math.abs(value % mod);
  }

  pushToList(s: string): void {
    this.list.push(s);
  }

  popFromList(index: number): void {
    this.list.splice(index, 1);
  }
}
